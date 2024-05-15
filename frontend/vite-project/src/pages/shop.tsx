import Hero from "../components/hero/hero";
import Offers from "../components/offers/offers";
import Popular from "../components/popular/popular";
import NewColletions from "../components/newCollection/newCollection";
import NewsLetter from "../components/newsLetter/newsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewColletions />
      <NewsLetter />
    </div>
  );
};

export default Shop;
