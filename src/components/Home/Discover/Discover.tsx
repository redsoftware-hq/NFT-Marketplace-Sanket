import Button from '../../common/Button/Button';
import SeeIcon from '../../../assests/icons/Eye.svg'
import './Discover.scss';

const nftData = [
  {
    titile: 'Distant Galaxy',
    data: '/img/discover/nft1.png',
    artist: 'Moondancer',
    artistAvatar: '/img/discover/a1.png',
    price: '1.63',
    highestBid: '0.33',
  },
  {
    titile: 'Life on Edena',
    data: '/img/discover/nft2.png',
    artist: 'NebulaKid',
    artistAvatar: '/img/discover/a2.png',
    price: '1.63',
    highestBid: '0.33',
  },
  {
    titile: 'Astro Fiction',
    data: '/img/discover/nft3.png',
    artist: 'Spaceone',
    artistAvatar: '/img/discover/a3.png',
    price: '1.63',
    highestBid: '0.33',
  },
];
function Discover() {
  return (
    <div className="discover">
      <h2>Discover More NFTs</h2>
      <div className="btn-container">
        <h3>Explore New Trending NFTs</h3>
        <Button btnName='See All' btnType='secondary-outlined' icon={SeeIcon}/>
      </div>
      <div className="nftCardList">
        {nftData.map((nft, index) => (
          <div key={index} className="nftCard">
            <img src={nft.data} />
            <h4>{nft.titile}</h4>
            <div className="artist-info">
              <img src={nft.artistAvatar} />
              <h5>{nft.artist}</h5>
            </div>
            <div className="price-info">
              <span>Price</span>
              <span>Hightest Bid</span>
              <div>{nft.price} ETH</div>
              <div>{nft.highestBid} wETH</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
