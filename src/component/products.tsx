const Products = () => {
  const products = [
    { title: 'Cabbage', price: 1.99, isFruite: false },
    { title: 'Garlic', price: 0.99, isFruite: false },
    { title: 'Carrot', price: 0.89, isFruite: false },
    { title: 'Apple', price: 0.59, isFruite: true },
  ];
  return (
    <div>
      {products.map((product) => (
        <ul key={product.title} style={{ color: product.isFruite ? 'magenta' : 'lime' }}>
          <li>
            {product.title} - ${product.price}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Products;
