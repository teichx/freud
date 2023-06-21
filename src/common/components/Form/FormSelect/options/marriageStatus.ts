export const marriageStatus = [
  'single',
  'married',
  'separated',
  'divorced',
  'widowed',
] as const;

export type MarriageStatusOptions = (typeof marriageStatus)[number];
