import React from 'react';

import { Search } from '@components/header/Search';
import { Logo } from '@styles/styledComponents/logoStyled';

export const Header = () => (
    <header>
        <Logo src="logo.jpg" alt="Логотип магазина" />
        <Search />
    </header>
);
