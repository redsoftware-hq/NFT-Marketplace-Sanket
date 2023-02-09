import Button from "../../common/Button/Button";
import RocketLaunch from "../../../assests/icons/RocketLaunch.svg";
import "./TopCreators.scss";
const creators = [
  {
    name: "Keepitreal",
    rank: "1",
    avatar: "/img/creators/c1.png",
    totalSales: "34.53",
  },
  {
    name: "DigiLab",
    rank: "2",
    avatar: "/img/creators/c2.png",
    totalSales: "34.53",
  },
  {
    name: "GravityOne",
    rank: "3",
    avatar: "/img/creators/c3.png",
    totalSales: "34.53",
  },
  {
    name: "Juanie",
    rank: "4",
    avatar: "/img/creators/c4.png",
    totalSales: "34.53",
  },
  {
    name: "Juanie",
    rank: "4",
    avatar: "/img/creators/c4.png",
    totalSales: "34.53",
  },
  {
    name: "Juanie",
    rank: "4",
    avatar: "/img/creators/c4.png",
    totalSales: "34.53",
  },
  {
    name: "Juanie",
    rank: "4",
    avatar: "/img/creators/c4.png",
    totalSales: "34.53",
  },
  {
    name: "Juanie",
    rank: "4",
    avatar: "/img/creators/c4.png",
    totalSales: "34.53",
  },
];
function TopCreators() {
  return (
    <div className="top-creators">
      <h2>Top Creators</h2>
      <div className="btn-container">
        <h3>Checkout Top Rated Creators on the NFT Marketplace</h3>
        <Button
          btnName="View Rankings"
          btnType="secondary-outlined"
          icon={RocketLaunch}
        />
      </div>
      <div className="creator-rank-list">
        {creators.map((creator, index) => (
          <div key={index} className="creator-card">
            <div className="creator-rank">{creator.rank}</div>
            <img src={creator.avatar} alt="avatar" />
            <h4>{creator.name}</h4>
            <div>
              Total Sales:
              <span> {creator.totalSales} ETH</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCreators;
