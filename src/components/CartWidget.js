import React from 'react';
import cartIcon from '../assets/carritoComprasIcon.png';

const CartWidget = () => {
    return (
        <div>
            <img src={cartIcon} alt="Carrito" style={{ width: '25%', height: '25%' }}/>
            <span>0</span> {/* Aquí puedes manejar la cantidad de artículos */}
        </div>
    );
};

export default CartWidget;