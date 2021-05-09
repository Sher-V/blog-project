import { Footer, Header, UiLink } from "../../components";
import { Card } from "../../components/main/card";

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
];

const Post = () => (
  <div>
    <Header />

    <div className={"mx-auto lg:max-w-760 relative"}>
      <div className={'absolute top-0 -left-82 hidden lg:block'}>
        <button className={"bg-gray w-54 h-54 text-blue rounded-10 flex justify-center items-center"}>
          <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M2.5 6.66667H0V10H2.5V20H6.66667V10H9.70167L10 6.66667H6.66667V5.2775C6.66667 4.48167 6.82667 4.16667 7.59583 4.16667H10V0H6.82667C3.83 0 2.5 1.31917 2.5 3.84583V6.66667Z"
                fill="#1F368D"
            />
          </svg>
        </button>
        <button
            className={
              "bg-gray w-54 h-54 rounded-10 flex justify-center items-center mt-10"
            }
        >
          <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M20 1.92417C19.2642 2.25083 18.4733 2.47083 17.6433 2.57C18.4908 2.0625 19.1417 1.25833 19.4475 0.3C18.655 0.77 17.7767 1.11167 16.8417 1.29583C16.0942 0.498333 15.0267 0 13.8467 0C11.1975 0 9.25083 2.47167 9.84917 5.0375C6.44 4.86667 3.41667 3.23333 1.3925 0.750833C0.3175 2.595 0.835 5.0075 2.66167 6.22917C1.99 6.2075 1.35667 6.02333 0.804167 5.71583C0.759167 7.61667 2.12167 9.395 4.095 9.79083C3.5175 9.9475 2.885 9.98417 2.24167 9.86083C2.76333 11.4908 4.27833 12.6767 6.075 12.71C4.35 14.0625 2.17667 14.6667 0 14.41C1.81583 15.5742 3.97333 16.2533 6.29 16.2533C13.9083 16.2533 18.2125 9.81917 17.9525 4.04833C18.7542 3.46917 19.45 2.74667 20 1.92417Z"
                fill="#1F368D"
            />
          </svg>
        </button>
        <button className={"bg-gray w-full w-54 h-54 rounded-10 mt-10 flex justify-center items-center"}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="10" r="2" fill="#CCD5F5"/>
            <circle cx="10" cy="10" r="2" fill="#CCD5F5"/>
            <circle cx="18" cy="10" r="2" fill="#CCD5F5"/>
          </svg>

        </button>
      </div>
      <div className={"text-center"}>
        <button
          className={
            "text-blue bg-gray py-11 px-20 rounded-10 text-sm font-medium"
          }
        >
          VISA
        </button>
      </div>
      <div
        className={
          "text-blue text-2xl mt-20 font-bold max-w-340 lg:max-w-520 mx-auto text-center"
        }
      >
        Fly Onward: what are the alternatives?
      </div>
      <img
        className={"mt-60 w-auto max-w-374 mx-auto lg:max-w-full"}
        src={"/images/how-to-big.png"}
      />
      <div className={"mx-auto max-w-327 lg:max-w-full"}>
        <div className={"mt-60 text-blue text-description"}>
          For long-time travelers that needed flight reservation for their visa
          application , there was a very well-known service that used to operate
          online : Fly Onward. The website used to work very well until 2017,
          when customers started to complain they didn't receive their tickets
          anymore. The service disappeared a few months later, leaving travelers
          by themselves. Luckily, other alternatives exist to overcome the
          problem with Fly Onward…
        </div>
        <h2 className={"text-blue font-bold text-h2 mt-60"}>
          What is Fly Onward
        </h2>
        <div className={"mt-40"}>
          <h3 className={"text-description text-blue font-medium"}>
            The service was pretty cheap :
          </h3>
          <ul>
            <li
              className={"flex items-center text-blue text-description mt-20"}
            >
              <span className={"inline-block w-6 h-6 bg-gray-dark rounded-full"} />
              <span className={"inline-block ml-20"}>
                $9,99 for a 24 hours valid ticket
              </span>
            </li>
            <li
              className={"flex items-center text-blue text-description mt-20"}
            >
              <span className={"inline-block w-6 h-6 bg-gray-dark rounded-full"} />
              <span className={"inline-block ml-20"}>
                $16,99 for a 48 hours valid ticket
              </span>
            </li>
          </ul>
        </div>
        <div className={"mt-40"}>
          <h3 className={"text-description text-blue font-medium"}>
            And you could add 2 different options :
          </h3>
          <ul>
            <li
              className={"flex items-center text-blue text-description mt-20"}
            >
              <span className={"inline-block w-6 h-6 bg-gray-dark rounded-full"} />
              <span className={"inline-block ml-20"}>
                Choose you destination for $10
              </span>
            </li>
            <li
              className={"flex items-center text-blue text-description mt-20"}
            >
              <span className={"inline-block w-6 h-6 bg-gray-dark rounded-full"} />
              <span className={"inline-block ml-20"}>
                Receive your ticket later for $1,99
              </span>
            </li>
          </ul>
        </div>
        <div className={"mt-60 text-blue text-description text-left"}>
          The reservation received by the FlyOnward customers came with a valid
          PNR number that could be directly checked on the airline website and
          on Checkmytrip.com. The service used to work perfectly and had a very
          responsive customer service. Fly Onward was basically the best site to
          get a flight reservation for visa application.
        </div>

        <h2 className={"text-left text-blue font-bold text-h2 mt-60"}>
          Best alternative to Fly Onward
        </h2>

        <div className={"mt-60 text-blue text-description text-left"}>
          <a
            href={"OnwardTicket.com"}
            className={"inline-block text-2lg py-2 px-10 rounded-10 bg-gray-dark"}
          >
            OnwardTicket.com
          </a>{" "}
          offers the same service than{" "}
          <a
            href={"Flyonward.com"}
            className={"inline-block text-2lg py-2 px-10 rounded-10 bg-gray-dark"}
          >
            Flyonward.com
          </a>{" "}
          with the benefit of the first being cheaper. OnwardTicket.com provides
          flight reservation for visa application made by real travel agencies.
          The website is straightforward, easy to use and the reservation is
          automatically sent straight away after the booking.
        </div>

        <button
          className={
            "uppercase bg-green-salad py-15 w-full mt-60 text-blue text-base font-bold rounded-14 flex justify-center items-center"
          }
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="white" />
            <path
              d="M17 30C17 29.4477 17.4477 29 18 29H32C32.5523 29 33 29.4477 33 30V33C33 34.1046 32.1046 35 31 35H19C17.8954 35 17 34.1046 17 33V30Z"
              fill="#D3FFAF"
            />
            <path
              d="M17 17C17 15.8954 17.8954 15 19 15H31C32.1046 15 33 15.8954 33 17V28C33 28.5523 32.5523 29 32 29H18C17.4477 29 17 28.5523 17 28V17Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M21 29L29 29"
              stroke="#1F368D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="26"
                y1="15"
                x2="24.015"
                y2="26.4157"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.645833" stopColor="#DDFFFB" />
                <stop offset="1" stopColor="#D3FFAE" />
              </linearGradient>
            </defs>
          </svg>
          <span className={"inline-block ml-20"}>book ticket</span>
        </button>

        <div className={"flex justify-between lg:hidden mt-20"}>
          <button className={"bg-gray w-60 h-60 text-blue rounded-10 flex justify-center items-center"}>
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 6.66667H0V10H2.5V20H6.66667V10H9.70167L10 6.66667H6.66667V5.2775C6.66667 4.48167 6.82667 4.16667 7.59583 4.16667H10V0H6.82667C3.83 0 2.5 1.31917 2.5 3.84583V6.66667Z"
                fill="#1F368D"
              />
            </svg>
          </button>
          <button
            className={
              "bg-gray w-60 h-60 rounded-10 flex justify-center items-center"
            }
          >
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 1.92417C19.2642 2.25083 18.4733 2.47083 17.6433 2.57C18.4908 2.0625 19.1417 1.25833 19.4475 0.3C18.655 0.77 17.7767 1.11167 16.8417 1.29583C16.0942 0.498333 15.0267 0 13.8467 0C11.1975 0 9.25083 2.47167 9.84917 5.0375C6.44 4.86667 3.41667 3.23333 1.3925 0.750833C0.3175 2.595 0.835 5.0075 2.66167 6.22917C1.99 6.2075 1.35667 6.02333 0.804167 5.71583C0.759167 7.61667 2.12167 9.395 4.095 9.79083C3.5175 9.9475 2.885 9.98417 2.24167 9.86083C2.76333 11.4908 4.27833 12.6767 6.075 12.71C4.35 14.0625 2.17667 14.6667 0 14.41C1.81583 15.5742 3.97333 16.2533 6.29 16.2533C13.9083 16.2533 18.2125 9.81917 17.9525 4.04833C18.7542 3.46917 19.45 2.74667 20 1.92417Z"
                fill="#1F368D"
              />
            </svg>
          </button>
          <button className={"bg-gray w-full max-w-188 h-60 rounded-10 flex justify-center items-center"}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="10" r="2" fill="#CCD5F5"/>
              <circle cx="10" cy="10" r="2" fill="#CCD5F5"/>
              <circle cx="18" cy="10" r="2" fill="#CCD5F5"/>
            </svg>
          </button>
        </div>

        <div className={"flex justify-between mt-100"}>
          <div className={"text-h2 font-bold text-blue"}>You can like this</div>
          <UiLink href={"/"} className={"text-blue text-h2"}>
            all
          </UiLink>
        </div>

        <div
          className={
            "flex flex-wrap justify-between flex-col lg:flex-row items-stretch"
          }
        >
          {posts.map((post, index) => (
            <Card key={index} {...post} />
          ))}
        </div>
      </div>

      <div className={"lg:hidden flex justify-center"}>
        <button
          className={
            "text-blue bg-gray py-19 px-142 rounded-14 text-md font-medium mt-80 lg:uppercase lg:px-75 mb-20 lg:mb-0"
          }
        >
          more
        </button>
      </div>
    </div>
    <Footer />
  </div>
);

export default Post;
