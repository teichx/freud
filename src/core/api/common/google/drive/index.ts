import { google } from 'googleapis';

import { getToken } from '../../token';
import { ReqProps } from '../../types';
import { EnumMimeType } from '../constants';
import {
  CreateDriveProps,
  CreateFolderProps,
  GoogleDriveResult,
} from './types';

export const googleDrive = ({ req }: ReqProps): GoogleDriveResult => {
  const service = google.drive({
    version: 'v3',
    headers: {
      Authorization: getToken({ req }),
    },
  });

  const createDrive = async ({
    name,
    parents = [],
    mimeType,
  }: CreateDriveProps) => {
    const fileExists = await service.files.list({
      q: `mimeType='${mimeType}' and trashed=false and name='${name}'`,
      fields: 'files(id)',
    });
    if (fileExists.data.files?.length) return fileExists.data.files[0].id || '';

    const file = await service.files.create({
      requestBody: {
        mimeType: mimeType,
        description: 'FreudSystem',
        parents,
        name,
      },
      fields: 'id',
    });
    return file.data.id || '';
  };

  const createFolder = async ({ name, parents = [] }: CreateFolderProps) =>
    await createDrive({ name, parents, mimeType: EnumMimeType.Folder });

  const createSpreadsheet = async ({ name, parents = [] }: CreateFolderProps) =>
    await createDrive({ name, parents, mimeType: EnumMimeType.Spreadsheet });

  return {
    createDrive,
    createFolder,
    createSpreadsheet,
  };
};
