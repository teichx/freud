import { Schema } from 'dynamoose';

const ISO_TYPE = {
  type: {
    value: Date,
    settings: {
      storage: 'iso',
    },
  },
};

export const fixtureSchema = new Schema({
  PK: {
    type: String,
    hashKey: true,
  },
  SK: {
    type: Number,
    rangeKey: true,
  },
  createdAt: ISO_TYPE,
  deletedAt: ISO_TYPE,
  deep: {
    type: Object,
    schema: {
      mostDeep: {
        type: Object,
        schema: {
          date: ISO_TYPE,
        },
      },
    },
  },
  select: {
    type: Object,
    schema: {
      once: {
        type: String,
        enum: ['a', 'b', 'c'],
      },
    },
  },
  deepSet: {
    type: Object,
    schema: {
      cognitiveDetails: String,
      stringSet: {
        type: Set,
        schema: [
          {
            type: String,
            enum: ['x', 'y', 'z'],
          },
        ],
      },
      numberSet: {
        type: Set,
        schema: [
          {
            type: Number,
            enum: [1, 2, 3],
          },
        ],
      },
    },
  },
});
