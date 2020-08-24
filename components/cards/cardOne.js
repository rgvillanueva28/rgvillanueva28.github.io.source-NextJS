import Link from "next/link";

export default function CardOne({ onTop }) {
  return (
    <div className="flex flex-col text-center container-sm p-10 sm:px-12 md:px-20 lg:px-32 rounded-md lg:flex lg:flex-row min-h-screen">
      {/* <img
        src="/logo.png"
        className="w-24 md:w-48 xl:w-64 mx-auto mb-5 rounded-full bg-gray-500"
      /> */}
      <div className="text-left  pt-5 lg:pt-0 min-h-full lg:justify-center lg:flex lg:flex-col">
        <p className="text-accent-light text-base">
          <strong>Hi there! I am</strong>
        </p>
        <p className="text-foreground text-2xl md:text-2xl lg:text-4xl">
          <strong>Rane Gillian.</strong>
        </p>
        <p className="text-foreground mb-3 text-2xl md:text-2xl lg:text-4xl">
          <strong>Aspiring Developer.</strong>
        </p>
        <p className="text-accent-light text-base">
          I am currently a Bachelor of Science in Computer Engineering student at Mapúa University.
          Cybersecurity, Web Development, Mobile Development, Data Analysis and Visualization, and Artificial Intelligence are the fields that I want to learn.
          I have also created several projects. Check out the portfolio tab for more information about these projects.
        </p>
        <Link href="/contact">
          <button className={"transition duration-200 ease-in-out py-2 px-4 bg-transparent rounded-md text-accent-light border-2 border-accent-light hover:bg-accent-light hover:text-foreground focus:outline-none mr-auto mt-5 " + (onTop ? "animate-bounce hover:animate-none": "")}>
            Contact
          </button>
        </Link>
      </div>
      <img className="mx-5 pt-10 sm:mx-10 md:mx-16 lg:w-screen min-h-full" src="/landingImage.svg" />
    </div>
  );
}