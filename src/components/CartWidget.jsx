import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" style={styles.link}>
      🛒
      {cartQuantity > 0 && <span style={styles.badge}>{cartQuantity}</span>}
    </Link>
  );
}

const styles = {
  link: {
    position: 'relative',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#d0060a',
  },
  badge: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#d0060a',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.75rem',
  }
};

export default CartWidget;
