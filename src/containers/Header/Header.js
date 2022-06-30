import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const HeaderContainer = () => {
    const navigate = useNavigate();
    const onNavigateToGenerator = () => {
        navigate('/generator');
    }

    return (
        <Header
            onNavigateToGenerator={onNavigateToGenerator}
        />
    )
};

export default HeaderContainer;
