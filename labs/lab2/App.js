import React, { useState } from 'react';

import User from './props/User';
import List from './props/List';
import Person from './props/Person';
import Product from './props/Product';
import Counter from './props/Counter';

function App() {
  // 4)
  const productsData = [
    { id: 1, name: 'Ааааа', price: 100, description: 'ааа' },
    { id: 2, name: 'Ббббб', price: 2000, description: 'ббб' },
    { id: 3, name: 'Ввввв', price: 750, description: 'ввв' },
  ];

  const [products, setProducts] = useState(productsData);

  const handleSort = (criteria) => {
    if (criteria === 'price') {
      const sortedProducts = [...products].sort((b, a) => a[criteria] - b[criteria]);
      setProducts(sortedProducts);
    } else {
      const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
      setProducts(sortedProducts);
    }
  }
  // 5)
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>

      <div>
        <h1>Информация о пользователе:</h1>
        <User name="Иван" age={30} />
      </div>

      <div>
        <h1>Список пользователей:</h1>
        <List users_list={
          [
            { name: 'Армен', age: 30 },
            { name: 'Бармен', age: 25 },
            { name: 'Виталий', age: 35 },
            { name: 'Геннадий', age: 28 }
          ]
        } />
      </div>

      <div>
        <Person name="Иван" age={20} email="ivan@ivan.com" />
      </div>

      <div>
        <button onClick={() => handleSort('name')}>По названию</button>
        <button onClick={() => handleSort('price')}>По цене</button>
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>

      <div>
        <Counter count={count} onIncrement={handleIncrement} />
      </div>

    </div>
  );
}

export default App;
