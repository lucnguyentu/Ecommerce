import React, { Fragment } from 'react';
import './Caption.scss';

const Caption = () => {
    return (
        <Fragment>
            {/* <h1>FIND AMAZING PRODUCTS BELOW</h1> */}
            <div className="container">
                <svg className="icon-caption" viewBox="0 0 780 200">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="80%">
                            Best Headphone Below
                        </text>
                    </symbol>
                    <g className="g-ants">
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                    </g>
                </svg>
            </div>
        </Fragment>
    );
};

export default Caption;
