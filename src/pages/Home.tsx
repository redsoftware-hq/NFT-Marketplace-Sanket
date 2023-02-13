import BrowseCategories from "../components/Home/BroweCategories/BrowseCategories";
import Digest from "../components/Home/Digest/Digest";
import Discover from "../components/Home/Discover/Discover";
import GetStarted from "../components/Home/GetStarted/GetStarted";
import Hero from "../components/Home/Hero/Hero";
import TopCreators from "../components/Home/TopCreators/TopCreators";
import TrendingCollection from "../components/Home/TrendingCollection/TrendingCollection";

function Home() {
  return (
    <>
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <Discover />
      <GetStarted />
      <Digest />
    </>
  );
}
export default Home;
