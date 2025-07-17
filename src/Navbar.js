import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="site-title"> </h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create" className="create-link">Create New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
