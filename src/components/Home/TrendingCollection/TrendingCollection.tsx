import "./TrendingCollection.scss";

const trendingCollections = [
  {
    name: "DSGN Animals",
    artist: "MrFox",
    artistAvatar: "/img/trending/a1.png",
    total: "1025",
    nfts: {
      primary: "/img/trending/pri-1.png",
      secondary: "/img/trending/sec-1.png",
      tertiary: "/img/trending/sec-2.png",
    },
  },
  {
    name: "DSGN Animals",
    artist: "MrFox",
    artistAvatar: "/img/trending/a1.png",
    total: "1025",
    nfts: {
      primary: "/img/trending/pri-1.png",
      secondary: "/img/trending/sec-1.png",
      tertiary: "/img/trending/sec-2.png",
    },
  },
  {
    name: "DSGN Animals",
    artist: "MrFox",
    artistAvatar: "/img/trending/a1.png",
    total: "1025",
    nfts: {
      primary: "/img/trending/pri-1.png",
      secondary: "/img/trending/sec-1.png",
      tertiary: "/img/trending/sec-2.png",
    },
  },
];
function TrendingCollection() {
  return (
    <div className="trending-collection">
      <h2>Trending Collections</h2>
      <h3>Checkout our weekly updated trending collection.</h3>
      <div className="collection-list">
        {trendingCollections.map((collection, index) => (
          <div key={index} className="collection">
            <img
              src={collection.nfts.primary}
              alt="01"
              className="collection-thumb"
            />
            <div className="small-thumbs">
              <img
                src={collection.nfts.secondary}
                alt="02"
                className="small-thumbnail"
              />
              <img
                src={collection.nfts.tertiary}
                alt="03"
                className="small-thumbnail"
              />
              <div className="view-collection">
                <span>{collection.total}+</span>
              </div>
            </div>
            <h4>{collection.name}</h4>
            <div className="artist-name">
              <img src={collection.artistAvatar} alt="artist avatar" />
              <span>{collection.artist}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCollection;
