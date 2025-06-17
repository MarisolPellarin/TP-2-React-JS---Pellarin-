import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Digital Creations</div>
      <ul style={styles.links}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/boda">Boda</Link></li>
        <li><Link to="/category/15años">15 Años</Link></li>
        <li><Link to="/category/bautismos">Bautismos</Link></li>
        <li><Link to="/category/eventos">Eventos</Link></li>
        </ul>
      <CartWidget />
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f6f1d2',
    padding: '1rem 2rem',
    borderBottom: '1px solid #ccc',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#d0060a',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  }
};

export default NavBar;
