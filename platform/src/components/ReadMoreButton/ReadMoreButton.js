import React, {useCallback} from "react";
import {Link, useHistory} from 'react-router-dom'
import PropTypes from "prop-types";
import "./ReadMoreButton.css";

export default function ReadMoreButton(props) {
    const {
        className, onClick, label, isDisabled
    } = props;
    return (
        <Link to='/home' onClick={() => window.location.reload()}>
        <button onClick>
            <span className={className} disabled={isDisabled}>
                <span style={{color: 'ghostwhite'}}>{label}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </span>
        </button>
        </Link>
    )
};

ReadMoreButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    isDisabled: PropTypes.bool
};

ReadMoreButton.defaultProps = {
    className: "cta",
    onClick: null,
    label: "Click Me",
    isDisabled: false
};
