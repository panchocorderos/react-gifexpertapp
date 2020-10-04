//  rafc snippet para componente
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp = () => {
  

  const [categories, setCategories] = useState(['Naruto Shippuden']);


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr></hr>
      
      <ol>
        {
          categories.map( category =>(
            <GiftGrid 
              key={ category }
              category={ category } 
            />
          ))
        }
      </ol>
    </>
  );
  
};

export default GifExpertApp;

