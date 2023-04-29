import { EnumMimeType } from '../constants';

export type CreateDriveProps = {
  name: string;
  parents?: string[];
  mimeType: EnumMimeType;
};

export type CreateFolderProps = Omit<CreateDriveProps, 'mimeType'>;

export type CreateSpreadsheetProps = Omit<CreateDriveProps, 'mimeType'>;

export type GoogleDriveResult = {
  createDrive: (props: CreateDriveProps) => Promise<string>;
  createFolder: (props: CreateFolderProps) => Promise<string>;
  createSpreadsheet: (props: CreateSpreadsheetProps) => Promise<string>;
};
