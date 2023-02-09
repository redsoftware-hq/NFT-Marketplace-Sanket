import "./Hero.scss";
import SignUpForm from "../SignUpForm/SignUpForm";
const accountBanner = "/img/account.png";
function Hero() {
  return (
    <div className="sign-up-main">
      <img className="account-banner" src={accountBanner} />
      <div className="sign-up-container">
        <h1>Create account</h1>
        <h2>
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </h2>
        <SignUpForm />
      </div>
    </div>
  );
}
export default Hero;
