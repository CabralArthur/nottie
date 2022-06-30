import React from 'react'
import Header from '../../components/Header/Header';

const HeaderContainer = () => {
    const onNavigateToGenerator = () => {
        console.log(1);
    }

    return (
        <Header
            onNavigateToGenerator={onNavigateToGenerator}
        />
    )
};

export default HeaderContainer;
