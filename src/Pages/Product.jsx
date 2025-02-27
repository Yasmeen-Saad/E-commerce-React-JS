import { useParams } from "react-router-dom";
import { ShopContext } from "../Context";
import Breadcrum from "../Components/Breadcrums";
import { useContext } from "react";
import ProductDisplay from "../Components/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const product_id = useParams();
  const product = all_product.find((item) => item.id == product_id.id);

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product;