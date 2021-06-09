export interface dataTypes {
  id: number;
  title: string;
}

export type recordsTypes = {
  records: Array<recordsArr>;
};
interface recordsArr {
  id: number;
  dataId: number;
  label: string;
  author: string;
  description: string;
}

export interface commentsTypes {
  id: number;
  recordId: number;
  name: string;
  label: string;
}
