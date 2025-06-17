import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../products';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts().then((products) => {
      const found = products.find((p) => p.id === itemId);
      setProduct(found);
    });
  }, [itemId]);

  return (
    <div>
      {product ? (
        <ItemDetail
          title={product.title}
          image={product.image}
          price={product.price}
          category={product.category}
        />
      ) : (
        <p style={{ textAlign: 'center' }}>Cargando producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

