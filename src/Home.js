import feature from './feature.jpeg';
import './Home.css';
import mens from './mens.jpg';
import women from './women.jpg';

function Home() {
    return (
      <div className="Home">
        <img className="homeBg" src={feature} alt="Home image" />
        <img className="mens" src={mens} alt="mens" />
        <img className="women" src={women} alt="women" />
      </div>
    );
  }
  
  export default Home;