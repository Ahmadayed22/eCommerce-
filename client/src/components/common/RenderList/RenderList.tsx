import { LottieHandler } from '@components/feedbaks';

type TRenderList<T> = {
  records: T[];
  renderItem: (recrod: T) => React.ReactNode;
  emptyMessage: string;
};

type HasId = { id?: number }; // to solve record.id
const RenderList = <T extends HasId>({
  records,
  renderItem,
  emptyMessage,
}: TRenderList<T>) => {
  const productsList =
    records.length > 0 ? (
      records.map((record) => (
        <div className="flex justify-center" key={record.id}>
          {renderItem(record)}
        </div>
      ))
    ) : (
      <div className="">
        <LottieHandler type="empty" message={emptyMessage} />
      </div>
    );
  return productsList;
};

export default RenderList;
