import { useNavigate, useParams } from "react-router-dom";
import useStore from "../../store/store";
import Destination from "../../components/Destination";
import { Button } from "../../components/ui/Button";

export const PackageDetail = () => {
  const { id } = useParams();
  const store = useStore();
  const product = store.products.find((product) => product.id == id);

  const navigate = useNavigate();
  
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-7">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col  gap-3 max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-center">{product.title}</h1>
            <h1 className="text-l lg:text-xl text-center text-textGray">
              {product.description}
            </h1>
          </div>
          <div className="flex flex-row gap-4">
            <img
              src={product.destinations[0].destination_image}
              data-size="auto"
              alt="Foto Destinasi Hotel Koota"
              className="lazyload lazyloaded rounded-xl object-cover w-2/3 maxh-[560px]"
            />
            <div className="flex flex-col gap-4 max-h-[560px]">
              <img
                src={product.destinations[1].destination_image}
                data-size="auto"
                alt={product.destinations[1].destination_name}
                className="lazyload lazyloaded rounded-xl object-cover max-h-72"
              />
              <img
                src={product.destinations[2].destination_image}
                data-size="auto"
                alt={product.destinations[2].destination_name}
                className="lazyload lazyloaded rounded-xl object-cover max-h-72"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row gap-7 justify-between py-7">
              <div className="flex flex-col gap-4 lg:w-1/2">
                {product.rundown.map((rundown) => (
                  <div key={rundown.id}>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                      {rundown.title}
                    </h1>
                    <p className="text-sm lg:text-lg text-textGray">
                      {rundown.agenda}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 lg:w-1/3">
                <div
                  className=" flex flex-col gap-2 w-full  lg:w-[24rem] shadow-md p-12 border rounded-2xl bg-white aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h2 className="font-semibold text-xl lg:text-2xl">
                    Start Booking
                  </h2>
                  <h1 className="font-semibold text-xl text-secondary">
                    {product.price}
                  </h1>
                  <form
                    action="bookingInformation.html"
                    className="w-full mt-4 grid gap-2"
                  >
                    <input
                      type="date"
                      required
                      className="border-2 border-navy shadow p-3 rounded-xl"
                      placeholder="Select date"
                    />
                    <Button style="bg-secondary hover:bg-primary text-white" onClick={() => {navigate(`/booking-progres`)}} title="Book Now" />
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-4 py-7">
              <h1 className="text-xl font-semibold">Popular Destinations</h1>
              <div className={`grid lg:grid-cols-4 gap-4`}>
                {product.destinations.slice(0, 4).map((destination) => (
                  <div key={destination.id}>
                    <Destination destination={destination} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
