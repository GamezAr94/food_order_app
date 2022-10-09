import React, {useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);

  const modalHandlerEvent = () => {
    window.event.preventDefault();
    const newVal = cartIsShown ? false : true;
    setCartIsShow(newVal);
  }
  return (
    <>
      {cartIsShown && <Cart onShowCart={modalHandlerEvent} />}
      <Header onShowCart={modalHandlerEvent} />
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
