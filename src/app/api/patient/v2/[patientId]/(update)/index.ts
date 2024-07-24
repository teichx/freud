import {
  UpdateItemCommand,
  UpdateItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import { NextResponse } from 'next/server';

import { dynamoDb } from '~/common/database/dynamo';
import { mountUpdate } from '~/common/database/dynamo/mountUpdate';
import { DefaultTable } from '~/common/database/dynamo/tableDefinition';
import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';
import { parseSearchTerm } from '~/core/modules/Patient/api/parseSearchTerm';

import { patientDynamoSchema, setPatientPK, setPatientSK } from '../../model';
import { getPatientSchema } from '../../schema/schema';
import { UpdatePatientHandler } from './types';

export const update: UpdatePatientHandler = async (req, ctx) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { patientId } = ctx.params;
  if (!patientId) return sendError({ error: 'patientId in query is required' });
  const updatedAt = new Date().toISOString();
  const PK = setPatientPK(customerId).toString();
  const SK = setPatientSK(patientId).toString();

  try {
    const schema = getPatientSchema();
    const patientFromBody = await req.json();
    const patientValidate = await schema.validate(patientFromBody);
    const patient = {
      ...patientValidate,
      updatedAt,
    };
    if (patient?.name) {
      const searchTerm = parseSearchTerm([patient.name]);
      Object.assign(patient, {
        searchTerm,
      });
    }

    const params: UpdateItemCommandInput = {
      ...mountUpdate({
        schema: patientDynamoSchema,
        item: patient,
      }),
      Key: {
        [DefaultTable.partitionKey]: { S: PK },
        [DefaultTable.sortKey]: { S: SK },
      },
      ReturnValues: 'NONE',
    };
    const command = new UpdateItemCommand(params);
    await dynamoDb.send(command);

    return NextResponse.json({
      updatedAt,
    });
  } catch (error) {
    return sendError({ error: `${error}` });
  }
};
