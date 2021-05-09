import { Card } from "./card";

const posts = [
  {
    imgSrc: "/images/visa-1.png",
    title: "VISA",
    description: "Australian Passport Visa Free countries: the ultimate list",
  },
  {
    imgSrc: "/images/how-to.png",
    title: "HOW TO",
    description: "Best onward ticket service: How to choose the right one?",
  },
  {
    imgSrc: "/images/what-is.png",
    title: "WHAT IS",
    description: "Fly Onward: what are the alternatives?",
  },
  {
    imgSrc: "/images/visa-2.png",
    title: "VISA",
    description: "How to generate a fake flight ticket?",
  },
];

const Main = () => (
  <main className={"mx-auto w-327 lg:w-760"}>
    <div className={"text-blue text-xl"}>BLOG</div>
    <div className={"mt-20"}>
      <button
        className={
          "text-blue bg-gray py-11 px-20 rounded-10 text-sm font-medium"
        }
      >
        VISA
      </button>
      <button
        className={
          "text-blue bg-gray ml-10 py-11 px-20 rounded-10 text-sm font-medium"
        }
      >
        HOW TO
      </button>
      <button
        className={
          "text-blue bg-gray ml-10 py-11 px-20 rounded-10 text-sm font-medium"
        }
      >
        WHAT IS
      </button>
    </div>
    <div
      className={"flex flex-wrap mt-60 justify-between flex-col lg:flex-row items-stretch"}
    >
      {posts.map((post, index) => (
        <Card key={index} {...post} />
      ))}
      <div
        className={
          "mt-60 bg-top-30 bg-lightgreen bg-ticket h-373 bg-no-repeat flex pt-180 flex-col lg:items-start lg:pt-0 lg:pl-50 lg:w-495 lg:h-auto lg:bg-right-top-40 lg:justify-center items-center rounded-20"
        }
      >
        <div
          className={
            "uppercase text-white text-2xl font-bold max-w-240 lg:max-w-140 text-center lg:text-left"
          }
        >
          Travel with ease
        </div>
        <button
          className={
            "h-54 uppercase bg-yellowgreen font-bold text-base text-blue py-17 px-40 w-287 rounded-14 mt-30 lg:w-124"
          }
        >
          Book
        </button>
      </div>
    </div>
    <div className={"flex justify-center"}>
      <button
        className={
          "text-blue bg-gray py-19 px-142 rounded-14 text-md font-medium mt-80 lg:uppercase lg:px-75"
        }
      >
        more
      </button>
    </div>
  </main>
);

export default Main;
