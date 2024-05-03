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
        className="min-h-[280px]"
      >
        <div
          className="grid gap-2 mb-6 lg:mb-0 aos-init aos-animate"
          data-aos="fade-up"
        >
          <picture>
            <img
              src={product.product_image}
              data-size="auto"
              alt="Foto Destinasi Tanjung Benoa"
              className="mb-3 lazyload rounded-xl object-cover h-52 w-full lg:w-80 lazyloaded"
            />
          </picture>
          <LinesEllipsis
            text={product.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="text-dark font-medium text-lg lg:text-base text-center lg:text-left"
          />
          <div className="text-slate-400 text-base lg:text-sm text-center lg:text-left">
            {product.tour_location}
          </div>
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
