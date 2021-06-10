export const editTitle = (id: number, newValue: string): void => {
  const newData = JSON.parse(localStorage.getItem('data') || '');
  localStorage.setItem(
    'data',
    JSON.stringify(
      newData.map((item: any) => ({
        ...item,
        title: id === item.id ? newValue : item.title,
      }))
    )
  );
};
