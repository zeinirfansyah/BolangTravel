import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturedProduct = ({ product }) => {
  return (
    <>
      <Link
        key={product.id}
        to={`/paket-wisata/${product.id}`}
        className="min-h-[240px]"
      >
        <div
          data-aos="fade-down"
          className="shadow-md rounded-xl hover:shadow-md "
        >
          <picture className="relative">
            <img
              src={product.product_image}
              data-size="auto"
              alt={product.title}
              className="lazyload rounded-xl object-cover h-60 w-full brightness-50 hover:brightness-75 lg:brightness-75 lg:hover:brightness-50 transition duration-500 lazyloaded"
            />
            <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl">
              <div className="items-center text-sm font-semibold  p-3 text-white">
                {product.tour_location}
              </div>
            </div>
            <div className="absolute left-0 bottom-0 rounded-bl-xl rounded-tr-xl py-3 px-5 text-white grid gap-2 w-full">
              <LinesEllipsis
                text={product.title}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
                className="text-xl text-white"
              />

              <div className="flex justify-between">
                <p className="text-white">{product.price}</p>
                <p className="text-white">{product.tour_duration}</p>
              </div>
            </div>
          </picture>
        </div>
      </Link>
    </>
  );
};

FeaturedProduct.propTypes = {
    product: PropTypes.object.isRequired,
  };

export default FeaturedProduct;
