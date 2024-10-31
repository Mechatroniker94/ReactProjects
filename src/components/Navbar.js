import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Mi Tienda</h1>
            </div>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;