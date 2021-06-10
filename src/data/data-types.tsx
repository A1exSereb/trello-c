export type dataTypes = {
  id: number;
  title: string;
};

export type recordsTypes = {
  id: number;
  dataId: number;
  label: string;
  author: string;
  description: string;
};

export type commentsTypes = {
  id: number;
  recordId: number;
  name: string;
  label: string;
};
