import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './components/Navbar.css'; // Importa el CSS

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer welcomeMessage="¡Bienvenido a nuestra tienda!" />
        </div>
    );
};

export default App;