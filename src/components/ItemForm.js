import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [category, setCategory] = useState('Produce')
  const [name, setName] = useState('')
  const [submittedData, setSubmittedData] = useState([])
  
  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  function handleFormSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: name,
      category: category
    };
    const dataArray = [...submittedData, newItem]
    setSubmittedData(dataArray)
    setName('')
    setCategory('Produce')
    props.onItemFormSubmit(newItem)
  }

  
  
  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value={name}
        onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>

    
  );
}

export default ItemForm;
