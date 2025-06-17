import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({ id, title, image, price, category }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    const productToAdd = {
      id,
      title,
      price,
      image,
      category,
    };
    addToCart(productToAdd, quantity);
  };

  return (
    <div style={styles.container}>
      <img src={image} alt={title} style={styles.image} />
      <div>
        <h2>{title}</h2>
        <p>Categoría: {category}</p>
        <p>Precio: ${price}</p>
        <ItemCount initial={1} stock={10} onAdd={handleAdd} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#fff',
    fontFamily: 'Georgia, serif',
  },
  image: {
    width: '250px',
    borderRadius: '10px',
  }
};

export default ItemDetail;

