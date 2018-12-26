import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Slide.less";

function Slide(props) {
    return (
        <div className={classnames("slide", props.className)}>
            <div className="slide__img-container">
                <img
                    className="slide__img"
                    src={props.slide.imgSrc}
                    alt={props.slide.heading}
                />
            </div>
            <div className="slide__info">
                <h2 className="slide__title">{props.slide.heading}</h2>
                <div className="slide__description">
                    {props.slide.description}
                </div>
                <button className="slide__btn" name="shop-now">
                    shop now
                </button>
            </div>
        </div>
    );
}

Slide.propTypes = {
    className: PropTypes.string,
    slide: PropTypes.shape({
        description: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired
    }).isRequired
};

Slide.defaultProps = {
    className: null
};

export default Slide;