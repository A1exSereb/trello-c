import { CommentType, DataType, RecordType } from '../data/data-types';

// general
let i = 33;
export const newId = (): number => {
  return Math.random() + i++;
};

export const getAuthor = (): string => {
  const author = localStorage.getItem('name');
  return author || '';
};

// board
export const boardRecord = (id: number): Array<RecordType> => {
  const records = JSON.parse(localStorage.getItem('records') || '');
  return records.filter((item: RecordType) => {
    return id === item.dataId;
  });
};

export const editBoardTitle = (id: number, newValue: string): void => {
  const newData = JSON.parse(localStorage.getItem('data') || '');
  localStorage.setItem(
    'data',
    JSON.stringify(
      newData.map((item: DataType) => ({
        ...item,
        title: id === item.id ? newValue : item.title,
      }))
    )
  );
};

export const setNewRecord = (
  id: number,
  newValue: string,
  changeStateData: React.Dispatch<React.SetStateAction<RecordType[]>>,
  currentStateData: Array<RecordType>
): void => {
  const data: Array<RecordType> = JSON.parse(localStorage.getItem('records') || '');

  const newData: RecordType = {
    id: newId(),
    dataId: id,
    label: newValue,
    author: getAuthor(),
    description: '',
  };

  localStorage.setItem('records', JSON.stringify([...data, newData]));

  changeStateData([...currentStateData, newData]);
};

export const deleteBoardItem = (
  id: number,
  changeStateData: React.Dispatch<React.SetStateAction<RecordType[]>>,
  currentStateData: Array<RecordType>
): void => {
  const records = JSON.parse(localStorage.getItem('records') || '');

  changeStateData(currentStateData.filter((item: RecordType) => item.id !== id));

  localStorage.setItem(
    'records',
    JSON.stringify(
      records.filter((item: RecordType) => {
        return id !== item.id;
      })
    )
  );
};

export const editRecord = (
  id: number,
  newValue: string,
  currentStateData?: Array<RecordType>,
  changeStateData?: React.Dispatch<React.SetStateAction<RecordType[]>>
): void => {
  if (newValue !== '') {
    const records = JSON.parse(localStorage.getItem('records') || '');

    if (changeStateData && currentStateData) {
      changeStateData(
        currentStateData.map((item: RecordType) => ({
          ...item,
          label: id === item.id ? newValue : item.label,
        }))
      );
    }

    localStorage.setItem(
      'records',
      JSON.stringify(
        records.map((item: RecordType) => ({
          ...item,
          label: id === item.id ? newValue : item.label,
        }))
      )
    );
  }
};

// modal board item

export const editBoardItemDescription = (id: number, newValue: string): void => {
  const newData = JSON.parse(localStorage.getItem('records') || '');
  localStorage.setItem(
    'records',
    JSON.stringify(
      newData.map((item: RecordType) => ({
        ...item,
        description: id === item.id ? newValue : item.description,
      }))
    )
  );
};

export const boardItemComment = (id: number): Array<CommentType> => {
  const records = JSON.parse(localStorage.getItem('comments') || '');
  return records.filter((item: CommentType) => {
    return id === item.recordId;
  });
};

export const deleteComment = (
  id: number,
  changeStateData: React.Dispatch<React.SetStateAction<CommentType[]>>,
  currentStateData: Array<CommentType>
): void => {
  const records = JSON.parse(localStorage.getItem('comments') || '');

  changeStateData(currentStateData.filter((item: CommentType) => item.id !== id));

  localStorage.setItem(
    'comments',
    JSON.stringify(
      records.filter((item: CommentType) => {
        return id !== item.id;
      })
    )
  );
};

export const setNewComment = (
  id: number,
  newValue: string,
  changeStateData: React.Dispatch<React.SetStateAction<CommentType[]>>,
  currentStateData: Array<CommentType>
): void => {
  const data: Array<CommentType> = JSON.parse(localStorage.getItem('comments') || '');

  const newData: CommentType = {
    id: newId(),
    recordId: id,
    label: newValue,
    name: getAuthor(),
  };

  localStorage.setItem('comments', JSON.stringify([...data, newData]));

  changeStateData([...currentStateData, newData]);
};

export const editComment = (
  id: number,
  newValue: string,
  currentStateData: Array<CommentType>,
  changeStateData: React.Dispatch<React.SetStateAction<CommentType[]>>
): void => {
  if (newValue !== '') {
    const comments = JSON.parse(localStorage.getItem('comments') || '');

    changeStateData(
      currentStateData.map((item: CommentType) => ({
        ...item,
        label: id === item.id ? newValue : item.label,
      }))
    );

    localStorage.setItem(
      'comments',
      JSON.stringify(
        comments.map((item: RecordType) => ({
          ...item,
          label: id === item.id ? newValue : item.label,
        }))
      )
    );
  }
};
