import ContentLoader from 'react-content-loader';

const CategoriesSkeleton = () => {
  const renderCategoriesSkeleton = Array(4)
    .fill(0)
    .map((_, idx) => (
      <div className="flex justify-center" key={idx}>
        <ContentLoader
          speed={3}
          width={215}
          height={215}
          viewBox="0 0 176 176"
          backgroundColor="#f3f3f3"
          foregroundColor="#bababa"
        >
          <circle cx="92" cy="77" r="65" />
          <rect x="70" y="137" rx="0" ry="0" width="0" height="1" />
          <rect x="44" y="157" rx="3" ry="3" width="100" height="7" />
        </ContentLoader>
      </div>
    ));
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
      {renderCategoriesSkeleton}
    </div>
  );
};

export default CategoriesSkeleton;
