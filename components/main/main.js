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
  <main className={"mx-auto px-24 max-w-375 lg:max-w-760 lg:px-0"}>
    <div className={"text-blue text-xl"}>BLOG</div>
    <div className={"mt-20 flex"}>
      <button
        className={
          "text-blue bg-gray py-11 max-w-69 flex-grow rounded-10 text-sm font-medium"
        }
      >
        VISA
      </button>
      <button
        className={
          "text-blue bg-gray ml-10 py-11 max-w-93 flex-grow rounded-10 text-sm font-medium"
        }
      >
        HOW TO
      </button>
      <button
        className={
          "text-blue bg-gray ml-10 py-11 max-w-93 flex-grow rounded-10 text-sm font-medium"
        }
      >
        WHAT IS
      </button>
    </div>
    <div
      className={
        "flex flex-wrap justify-between flex-col lg:flex-row items-stretch gap-y-40 lg:gap-y-60 mt-60"
      }
    >
      {posts.map((post, index) => (
        <Card key={index} {...post} />
      ))}
      <div
        className={
          "px-20 bg-top-30 bg-green-dark bg-ticket h-373 bg-no-repeat flex pt-180 flex-col max-w-100 lg:max-w-100 lg:items-start lg:pt-0 lg:pl-50 lg:w-495 lg:h-auto lg:bg-right-top-40 lg:justify-center lg:px-0 items-center rounded-20"
        }
      >
        <div
          className={
            "uppercase text-white text-3xl font-bold max-w-240 lg:max-w-140 text-center lg:text-left"
          }
        >
          Travel with ease
        </div>
        <button
          className={
            "h-54 uppercase bg-green-salad font-bold text-base text-blue py-17 w-full max-w-287 rounded-14 mt-30 lg:w-124"
          }
        >
          Book
        </button>
      </div>
    </div>
    <div className={"flex justify-center"}>
      <button
        className={
          "text-blue bg-gray py-19 w-full rounded-14 text-md font-medium mt-80 lg:uppercase lg:px-75 mb-20 lg:mb-0 lg:w-auto"
        }
      >
        more
      </button>
    </div>
  </main>
);

export default Main;
