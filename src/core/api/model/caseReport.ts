import { Schema, model } from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
import { ValueType } from 'dynamoose/dist/Schema';

import { CaseReportModelFields } from '~/core/contract';

export const getCaseReportPK = ({
  tenantId,
  patientId,
}: {
  tenantId: string;
  patientId: string;
}) => `Tenant#${tenantId}Patient#${patientId}`;

export const CASE_REPORT_PREFIX = {
  PK: 'Tenant#{0}Patient#{1}',
  SK: 'CaseReport#',
};

const ISO_TYPE = {
  type: {
    value: Date,
    settings: {
      storage: 'iso',
    },
  },
};

export const caseReportDynamoSchema = new Schema(
  {
    PK: {
      type: String,
      hashKey: true,
      get: () => '',
    },
    SK: {
      type: String,
      rangeKey: true,
      set: (value) =>
        value.toString().startsWith(CASE_REPORT_PREFIX.SK)
          ? value
          : `${CASE_REPORT_PREFIX.SK}${value}`,
      get: (value) => value.toString().replace(CASE_REPORT_PREFIX.SK, ''),
    },
    createdAt: ISO_TYPE,
    updatedAt: ISO_TYPE,
    archivedAt: ISO_TYPE,
    reportingDate: {
      type: ISO_TYPE.type,
      get: (x: ValueType) =>
        x instanceof Date ? x.toISOString().split('T')[0] : x,
    },
    content: String,
    resume: String,
  },
  {
    saveUnknown: false,
  }
);

export const CaseReport = model<CaseReportModelFields & Item>(
  'CaseReport',
  caseReportDynamoSchema,
  {
    tableName: process.env.DYNAMO_TABLE_NAME,
  }
);
