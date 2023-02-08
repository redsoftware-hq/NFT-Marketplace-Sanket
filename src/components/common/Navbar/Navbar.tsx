import './Navbar.scss';
import Storefront from '../../../assests/icons/Storefront.svg';
import { Link } from 'react-router-dom';
import UserIcon from '../../../assests/icons/User.svg';
import Button from '../Button/Button';
function Navbar() {
  return (
    <nav className="navbar">
      <img src={Storefront} />
      <h2>NFT Marketplace</h2>
      <Link to="/">Home</Link>
      <Link to="marketplace">Marketplace</Link>
      <Link to="rankings">Rankings</Link>
      <Link to="connect-wallet">Connect a wallet</Link>
      <Button btnName='Sign Up' btnType='secondary-filled' icon={UserIcon}/>
    </nav>
  );
}

export default Navbar;
