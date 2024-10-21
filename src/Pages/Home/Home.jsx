import Costumersays from "../../components/feature/Costumersays/Costumersays";
import Features from "../../components/feature/Features/Features";
import FollowUs from "../../components/feature/FollowUs/FollowUs";
import Logos from "../../components/feature/Logos/Logos";
import Navsection from "../../components/feature/Navsection/Navsection";
import Newarrivals from "../../components/feature/Newarrivals/Newarrivals";
import Peaky from "../../components/feature/Peaky/Peaky";
import LastSec from "../../components/LastSec/LastSec";
import DealSection from "../../components/Section2/DealSection";

const Home = () => {
  return (
    <div>
      <Navsection />
      <Logos />
      <DealSection />
      <Newarrivals />
      <Peaky />
      <Features />
      <FollowUs />
      <Costumersays />
      <LastSec />
    </div>
  );
};

export default Home;
