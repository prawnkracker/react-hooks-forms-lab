import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [updatedItems, setUpdatedItems] = useState(items)
  
  function handleItemSubmit(newItem){
    setUpdatedItems([...updatedItems, newItem])
  }
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    const searchText = event.target.value
    setSearch(searchText)
  }

  const itemsToDisplay = updatedItems.filter((item) => {
    if (selectedCategory === "All" && search === '') return true;

    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
