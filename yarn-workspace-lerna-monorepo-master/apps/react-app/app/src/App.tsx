import React from 'react';
import { ThemeProvider } from '@shared/theme';
import { Routes } from '@react-app/routes';

export const App = () => (
    <ThemeProvider>
        Teste App2
        <Routes />
    </ThemeProvider>
);
