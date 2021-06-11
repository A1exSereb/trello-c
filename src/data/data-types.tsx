export type DataType = {
  id: number;
  title: string;
};

export type RecordType = {
  id: number;
  dataId: number;
  label: string;
  author: string;
  description: string;
};

export type CommentType = {
  id: number;
  recordId: number;
  name: string;
  label: string;
};
