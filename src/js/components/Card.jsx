import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
            <div className="card col-12 col-md-6 col-lg-3 p-0 m-2" style={{width: "18rem"}}>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                <a href={props.buttonUrl} target="_blank" className="btn btn-primary">{props.buttonLabel}</a>
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
