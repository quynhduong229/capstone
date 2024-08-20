import React from 'react';
import './BookingForm.css';

const menuItems = [
  { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.' },
  { name: 'Margherita Pizza', description: 'Tomato, mozzarella, and fresh basil.' },
  { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.' },
  { name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection with a lemon-dill sauce.' },
  { name: 'Tiramisu', description: 'Layered coffee-flavored Italian dessert with mascarpone cheese.' },
  // Add more items here
];

const Menu = () => {
  return (
    <div className="booking-form">
      <h1>Menu</h1>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
