import React from 'react'
import { func, string } from 'prop-types';
import ToggleContainer from './styled';
import { ReactComponent as MoonIcon } from '../../icons/bear-side-view-silhouette.svg';
import { ReactComponent as SunIcon } from '../../icons/bear.svg';

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer onClick={toggleTheme} >
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;