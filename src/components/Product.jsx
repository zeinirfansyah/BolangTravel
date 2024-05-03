import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product, onProductDetails }) => {
  return (
    <>
      <Link
        key={product.id}
        onClick={() => onProductDetails(product)}
        to="product-detail"
        className="min-h-[240px] my-3"
      >
        <picture>
          <img
            src={product.product_image}
            data-size="auto"
            alt="Foto Destinasi Tanjung Benoa"
            className="mb-3 lazyload rounded-xl object-cover h-52 w-full lg:w-80 lazyloaded"
          />
        </picture>
        <div className="flex flex-col">
          <LinesEllipsis
            text={product.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="text-dark font-medium text-lg lg:text-base "
          />
          <p className="text-slate-400 text-base lg:text-sm">
            {product.price} - {product.tour_duration}
          </p>
          <p className="text-slate-400 text-base lg:text-sm">
            {product.tour_location}
          </p>
        </div>
      </Link>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onProductDetails: PropTypes.func.isRequired,
};

export default Product;