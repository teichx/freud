import { NextRequest, NextResponse } from 'next/server';
import { ulid } from 'ulid';

import { FreudPdfDocument } from '~/common/document';
import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';
import { Patient } from '~/core/modules/Patient/api/model';
import { getPatientDocument } from '~/core/modules/Patient/document/patientDocs';

export const GET = async (
  _: NextRequest,
  ctx: { params: { patientId: string } }
) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { patientId: id } = ctx.params;
  if (!id) return sendError({ error: 'patientId in query is required' });

  const [patient] = await Patient.query({
    PK: { eq: customerId },
    SK: { eq: id },
  }).exec();

  if (!patient) {
    return sendError({
      error: 'Patient not found',
      status: 'NotFound',
    });
  }

  const documentId = ulid().toUpperCase();
  const patientDocument = getPatientDocument({
    documentId,
    patient,
    language: 'pt-BR',
  });

  const document = new FreudPdfDocument();
  const stream = await document.createDocumentStream(patientDocument);

  return new NextResponse(stream, {
    headers: {
      'Content-Disposition': `filename=${patient.name}.pdf`,
    },
  });
};
