import { MarriageStatusOptions } from './marriageStatus';
import { SchoolingOptions } from './schooling';

export type MarriageKeys = `marriageStatus.${MarriageStatusOptions}`;
export type SchoolingKeys = `schooling.${SchoolingOptions}`;

export type AllOptionsKeys = MarriageKeys | SchoolingKeys;
