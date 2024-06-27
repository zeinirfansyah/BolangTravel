import { useEffect, useState } from "react";
import Product from "../../components/Product";
import useStore from "../../store/store";
import FeaturedProduct from "../../components/FeaturedProduct";
import { Input } from "../../components/ui/Input";
import SelectOption from "../../components/ui/SelectOption";

export const TravelPackage = () => {
  const store = useStore();
  const products = store.products?.data?.rows;
  const categories = store.categories;
  const selectedCategory = store.selectedCategory;
  const setSelectedCategory = store.setSelectedCategory;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    store.fetchProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      let filteredList = products;
      if (selectedCategory) {
        filteredList = filteredList.filter(
          (product) => product?.category === selectedCategory
        );
      }

      if (searchTerm) {
        filteredList = filteredList.filter((product) => {
          const searchTextLower = searchTerm.toLowerCase();
          return (
            product?.title?.toLowerCase().includes(searchTextLower) ||
            product?.location?.toLowerCase().includes(searchTextLower) ||
            product?.destinations?.some((destination) =>
              destination?.title?.toLowerCase().includes(searchTextLower)
            )
          );
        });
      }
      setFilteredProducts(filteredList);
    };

    filterProducts();
  }, [products, selectedCategory, searchTerm]);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6 my-7">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="title flex flex-col justify-center text-center items-center gap-2 py-7 mt-32"
          >
            <h1 className="text-3xl lg:text-4xl font-bold">
              Pilih Paket Liburan Favoritmu!
            </h1>
            <h1 className="text-xl text-gray-400">
              Jangan buang kesempatan liburan bersama keluarga!
            </h1>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl font-bold">Rekomendasi</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {products?.slice(0, 6).map((product) => (
                <FeaturedProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="flex flex-col lg:flex-row justify-between gap-3 px-4 py-7 "
          >
            <div className="lg:w-3/4">
              <Input
                name="search"
                type="text"
                placeholder="Cari Paket Wisatamu!"
                onChange={handleSearchChange}
                value={searchTerm}
              />
            </div>
            <div className="lg:w-1/4">
              <SelectOption
                options={filterOptions}
                value={selectedCategory}
                onChange={handleSelectChange}
                label="Category"
              />
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
