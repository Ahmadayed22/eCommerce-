type THeading = {
  children: React.ReactNode;
};

const Heading = ({ children }: THeading) => {
  return <div className="mb-6  pb-1 text-3xl ">{children}</div>;
};

export default Heading;
