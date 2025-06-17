import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.counter}>
      <div>
        <button onClick={handleSubtract} style={styles.button}>-</button>
        <span style={styles.count}>{count}</span>
        <button onClick={handleAdd} style={styles.button}>+</button>
      </div>
      <button onClick={() => onAdd(count)} style={styles.addButton}>
        Agregar al carrito
      </button>
    </div>
  );
}

const styles = {
  counter: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  button: {
    padding: '0.3rem 1rem',
    margin: '0 0.5rem',
    fontSize: '1.2rem',
  },
  count: {
    fontSize: '1.2rem',
    margin: '0 1rem',
  },
  addButton: {
    marginTop: '1rem',
    padding: '0.5rem 1.2rem',
    backgroundColor: '#d0060a',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default ItemCount;
