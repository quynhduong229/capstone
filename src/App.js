import React from 'react';
import BookingForm from './component/BookingForm';
import Menu from './component/Menu';
import './App.css';  // Ensure you have this file if you are using additional styling

const App = () => {
  return (
    <div className="App">
      <h1>Little Lemon</h1>
      <main>
      <Menu/>
      <BookingForm />
      </main>
    </div>
  );
};

export default App;
