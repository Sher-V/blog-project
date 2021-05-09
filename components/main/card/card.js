import PropTypes from "prop-types";
import { UiLink } from "../../ui-link";

const Card = ({ imgSrc, title, description }) => (
  <div className={"mt-40 w-327 lg:w-230 lg:mt-60"}>
    <img className={"max-w-327 h-282 lg:w-230 lg:h-198"} src={imgSrc} />
    <div className={"uppercase text-pink mt-20"}>{title}</div>
    <UiLink className={"text-blue mt-10 font-medium"} href={"/posts/1"}>
      {description}
    </UiLink>
  </div>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
