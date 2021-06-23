import React from 'react';

import { Header } from './header/Header';
import { Main } from './main/Main';

export const App = () => (
    <div id="wrapper">
        <Header />
        <Main />
        <footer>
            <p>© {new Date().getFullYear()}</p>
        </footer>
    </div>
);
