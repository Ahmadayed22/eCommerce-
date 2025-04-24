import React from 'react';

const Heading = ({ title }: { title: string }) => {
  return <div className="mb-6  pb-1 text-3xl ">{title}</div>;
};

export default React.memo(Heading);
