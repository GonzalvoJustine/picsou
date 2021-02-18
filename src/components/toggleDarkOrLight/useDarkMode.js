import { useEffect, useState } from 'react';

/**
 * Choose between light or dark theme
 * Button Toggle Style
 * @returns {[string, toggleTheme, boolean]}
 */
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const toggleTheme = () => {
        if (theme === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        } else {
            setMode('light');
        }
        setComponentMounted(true);
    }, []);

    return [theme, toggleTheme, componentMounted]
};