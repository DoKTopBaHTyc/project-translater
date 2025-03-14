import { Link } from "react-router";

function CategoryComponent({ id, card }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
    }}>
      <h2 className="card-body">
      <Link to={`/language/${id}/categories/${card.id}/words`}>{card.name}</Link> 
        </h2>
    </div>
  );
}

export default CategoryComponent;
