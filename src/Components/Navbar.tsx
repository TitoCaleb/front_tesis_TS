import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <h1>SCRAPING WEB</h1>
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
