import { dataTypes, recordsTypes } from '../data/data-types';
let i = 33;
export const newId = () => {
  return Math.random() + i++;
};

const getAuthor = () => {
  const author = localStorage.getItem('name');
  return author || '';
};

export const thisBoardRecords = (id: number) => {
  const records = JSON.parse(localStorage.getItem('records') || '');
  return records.filter((recordsItem: recordsTypes) => {
    return id === recordsItem.dataId;
  });
};

export const editBoardTitle = (id: number, newValue: string): void => {
  const newData = JSON.parse(localStorage.getItem('data') || '');
  localStorage.setItem(
    'data',
    JSON.stringify(
      newData.map((item: dataTypes) => ({
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
  currentStateData: Array<recordsTypes>
): void => {
  const data: Array<recordsTypes> = JSON.parse(localStorage.getItem('records') || '');

  const newData: recordsTypes = {
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
  currentStateData: Array<recordsTypes>
): void => {
  const records = JSON.parse(localStorage.getItem('records') || '');

  changeStateData(currentStateData.filter((item: any) => item.id !== id));

  localStorage.setItem(
    'records',
    JSON.stringify(
      records.filter((item: recordsTypes) => {
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
        newRecord.map((item: recordsTypes) => ({
          ...item,
          label: id === item.id ? newValue : item.label,
        }))
      )
    );
  }
};
