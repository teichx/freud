import { common } from './common';
import { components } from './components';
import { document } from './document';
import { email } from './email';
import { project } from './project';
import { translations } from './translations';
import { validation } from './validation';

const ptBR = {
  common,
  email,
  project,
  document,
  translations,
  validation,
  components,
} as const;

export default ptBR;
