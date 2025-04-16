type TRenderList<T> = {
  records: T[];
  renderItem: (recrod: T) => React.ReactNode;
};

type HasId = { id?: number }; // to solve record.id
const RenderList = <T extends HasId>({
  records,
  renderItem,
}: TRenderList<T>) => {
  const productsList =
    records.length > 0
      ? records.map((record) => (
          <div className="flex justify-center" key={record.id}>
            {renderItem(record)}
          </div>
        ))
      : 'there is no products';
  return productsList;
};

export default RenderList;
