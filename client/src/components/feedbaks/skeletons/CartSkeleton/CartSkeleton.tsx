import ContentLoader from 'react-content-loader';

const CartSkeleton = () => {
  const renderCategoriesSkeleton = Array(4)
    .fill(0)
    .map((_, idx) => (
      <div className="text-start" key={idx}>
        <ContentLoader
          speed={2}
          width={850}
          height={210}
          viewBox="0 0 500 210"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff"
        >
          <rect x="140" y="2" rx="3" ry="3" width="105" height="8" />
          <rect x="6" y="2" rx="0" ry="0" width="119" height="178" />
          <rect x="141" y="19" rx="3" ry="3" width="86" height="9" />
          <rect x="140" y="141" rx="0" ry="0" width="96" height="37" />
        </ContentLoader>
      </div>
    ));
  return (
    <div className="flex flex-col justify-between relative">
      {renderCategoriesSkeleton}
    </div>
  );
};

export default CartSkeleton;
