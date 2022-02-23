import React from "react";
import PropTypes from 'prop-types';
import './Avatar.scss'

function Avatar(props) {
    return (
        <div className = {`Avatar ${props.size || 'md'}`} >
            <img src = {props.image || 'https://cdn4.iconfinder.com/data/icons/space-61/64/C_Astronaut-512.png'} alt = '' className = "Avatar__image" /> 
            {props.size}
        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string,
    size: PropTypes.oneOf(['sm','md','lg'])

}
export default Avatar;