import PropTypes from "prop-types";

const Card = ({ imgSrc, title, description }) => (
  <div className={"mt-40 w-327 lg:w-230 lg:mt-60"}>
    <img className={"w-327 h-282 lg:w-230 lg:h-198"} src={imgSrc} />
    <div className={"uppercase text-pink mt-20"}>{title}</div>
    <div className={"text-blue mt-10"}>{description}</div>
  </div>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
