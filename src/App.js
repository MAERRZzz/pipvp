
// import React, { useState } from 'react';

// import User from './props/User';
// import List from './props/List';
// import Person from './props/Person';

// const Product = ({ id, name, price, description }) => {
//   return (
//     <div className="product">
//       <h2>{name} - {price} руб.</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// const Counter = ({ count, onIncrement }) => {
//   return (
//     <div>
//       <h1>Счетчик: {count}</h1>
//       <button onClick={onIncrement}>+1</button>
//     </div>
//   );
// };

// function App() {
//   // 4)
//   const productsData = [
//     { id: 1, name: 'Ааааа', price: 100, description: 'ааа' },
//     { id: 3, name: 'Ввввв', price: 750, description: 'ввв' },
//     { id: 2, name: 'Ббббб', price: 2000, description: 'ббб' },
//   ];

//   const [products, setProducts] = useState(productsData);
//   const [sortBy, setSortBy] = useState('priceUp');

//   const handleSortChange = (event) => {
//     let option = event.target.value;
//     setSortBy(option)
//     if (option === 'priceUp') {
//       const sortedProducts = [...products].sort((a, b) => a['price'] - b['price']);
//       setProducts(sortedProducts);
//     } else {
//       const sortedProducts = [...products].sort((b, a) => a['price'] - b['price']);
//       setProducts(sortedProducts);
//     }
//   }
//   // 5)
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>

//       <div>
//         <h1>Информация о пользователе:</h1>
//         <User name="Иван" age={30} />
//       </div>

//       <div>
//         <h1>Список пользователей:</h1>
//         <List users_list={
//           [
//             { name: 'Армен', age: 30 },
//             { name: 'Бармен', age: 25 },
//             { name: 'Виталий', age: 35 },
//             { name: 'Геннадий', age: 28 }
//           ]
//         } />
//       </div>

//       <div>
//         <Person name="Иван" age={20} email="ivan@ivan.com" />
//       </div>

//       <div>
//         <label>
//           Сортировать по:
//           <select value={sortBy} onChange={handleSortChange}>
//             <option value="priceUp">Цена (возрастание)</option>
//             <option value="priceDown">Цена (убывание)</option>
//           </select>
//         </label>
//         {products.map(product => (
//           <Product
//             key={product.id}
//             id={product.id}
//             name={product.name}
//             price={product.price}
//             description={product.description}
//           />
//         ))}
//       </div>

//       <div>
//         <Counter count={count} onIncrement={handleIncrement} />
//       </div>

//     </div>
//   );
// }

// export default App;

import Profile from "./propsTest/Profile";
import Congratulations from "./propsTest/Profile";
import TodoList from "./propsTest/Profile";
import PackingList from "./propsTest/Profile";
import LightSwitch from "./propsTest/Profile";
import Signup from "./propsTest/Profile";
import Toolbar from "./propsTest/Profile";
import Form from "./propsTest/Profile";

function App() {

  return (
    <div>
      {/* <Profile /> */}
      {/* <Congratulations/> */}
      {/* <TodoList/> */}
      {/* <PackingList/> */}
      {/* <LightSwitch /> */}
      {/* <Signup/> */}
      {/* <Toolbar/> */}
      {/* <Form/> */}
    </div>

  )
}

export default App;