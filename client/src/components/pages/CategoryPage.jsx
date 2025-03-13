
import { useEffect, useState } from "react";
import CategoryComponent from "../ui/CategoryComponent";
import axiosInstance from "../../API/axiosInstance";
import { useParams } from "react-router";



function CategoryPage() {
    const [categories, setCategories] = useState([]);

    const {id} = useParams()

    useEffect(() => {
      axiosInstance
        .get('/category')
        .then(({data}) => setCategories(data))
        .catch((err) => console.log(err))
    }, [])
  return (
    <div>
        {categories.map((category) => (
            <CategoryComponent id={id} key={category.id} card={category}/>
        ))}
    </div>
  )
}

export default CategoryPage;

