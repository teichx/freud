export type SpreadsheetProps = {
  spreadsheetId: string;
};

export type ListRowsProps = SpreadsheetProps & {
  limit: number;
  offset: number;
};

export type GoogleSheetsResult = {
  listRows: (props: ListRowsProps) => Promise<string[][]>;
  listRowsInObject: (props: ListRowsProps) => Promise<Record<string, string>[]>;
};
