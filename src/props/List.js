import React, { useState } from 'react';

function List(props) {
  const [filteredItems, setFilteredItems] = useState(props.users_list);
  const [sortBy, setSortBy] = useState('name');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
    let sortedItems = [...filteredItems];
    if (value === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === 'age') {
      sortedItems.sort((a, b) => a.age - b.age);
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div>
      <label>
        Сортировать по:
        <select value={sortBy} onChange={handleSortChange}>
          <option value="name">Имя</option>
          <option value="age">Возраст</option>
        </select>
      </label>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item.name}, {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List