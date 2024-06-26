import LinesEllipsis from "react-lines-ellipsis";
import PropTypes from "prop-types";

const Destination = ({ destination }) => {
  return (
    <>
      <div
        key={destination.id}
        className="min-h-[240px] my-3"
      >
        <picture>
          <img
            src={destination.thumbnail}
            data-size="auto"
            alt="Foto Destinasi Tanjung Benoa"
            className="mb-3 lazyload rounded-xl object-cover h-52 w-full lg:w-80 lazyloaded"
          />
        </picture>
        <div className="flex flex-col">
          <LinesEllipsis
            text={destination.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="text-dark font-medium text-lg lg:text-base "
          />
        </div>
      </div>
    </>
  );
};

Destination.propTypes = {
  destination: PropTypes.object.isRequired,
};

export default Destination;
