import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/select">Select Breed</Link>
        </li>
        <li>
          <Link to="/topten">Top 10</Link>
        </li>
      </ul>
    </nav>
  );
}


export default Menu;
