import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritos } from "../../redux/favorito/favoritosSlice";
import { useLocation } from 'react-router-dom';

// Estilo
import { LayoutWrapper } from './LayoutStyled';

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const usuarioActual = useSelector((state) => state.usuario.usuarioActual);

    useEffect(() => {
        if (usuarioActual) {
            dispatch(fetchFavoritos());
        }
    }, [dispatch, usuarioActual]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    )
};

export default Layout;
