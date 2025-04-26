import ContentLoader from 'react-content-loader';

const WishListSkeleton = () => {
  const renderCategoriesSkeleton = Array(4)
    .fill(0)
    .map((_, idx) => (
      <div className="flex justify-center" key={idx}>
        <ContentLoader
          speed={2}
          width={190}
          height={300}
          viewBox="0 0 190 300"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff"
        >
          <rect x="32" y="179" rx="3" ry="3" width="105" height="8" />
          <rect x="31" y="4" rx="0" ry="0" width="119" height="162" />
          <rect x="32" y="199" rx="3" ry="3" width="86" height="9" />
          <rect x="32" y="220" rx="3" ry="3" width="86" height="9" />
          <rect x="31" y="239" rx="0" ry="0" width="118" height="31" />
        </ContentLoader>
      </div>
    ));
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
      {renderCategoriesSkeleton}
    </div>
  );
};

export default WishListSkeleton;
