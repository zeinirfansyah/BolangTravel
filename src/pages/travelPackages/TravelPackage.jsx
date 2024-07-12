import { useEffect, useState } from "react";
import Product from "../../components/Product";
import useStore from "../../store/store";
import { Input } from "../../components/ui/Input";
import SelectOption from "../../components/ui/SelectOption";
import axios from "axios";

export const TravelPackage = () => {
  const { categories } = useStore((state) => state);

  const [displayedData, setDisplayedData] = useState(8);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [productData, setProductData] = useState([]);

  console.log("search", search);
  const getProduct = async () => {
    try {
      if (selectedCategory === "all") {
        const response = await axios.get(
          `http://localhost:3000/api/travel-package/table/${displayedData}&${page}`
        );

        const data = response.data;

        console.log("response", response);

        setProductData(data.data.rows);
      } else {
        const response = await axios.get(
          `http://localhost:3000/api/travel-package/table/${displayedData}&${page}&${selectedCategory}`
        );

        const data = response.data;

        console.log("response", response);

        setProductData(data.data.rows);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("productData", productData);

  useEffect(() => {
    getProduct();
  }, [displayedData, page, selectedCategory, search]);

  const catalogProduct = productData.filter((product) => {
    return (
      product?.title?.toLowerCase().includes(search.toLowerCase()) ||
      product?.location?.toLowerCase().includes(search.toLowerCase()) ||
      product?.destinations?.some((destination) =>
        destination?.title?.toLowerCase().includes(search.toLowerCase())
      )
    );
  });

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="title flex flex-col justify-center text-center items-center gap-2 py-7 mt-32"
          >
            <h1 className="text-3xl lg:text-4xl font-bold">
              Choose Your Favorite Adventure!
            </h1>
            <h1 className="text-xl text-gray-400">
              Make your holiday more memorable
            </h1>
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
                placeholder="Find your favorite travel package"
                onChange={(event) => setSearch(event.target.value)}
                value={search}
              />
            </div>
            <div className="lg:w-1/4">
              <SelectOption
                options={filterOptions}
                value={selectedCategory}
                onChange={handleSelectChange}
                default_option="All Categories"
                default_value="all"
              />
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {catalogProduct?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex items-center justify-between my-8">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border rounded-xl shadow"
          >
            Previous
          </button>
          <span className="mx-4">Page: {page}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={catalogProduct.length < displayedData}
            className="px-4 py-2 border rounded-xl shadow"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
