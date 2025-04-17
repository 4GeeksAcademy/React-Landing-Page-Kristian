import React from "react";

const Jumbotron = () => {
    return (
        <div className="container">
            <div className="p-5 text-start bg-body-tertiary rounded-3">
                <h1>A Warm Welcome!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non libero rhoncus, placerat risus et, cursus quam. Fusce cursus posuere malesuada. Ut vestibulum risus metus, ut elementum ex mollis ac. Nullam porttitor mattis arcu, sed vestibulum est iaculis a. Proin sit amet eleifend nunc.
                </p>
                <button className="btn btn-primary">Call to Action!</button>
            </div>
        </div>
    );
};

export default Jumbotron;