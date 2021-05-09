import { UiLink } from "../ui-link";
import { blueIcon, whiteIcon } from "./constants";

const Header = () => (
  <div
    className={
      "flex justify-between items-center py-25 max-w-327 lg:max-w-924 mx-auto"
    }
  >
    <div className={"flex items-center"}>
      <div
        className={
          "lg:bg-green-darkest lg:flex lg:justify-center lg:items-center lg:w-50 lg:h-50 lg:rounded-10"
        }
      >
        {blueIcon}
        {whiteIcon}
      </div>
      <span className={"hidden lg:block ml-16 text-blue font-medium text-lg"}>
        logo
      </span>
    </div>
    <div className={"hidden lg:block"}>
      <UiLink href={"/"} className={"inline-block ml-30 text-blue text-base"}>
        FAQ
      </UiLink>
      <UiLink href={"/"} className={"inline-block ml-30 text-blue text-base"}>
        About US
      </UiLink>
      <UiLink href={"/"} className={"inline-block ml-30 text-blue text-base"}>
        Contact
      </UiLink>
    </div>
    <div
      className={
        "lg:hidden flex justify-center items-center bg-gray w-50 h-50 rounded-10"
      }
    >
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.99988 5.99988L19.9999 5.99988"
          stroke="#1F368D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.99988 14.0001L10.9999 14.0001"
          stroke="#1F368D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

export default Header;
