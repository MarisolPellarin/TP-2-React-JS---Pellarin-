import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../products';



function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams(); 

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        const filtered = data.filter((item) => item.category === categoryId);
        setItems(filtered);
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <section style={styles.container}>
      <h1>{greeting}</h1>
      <div style={styles.grid}>
        {items.map((product) => (
  <Link
    key={product.id}
    to={`/item/${product.id}`}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  </Link>
))}

      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '1rem',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    borderRadius: '6px',
  }
};

export default ItemListContainer;
