import React from 'react';

function MyComponent() {
  const items = [
    { id: 1, name: 'Apple' ,color:"red"},
    { id: 2, name: 'Banana',color:"yellow" },
    { id: 3, name: 'Orange',color:"orange" }
  ];

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}....{item.color}</li>
      ))}
    </ul>
  );
}

export default MyComponent;
