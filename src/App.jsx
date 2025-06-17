import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import NotFound from './components/NotFound';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a nuestra tienda de invitaciones digitales!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría..." />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
