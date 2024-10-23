import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white mr-4">Dashboard</Link>
        <Link to="/projects" className="text-white mr-4">Projects</Link>
        <Link to="/tasks" className="text-white mr-4">Tasks</Link>
        <Link to="/profile" className="text-white">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;

