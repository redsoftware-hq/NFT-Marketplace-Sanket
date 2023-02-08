import { Link } from 'react-router-dom';
import './About.scss';
import Storefront from '../../../assests/icons/Storefront.svg';
function About() {
  return (
    <footer>
      <div className="about">
        <div className="wrapper">
          <span className="marketplace">
            <img src={Storefront} />
            <h3>NFT Marketplace</h3>
          </span>
          <span>NFT marketplace UI created with Anima for Figma.</span>
          <span>Join our community</span>
        </div>
        <div className="wrapper">
          <h3>Explore</h3>
          <Link to="marketplace">Marketplace</Link>
          <Link to="rankings">Rankings</Link>
          <Link to="connect-wallet">Connect a wallet</Link>
        </div>
        <div className="wrapper">
          <h3>Join Our weekly Digest</h3>
          <span>
            Get exclusive promotions & updates straight to your inbox.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default About;
