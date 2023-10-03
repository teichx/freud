import { Schema, model } from 'dynamoose';
import { ValueType } from 'dynamoose/dist/Schema';

import {
  marriageStatus,
  schooling,
} from '~/common/components/Form/FormSelect/options';
import { listToObject } from '~/common/helpers';
import { PatientFields } from '~/core/contract';
import { DynamoItemProps } from '~/core/contract/@types';
import { COGNITIVE_FIELDS } from '~/core/modules/Patient/PatientForm/constants';

export const PATIENT_PREFIX = {
  PK: 'Tenant#',
  SK: 'Patient#',
};

const ISO_TYPE = {
  type: {
    value: Date,
    settings: {
      storage: 'iso',
    },
  },
};

export const patientDynamoSchema = new Schema(
  {
    PK: {
      type: String,
      hashKey: true,
      set: (value) =>
        value.toString().startsWith(PATIENT_PREFIX.PK)
          ? value
          : `${PATIENT_PREFIX.PK}${value}`,
      get: () => '',
      aliases: 'tenantId',
    },
    SK: {
      type: String,
      rangeKey: true,
      set: (value) =>
        value.toString().startsWith(PATIENT_PREFIX.SK)
          ? value
          : `${PATIENT_PREFIX.SK}${value}`,
      get: (value) => value.toString().replace(PATIENT_PREFIX.SK, ''),
      alias: 'id',
    },
    createdAt: ISO_TYPE,
    updatedAt: ISO_TYPE,
    archivedAt: ISO_TYPE,
    calculated: {
      type: Object,
      schema: {
        caseReportCount: Number,
        lastCaseReport: ISO_TYPE,
      },
    },
    name: {
      type: String,
      required: true,
    },
    searchTerm: {
      type: String,
      required: false,
    },
    personal: {
      type: Object,
      schema: {
        birth: {
          type: ISO_TYPE.type,
          get: (x: ValueType) =>
            x instanceof Date ? x.toISOString().split('T')[0] : x,
        },
        gender: String,
        profession: String,
        cpf: String,
        rg: String,
        schooling: {
          type: String,
          enum: [...schooling],
        },
        marriageStatus: {
          type: String,
          enum: [...marriageStatus],
        },
        address: String,
        phoneNumber: String,
        emergency: String,
      },
    },
    firstConsult: {
      type: Object,
      schema: {
        principalReason: String,
        appearanceAndBehavior: String,
        demandAssessment: String,
      },
    },
    history: {
      type: Object,
      schema: {
        problemInitiation: String,
        frequencyAndIntensity: String,
        previousTreatments: String,
        medication: String,
      },
    },
    freeText: {
      type: Object,
      schema: {
        lifestyle: String,
        familyHistory: String,
        familyRelationship: String,
        traumaticEvents: String,
        affectiveExperiences: String,
        importantFacts: String,
        prognosis: String,
        treatment: String,
        other: String,
      },
    },
    symptoms: {
      type: Object,
      schema: {
        cognitiveDetails: String,
        cognitive: {
          type: Set,
          schema: [
            {
              type: String,
              enum: [...COGNITIVE_FIELDS.cognitive],
            },
          ],
          get: (x: ValueType) => listToObject(x as string[]),
        },
        emotionalDetails: String,
        emotional: {
          type: Set,
          schema: [
            {
              type: String,
              enum: [...COGNITIVE_FIELDS.emotional],
            },
          ],
          get: (x: ValueType) => listToObject(x as string[]),
        },
      },
    },
  },
  {
    saveUnknown: false,
  }
);

export const Patient = model<DynamoItemProps<PatientFields>>(
  'Patient',
  patientDynamoSchema,
  {
    tableName: process.env.DYNAMO_TABLE_NAME,
  }
);
