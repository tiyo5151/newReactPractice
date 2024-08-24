const Products = () => {
  const products = [
    { title: 'Cabbage', price: 1.99, isFruit: false },
    { title: 'Garlic', price: 0.99, isFruit: false },
    { title: 'Carrot', price: 0.89, isFruit: false },
    { title: 'Apple', price: 0.59, isFruit: true },
  ];
  return (
    <div>
      {products.map((product) => (
        <ul key={product.title} style={{ color: product.isFruit ? 'magenta' : 'lime' }}>
          <li>
            {product.title} - ${product.price}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Products;
