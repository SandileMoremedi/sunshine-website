import Image from "next/image";
const ErrorPage = () => {
  return (
    <>
      <div className="errorPage">
        <h1>Welcome To Sunshine Cash & Carry</h1>
        <div className="errorPage__items">
          <div className="errorPage__text">
            <h2>404 Page</h2>
            <p>The page you are looking for is unavailable</p>
          </div>
          <div className="errorPage__image">
            <Image
              src="/patternpad.svg"
              width="600"
              height="450"
              alt="404 Page Picture"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
