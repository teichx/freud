export const schooling = [
  'illiterate',
  'elementarySchoolIncomplete',
  'elementarySchoolComplete',
  'highSchoolIncomplete',
  'highSchoolComplete',
  'higherEducationComplete',
  'postGraduation',
  'master',
  'doctorate',
  'postDoctorate',
] as const;

export type SchoolingOptions = (typeof schooling)[number];
