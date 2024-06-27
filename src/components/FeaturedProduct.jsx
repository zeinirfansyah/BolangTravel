import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturedProduct = ({ product }) => {
  return (
    <>
      <Link
        key={product?.id}
        to={`/paket-wisata/${product?.id}`}
        className="min-h-[240px]"
      >
        <div
          data-aos="fade-down"
          className="shadow-md rounded-xl hover:shadow-md "
        >
          <picture className="relative">
            <div className="bg-gradient-to-b from-[#00000000] to-[#000000c7] absolute inset-0 z-10 rounded-xl backdrop-brightness-100 hover:backdrop-brightness-75 transition-all duration-300"></div>
            <img
              src={`http://localhost:3000/${product?.thumbnail}`}
              data-size="auto"
              alt={product.thumbnail}
              className="lazyload rounded-xl object-cover h-60 w-full  transition duration-500 lazyloaded"
            />
            <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl">
              <div className="flex items-center">
                <p className="text-white text-sm font-semibold bg-primary px-3 py-1 w-fit rounded-bl-xl rounded-tr-xl capitalize">
                  {product?.category}
                </p>
              </div>
            </div>
            <div className="absolute left-0 bottom-0 rounded-bl-xl rounded-tr-xl py-3 px-5 text-slate-700 z-20 grid gap-1 w-full">
              <div className="items-center text-xs">
                <p className="text-white">{product?.location}</p>
              </div>
              <LinesEllipsis
                text={product?.title}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
                className="text-xl text-white"
              />
              <div className="flex justify-between">
                <p className="text-white">Rp. {product?.price}</p>
                <p className="text-white">{product?.duration} Days</p>
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
