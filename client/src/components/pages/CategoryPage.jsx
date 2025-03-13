
import { useState } from "react";
import CategoryComponent from "../ui/CategoryComponent";
function CategoryPage() {
    const [categories, setCategories] = useState([]);

  return (
    <div>
        {categories.map((category) => (
            <CategoryComponent key={category.id} card={category}/>
        ))}
    </div>
  )
}

export default CategoryPage;

