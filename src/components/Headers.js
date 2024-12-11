import React from 'react';
import PropTypes from 'prop-types';
import './Headers.css';

const Headers = ({ level, text, className }) => {
    const Tag = `h${level}`;

    return <Tag className={className}>{text}</Tag>;
};

Headers.propTypes = {
    level: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Headers.defaultProps = {
    className: '',
};

export default Headers;