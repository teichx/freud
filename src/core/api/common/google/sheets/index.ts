import { google } from 'googleapis';

import { getToken } from '../../token';
import { ReqProps } from '../../types';
import { GoogleSheetsResult, ListRowsProps } from './types';

export const googleSheets = ({ req }: ReqProps): GoogleSheetsResult => {
  const service = google.sheets({
    version: 'v4',
    headers: {
      Authorization: getToken({ req }),
    },
  });
  const listRows = async ({ spreadsheetId, limit, offset }: ListRowsProps) => {
    const MIN_START_DATA_INDEX = 2;
    const HEADER_INDEX = 1;
    const START_DATA_INDEX = Math.max(0, offset) + MIN_START_DATA_INDEX;
    const END_DATA_INDEX = START_DATA_INDEX + limit - HEADER_INDEX;
    if (END_DATA_INDEX === 0) return [];

    const rows = await service.spreadsheets.values.batchGet({
      majorDimension: 'ROWS',
      spreadsheetId,
      ranges: [
        "'Página1'!A1:Z1",
        `'Página1'!A${START_DATA_INDEX}:Z${END_DATA_INDEX}`,
      ],
    });

    const allRows = (rows.data.valueRanges || []).reduce<string[][]>(
      (acc, { values }) => [...acc, ...(Array.isArray(values) ? values : [])],
      []
    );

    return allRows;
  };

  const listRowsInObject = async (props: ListRowsProps) => {
    const [header, ...rows] = await listRows(props);
    if (!rows) return [];

    const rowsObjectList = rows.map<Record<string, string>>((row) =>
      row.reduce(
        (acc, columns, index) => ({
          ...acc,
          [header[index]]: columns,
        }),
        {}
      )
    );

    return rowsObjectList;
  };

  return { listRows, listRowsInObject };
};
