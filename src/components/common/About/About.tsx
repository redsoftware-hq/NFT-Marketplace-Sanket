import { Link } from "react-router-dom";
import "./About.scss";
import Storefront from "../../../assests/icons/Storefront.svg";
import DiscordLogo from "../../../assests/icons/DiscordLogo.svg";
import InstagramLogo from "../../../assests/icons/InstagramLogo.svg";
import TwitterLogo from "../../../assests/icons/TwitterLogo.svg";
import YoutubeLogo from "../../../assests/icons/YoutubeLogo.svg";
import Subscribe from "../Subscribe/Subscribe";

function About() {
  return (
    <footer>
      <div className="about">
        <div className="wrapper">
          <div className="marketplace">
            <img src={Storefront} />
            <h3>NFT Marketplace</h3>
          </div>
          <span>NFT marketplace UI created with Anima for Figma.</span>
          <span>Join our community</span>
          <div>
            <img className="socials" src={DiscordLogo} />
            <img className="socials" src={YoutubeLogo} />
            <img className="socials" src={InstagramLogo} />
            <img className="socials" src={TwitterLogo} />
          </div>
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
          <Subscribe />
        </div>
      </div>
    </footer>
  );
}

export default About;
