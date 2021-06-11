import { DataType, RecordType } from '../data/data-types';

// general
let i = 33;
export const newId = (): number => {
  return Math.random() + i++;
};

const getAuthor = () => {
  const author = localStorage.getItem('name');
  return author || '';
};

// board
export const thisBoardRecord = (id: number): Array<RecordType> => {
  const records = JSON.parse(localStorage.getItem('records') || '');
  return records.filter((recordsItem: RecordType) => {
    return id === recordsItem.dataId;
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
  changeStateData: Function,
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
  changeStateData: Function,
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

export const editRecord = (id: number, newValue: string, changeStateData: Function): void => {
  if (newValue !== '') {
    const newRecord = JSON.parse(localStorage.getItem('records') || '');

    changeStateData(newValue);

    localStorage.setItem(
      'records',
      JSON.stringify(
        newRecord.map((item: RecordType) => ({
          ...item,
          label: id === item.id ? newValue : item.label,
        }))
      )
    );
  }
};

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
