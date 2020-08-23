export default function CardOne() {
  return (
    <div className="flex flex-col text-center container-sm p-10 sm:px-12 md:px-20 lg:px-32 rounded-md lg:flex lg:flex-row min-h-screen">
      {/* <img
        src="/logo.png"
        className="w-24 md:w-48 xl:w-64 mx-auto mb-5 rounded-full bg-gray-500"
      /> */}
      <img className="mx-5 pt-10 sm:mx-20 md:mx-24 lg:w-screen min-h-full" src="/landingImage.svg" />
      <div className="lg:text-right lg:pl-24 xl:pl-64 pt-5 lg:pt-0 min-h-full lg:justify-center lg:flex lg:flex-col">
        <h4 className="text-foreground">
          <strong>Hi there! Welcome to my page. </strong>
        </h4>
        <p className="text-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}