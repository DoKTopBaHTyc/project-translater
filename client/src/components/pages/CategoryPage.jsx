
import { useState } from "react";
import CategoryComponent from "../ui/CategoryComponent";

const categoryArray = [
  { id: 1, name: 'животные' },
  { id: 2, name: 'еда' },
  { id: 3, name: 'машины' },
  { id: 4, name: 'книги' },
  { id: 5, name: 'фильмы' },
  { id: 6, name: 'музыка' },
  { id: 7, name: 'спорт' },
  { id: 8, name: 'путешествия' },
  { id: 9, name: 'технологии' },
  { id: 10, name: 'искусство' },
  { id: 11, name: 'история' },
  { id: 12, name: 'наука' },
  { id: 13, name: 'мода' },
  { id: 14, name: 'фотография' },
  { id: 15, name: 'игры' }
]


function CategoryPage() {
    const [categories, setCategories] = useState(categoryArray);

  return (
    <div>
        {categories.map((category) => (
            <CategoryComponent key={category.id} card={category}/>
        ))}
    </div>
  )
}

export default CategoryPage;

