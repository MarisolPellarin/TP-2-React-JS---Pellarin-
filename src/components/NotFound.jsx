import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Página no encontrada</h1>
      <p style={styles.text}>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={styles.link}>Volver al inicio</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '4rem',
    fontFamily: 'Georgia, serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#d0060a',
  },
  text: {
    fontSize: '1.2rem',
    marginTop: '1rem',
    marginBottom: '2rem',
  },
  link: {
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#d0060a',
    padding: '0.7rem 1.2rem',
    borderRadius: '8px',
    textDecoration: 'none',
  }
};

export default NotFound;
