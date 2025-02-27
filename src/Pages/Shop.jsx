import Hero from "../Components/Hero";
import NewCollecions from "../Components/NewCollections";
import NewsLetter from "../Components/NewsLetter";
import Offers from "../Components/Offers";
import Popular from "../Components/Popular";

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollecions/>
      <NewsLetter/>
    </div>
  )
}

export default Shop;