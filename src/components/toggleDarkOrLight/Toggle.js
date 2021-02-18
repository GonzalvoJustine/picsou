import React from 'react'
import { func, string } from 'prop-types';
import ToggleContainer from './styled';
import { ReactComponent as MoonIcon } from '../../icons/bear-side-view-silhouette.svg';
import { ReactComponent as SunIcon } from '../../icons/bear.svg';

/**
 * Create Toggle
 * @param toggleTheme
 * @returns {JSX.Element}
 * @constructor
 */
const Toggle = ({ toggleTheme }) => {
    return (
        <ToggleContainer onClick={toggleTheme} >
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
    );
};

// Types Props
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;