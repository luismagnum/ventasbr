import React, { useState } from 'react';
import logo from '../assets/logo.png';
import card from '../assets/mate.png'
import car from '../assets/car.png';
import imag1 from '../assets/imag1.jpeg'
import imag2 from '../assets/imag2.jpeg'
import imag3 from '../assets/imag3.jpeg'
import imag4 from '../assets/imag4.jpeg'
import imag6 from '../assets/imag6.jpeg'
import imag7 from '../assets/imag7.jpeg'
import imag8 from '../assets/imag8.jpeg'
import imag9 from '../assets/imag9.jpeg'
import imag10 from '../assets/imag10.jpeg'
import imag11 from '../assets/imag11.jpeg'
import imag12 from '../assets/imag12.jpeg'
import imag13 from '../assets/imag13.jpeg'
import imag14 from '../assets/imag14.png'
import imag15 from '../assets/imag15.jpeg'
import imag16 from '../assets/imag16.jpeg'


import { RiStarSFill } from "react-icons/ri";

const Productos = () => {
  const [cart, setCart] = useState([]);
  const [showError, setShowError] = useState(false); 

  const productos = [
    { id: 1, name: 'Vino', price: 14000, image: imag1},
    { id: 2, name: 'Gorra', price: 7000, image: imag2 },
    { id: 3, name: 'Vino', price: 10000, image: imag3},
    { id: 4, name: 'Vino', price: 45000, image: imag4 },
    { id: 6, name: 'Vino', price: 13000, image:imag6},
    { id: 7, name: 'Mate', price: 10000, image: imag7},
    { id: 8, name: 'Gorra', price: 10000, image: imag8},
    { id: 9, name: 'Mate', price: 10000, image: imag9},
    { id: 10, name: 'Vino', price: 10000, image: imag10},
    { id: 11, name: 'Chocolates', price: 10000, image: imag11},
    { id: 12, name: 'Chocolates', price: 10000, image: imag12},
    { id: 13, name: 'Chocolates', price: 10000, image: imag13},
    { id: 14, name: 'Mate', price: 10000, image: imag14},
    { id: 15, name: 'Chocolates', price: 10000, image: imag15},
    { id: 16, name: 'Chocolates', price: 10000, image: imag16},
  ];

  
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si es un nuevo producto, agrégalo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Función para actualizar la cantidad de productos
  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Función para eliminar un producto del carrito si la cantidad es 0
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Enviar el pedido por WhatsApp
  const sendOrder = () => {
    if (cart.length === 0) {
      // Si el carrito está vacío, mostrar mensaje de error
      setShowError(true);
      setTimeout(() => setShowError(false), 2000); // Ocultar el mensaje después de 2 segundos
      return;
    }

    const orderText = cart
      .map(
        (product) => `${product.quantity}x ${product.name} - $${product.price * product.quantity}`
      )
      .join('\n');
    const total = calculateTotal();
    const whatsappMessage = `Pedido:\n${orderText}\nTotal: $${total}`;

    const url = `https://wa.me/543412143000?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="p-4 mx-4">
      <div className="flex flex-col md:flex-row justify-center items-center text-center mx-auto mt-4 mb-4">
        <span>
          <img src={logo} alt='logo' width={30}/>
        </span>
        <h1 className="text-black text-xl md:text-3xl font-bold mb-4 text-center m-4">KC Store</h1>
      </div>
      <h2 className="text-gray-950 text-2xl font-bold mb-6 text-center mt-1">TIENDA</h2>
      <h2 className="text-gray-700 text-2xl font-bold mb-6 text-center mt-1">Selecciona tu articulo</h2>
      <h3 className="text-gray-800 text-xl font-semibold mb-6 text-center mt-1">*Cantidades sujetas a stock, los precios pueden variar*</h3>
      <div className="grid grid-cols-2 p-2 md:grid-cols-3 gap-4 mb-6">
        {productos.map((producto) => (
          <div key={producto.id} className="border border-gray-900 rounded-lg text-center p-4 flex flex-col items-center">
            <img src={producto.image} alt={producto.name} className="w-28 h-28 mb-2 object-contain" />
            <h2 className="text-gray-700 text-xl font-bold mt-2">{producto.name}</h2>
            <div className='flex flex-row justify-center'>
            <RiStarSFill className='text-yellow-500' />
            <RiStarSFill className='text-yellow-500' />
            <RiStarSFill className='text-yellow-500' />
            <RiStarSFill className='text-yellow-500' />
            <RiStarSFill className='text-yellow-500' />
            </div>
            <p className="text-gray-800 font-semibold">${producto.price}</p>
            <button
             className="flex text-xs border border-gray-700 md:text-base mt-2 px-4 py-2  text-black font-bold rounded-lg hover:bg-black hover:text-white whitespace-nowrap "
              onClick={() => addToCart(producto)}
            >
              Agregar al
              <img src={car} alt='car' className='w-4 h-4 ml-1'/>
            </button>
          </div>
        ))}
      </div>


      <div className="border-t-2 pt-4">
      <div className='flex flex-row ml-6'>
          <span>
            <img src={car} alt='car' width={20} className='mt-1 ml-6 md:ml-28'/>
          </span>
        <h2 className="text-gray-700 text-xl font-bold ml-2 mb-2">Carrito de Compras</h2>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-900 font-semibold ml-16 md:ml-36">El carrito está vacío</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:ml-36 md:text-left">
                  {item.name} - ${item.price} x {item.quantity}
                </div>
                <div className="flex items-center mt-2 md:mr-36 md:mt-0">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() =>
                      item.quantity > 1
                        ? updateQuantity(item.id, item.quantity - 1)
                        : removeFromCart(item.id)
                    }
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <p className="text-lg font-bold text-center ">Total: ${calculateTotal()}</p>

          <div className="flex justify-center mb-10">
            <button
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-full md:w-auto"
              onClick={sendOrder}
            >
              Enviar Pedido por WhatsApp
            </button>
          </div>

          {/* Mostrar mensaje de error si el carrito está vacío */}
          {showError && (
            <div className="text-red-500 text-center font-bold mt-4">
              No puedes enviar un pedido con el carrito vacío.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productos;
