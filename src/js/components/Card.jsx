import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
            <div className="card col-lg-2 col-sm-12 m-2 p-0">
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                    <a href={props.buttonUrl} className="btn btn-primary d-flex justify-content-center mt-auto">{props.buttonLabel}</a>
                </div>
            </div>
    );
};

Card.propTypes = {
title: PropTypes.string,
body: PropTypes.string,
imageUrl: PropTypes.string,
buttonUrl: PropTypes.string,
buttonLabel: PropTypes.string
};

export default Card;
