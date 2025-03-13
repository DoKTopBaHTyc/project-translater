import { Link } from "react-router";

function CategoryComponent({ card }) {
  return (
    <div className="card">
      <h2 className="card-body">
        <Link to="/words">{card.name}</Link> 
        </h2>
    </div>
  );
}

export default CategoryComponent;
