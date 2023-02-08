import './GetStarted.scss';

const data = [
  {
    icon: '/img/info/wallet-icon.png',
    alticon: 'Wallet Icon',
    title: 'Setup Your Wallet',
    details:
      'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner',
  },
  {
    icon: '/img/info/collection-icon.png',
    alticon: 'Collection Icon',
    title: 'Create Collection',
    details:
      'Upload your work and setup your collection. Add a description, social links and floor price.',
  },
  {
    icon: '/img/info/earn-icon.png',
    alticon: 'Earning Icon',
    title: 'Start Earning',
    details:
      'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
  },
];
function GetStarted() {
  return (
    <div className="container">
      <h2>How It Works</h2>
      <h3>Find Out How To Get Started</h3>
      <div className="info-card-list">
        {data.map((info, index) => (
          <div key={index} className="info-card">
            <img src={info.icon} alt={info.alticon} className="icon" />
            <h4>{info.title}</h4>
            <span>{info.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetStarted;
