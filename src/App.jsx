import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to SEI SPORTS</h1>
      <p>This is your home page. Site is now live and loading correctly!</p>
      <nav>
        <ul>
          <li><Link to="/leagues">Leagues</Link></li>
          <li><Link to="/tournaments">Tournaments</Link></li>
          <li><Link to="/fixtures">Fixtures</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}


