import React, { createContext, useState } from 'react'
import Product from './assets/data.json'
import Home from './assets/home';



export const contextcreate=createContext(null);

function App() {



const [products,setProduct]=useState(Product.products);


  return (
    <>
      <contextcreate.Provider value={products}>
        <Home />
      </contextcreate.Provider>
    </>
  )
}

export default App