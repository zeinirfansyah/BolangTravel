import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <>
      <Link
        key={product.id}
        to={`/paket-wisata/${product.id}`}
        className="min-h-[240px] my-3"
      >
        <picture className="relative hover:brightness-75 transition-all duration-300">
          <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl">
            <div className="flex items-center">
              <p className="text-white text-xs md:text-sm font-semibold bg-primary px-3 py-1 w-fit rounded-bl-xl rounded-tr-xl capitalize">
                {product?.category}
              </p>
            </div>
          </div>
          <img
            src={`http://localhost:3000/${product?.thumbnail}`}
            data-size="auto"
            alt="Foto Destinasi Tanjung Benoa"
            className="mb-3 lazyload rounded-xl object-cover h-52 w-full lg:w-80 lazyloaded"
          />
        </picture>
        <div className="flex flex-col">
          <div className="items-center text-xs">
            <p>{product?.location}</p>
          </div>
          <LinesEllipsis
            text={product.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="text-dark font-medium text-base lg:text-base "
          />
          <p className="text-slate-400 text-sm">
            {product.price} / {product.duration} Days
          </p>
          <p className="text-slate-400 text-sm">
            {product.tour_location}
          </p>
        </div>
      </Link>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
