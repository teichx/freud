import { COGNITIVE_FIELDS } from './constants';

export type CognitiveVariant = (typeof COGNITIVE_FIELDS.cognitive)[number];
export type EmotionalVariant = (typeof COGNITIVE_FIELDS.emotional)[number];

export type CognitiveKeys = `cognitive.${CognitiveVariant}`;
export type EmotionalKeys = `emotional.${EmotionalVariant}`;

export type CognitiveOptionsKeys = CognitiveKeys | EmotionalKeys;
