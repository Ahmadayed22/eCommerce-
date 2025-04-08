import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = 'Page Not Found';
  }

  return (
    <div className="pt-[15%] text-center">
      <h1 className="text-9xl">{errorStatus}</h1>
      <p className="text-5xl">{errorStatusText}</p>
      <p className="py-2 text-red-600">
        <Link to="/" replace={true}>
          How about going back to safety?
        </Link>
      </p>
    </div>
  );
};

export default Error;
