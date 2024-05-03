import { useEffect } from "react";
import Product from "../../components/Product";
import useStore from "../../store/store";
import FeaturedProduct from "../../components/FeaturedProduct";
import { Input } from "../../components/ui/Input";

export const TravelPackage = () => {
  const store = useStore();
  const products = store.products;

  useEffect(() => {
    store.fetchProducts();
  }, [store]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6 my-7">
          <div className="title flex flex-col justify-center text-center items-center gap-2 py-7">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Pilih Paket Liburan Favoritmu!
            </h1>
            <h1 className="text-xl text-gray-400">
              Jangan buang kesempatan liburan bersama keluarga!
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Rekomendasi</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <FeaturedProduct
                  key={product.id}
                  product={product}
                  onProductDetails={() => store.ProductDetails(product)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-3 px-4 py-7 ">
            <Input name="Pencarian" type="text" placeholder="Pencarian" />
            <Input name="Pencarian" type="text" placeholder="Pencarian" style="hidden lg:block"/>
            <Input name="Pencarian" type="text" placeholder="Pencarian" style="hidden lg:block"/>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onProductDetails={() => store.ProductDetails(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
