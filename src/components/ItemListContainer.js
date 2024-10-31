import React from 'react';

const ItemListContainer = ({ welcomeMessage }) => {
    return (
        <div>
            <h2>{welcomeMessage}</h2>
            {/* Aquí podrías mapear a través de tus productos y mostrarlos */}
        </div>
    );
};

export default ItemListContainer;