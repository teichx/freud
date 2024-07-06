export const COGNITIVE_FIELDS = {
  cognitive: ['sensory', 'perception', 'focus', 'memory'],
  emotional: [
    'decision',
    'affectivity',
    'anxiety',
    'fear',
    'grief',
    'anger',
    'humor',
    'blame',
    'aggressiveness',
    'discouragement',
  ],
} as const;

export const COGNITIVE_FIELDS_TYPES = ['cognitive', 'emotional'] as const;

export const COMPLAINED_HISTORY_FIELDS = [
  'problemInitiation',
  'frequencyAndIntensity',
  'previousTreatments',
  'medication',
] as const;
