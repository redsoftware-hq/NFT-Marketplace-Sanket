import "./Hero.scss";
import WalletConnect from "../../assests/icons/WalletConnect.svg";
import Coinbase from "../../assests/icons/Coinbase.svg";
import Metamask from "../../assests/icons/Metamask.svg";
interface ConnectWallet {
  btnName: string;
  icon: string;
}
const walletBanner = "/img/connect-wallet.png";
function ConnectWallet({ btnName, icon }: ConnectWallet) {
  return (
    <button className="connect-wallet-btn">
      <img className="wallet-icon" src={icon} />
      {btnName}
    </button>
  );
}

function Hero() {
  return (
    <div className="wallet-hero-main">
      <img className="wallet-banner" src={walletBanner} />
      <div className="wallet-hero-container">
        <h1>Connect Wallet</h1>
        <h2>
          Choose a wallet you want to connect. There are several wallet
          providers.
        </h2>
        <ConnectWallet btnName="Metamask" icon={Metamask} />
        <ConnectWallet btnName="Wallet connect" icon={WalletConnect} />
        <ConnectWallet btnName="Coinbase" icon={Coinbase} />
      </div>
    </div>
  );
}

export default Hero;
