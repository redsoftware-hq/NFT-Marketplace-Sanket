import Button from '../../common/Button/Button';
import RocketLaunch from "../../../assests/icons/RocketLaunch.svg"
import './Hero.scss';

const totalSales = '240k';
const totalArtists = '240k';
const totalAuctions = '100k';

const nft = {
  name: 'Space Walking',
  artist: 'Animakid',
  data: '/img/hero/nft.png',
};
const HighlightedNFT = () => {
  return (
    <div className="nft-card">
      <img src={nft.data} />
      <h2>{nft.name}</h2>
      <h3>{nft.artist}</h3>
    </div>
  );
};

function Hero() {
  return (
    <div className="hero">
      <div className="hero-intro">
        <h1>Discover digital art & Collect NFTs</h1>
        <p>
          NFT marketplace UI created with Anima for Figma. Collect, buy and
          sell art from more than 20k NFT artists.
        </p>
        <Button btnName='Get Started' btnType='secondary-filled' icon={RocketLaunch}/>
        <div className="site-info">
          <span>{totalSales}+</span>
          <span>{totalAuctions}+</span>
          <span>{totalArtists}+</span>
          <div>Total Sales</div>
          <div>Auctions</div>
          <div>Artists</div>
        </div>
      </div>
      <HighlightedNFT />
    </div>
  );
}

export default Hero;
