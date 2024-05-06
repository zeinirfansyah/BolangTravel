import image11 from "../../assets/image/11.webp";
import image14 from "../../assets/image/14.webp";
import ic_star from "../../assets/icons/ic_star.svg";

import { useEffect } from "react";
import { Button } from "../../components/ui/Button";
import useStore from "../../store/store";
import FeaturedProduct from "../../components/FeaturedProduct";
import Product from "../../components/Product";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const store = useStore();
  const products = store.products;

  useEffect(() => {
    store.fetchProducts();
  }, [store]);
  return (
    <>
      <div
        id="home"
        className="overflow-hidden bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: `url(${image11})` }}
      >
        <div className="overflow-hidden bg-[#000] bg-opacity-70 ">
          <div className="max-w-7xl mx-auto px-4 h-[95vh] lg:h-[45rem] p-4 flex items-center justify-center">
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex flex-col gap-4 max-w-3xl">
              <h1 className="text-2xl lg:text-4xl mt-10 font-bold text-center text-white">
                Temukan Keajaiban Indonesia, Eksplorasi Tanah Air Terindah!
              </h1>
              <h4 className="text-xl font-light text-white">
                Jelajahi pesona alam Indonesia yang memukau, dari hutan hujan
                tropis yang lebat hingga puncak-puncak gunung yang menantang.
              </h4>
              <Button
                onClick={() => {navigate('paket-wisata')}}
                title="Pesan Sekarang"
                style="bg-secondary hover:bg-primary text-white max-w-[240px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex flex-col gap-14">
          <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Rekomendasi</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <FeaturedProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Paket Wisata Populer</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {products.slice(0, 4).map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex flex-col lg:flex-row justify-center gap-14 items-center py-14">
            <div className="lg:w-1/4">
              <img
                src={image14}
                alt="image14"
                className="outline-dashed outline-2 outline-darkGray outline-offset-8 lg:rounded-br-[150px] rounded-lg max-h-[480px]"
              />
            </div>
            <div className="flex flex-col gap-7 lg:w-1/2">
              <div>
                <h1 className="text-2xl font-semibold">Happy Family</h1>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <img src={ic_star} alt="star" />
                  <img src={ic_star} alt="star" />
                  <img src={ic_star} alt="star" />
                  <img src={ic_star} alt="star" />
                  <img src={ic_star} alt="star" />
                </div>
                <h1 className="text-4xl">
                  What a great trip with my family and I should try again next
                  time soon ...
                </h1>
                <h1 className="text-2xl text-darkGray">Rick Atsley, Musician</h1>
              </div>
              <Button
                onClick={() => {navigate('tentang-kami')}}
                title="Tentang Kami"
                style="bg-secondary hover:bg-primary text-white max-w-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
