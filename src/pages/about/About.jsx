import family from "../../assets/image/14.webp";
import icons_whatsapp from "../../assets/icons/icons8-whatsapp.svg";
import icons_instagram from "../../assets/icons/icons8-instagram.svg";
import icons_googleMaps from "../../assets/icons/icons8-google-maps-old.svg";


export const About = () => {
  // Ilham Muhammad Rafi
  return (
    <>
      <main>
        <section
          data-aos="zoom-out"
          id="about"
          className="bg-[#fff] transition-all duration-500 py-20"
        >
          <div className="max-w-7xl mx-auto">
            <div
              className="flex flex-col lg:flex-row justify-between items-center gap-10 px-4"
            >
              <div
                id="foto"
                className="lg:w-1/3 flex justify-center items-center lg:my-7"
              >
                <img
                  src={family}
                  alt="Zein Irfansyah"
                  className="transition duration-500 w-[320px] h-[420px] object-cover rounded-2xl lg:rounded-br-[100px] shadow outline-dashed outline-[#B0B0B0] outline-2 outline-offset-8" />
              </div>
              <div id="about" className="flex flex-col gap-4  lg:w-2/3">
                <h1 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-[#00C0E6]">Bolang</span>Travel.
                </h1>
                <p className="text-[#B0B0B0]">
                  Discover the world with BolangTravel, your premier destination
                  for unparalleled adventures. From relaxing beach getaways to
                  thrilling mountain expeditions, we specialize in creating
                  bespoke travel experiences tailored to your preferences. With
                  our dedicated team of experts and attention to detail, every
                  aspect of your journey is meticulously planned, leaving you free
                  to immerse yourself in the wonders of exploration.
                </p>
                <p className="text-[#B0B0B0]">
                  At BolangTravel, we tailor every trip to your unique desires,
                  offering cultural immersion, thrilling activities, or tranquil
                  escapes. Let us be your trusted partner in crafting
                  unforgettable journeys that inspire and delight
                </p>
                <hr className="border-[#E5E5E5] w-full md:w-1/2 my-2" />
                <div id="contact" className="flex flex-col">
                  <a
                    href="#"
                    target="_blank"
                    className="text-[#B0B0B0] hover:text-[#00C0E6] transition-all duration-500 flex gap-2"
                  ><img src={icons_whatsapp} alt="whatsapp" />+620 1234 5678</a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="text-[#B0B0B0] hover:text-[#00C0E6] transition-all duration-500 flex gap-2"
                  ><img src={icons_instagram} alt="instagram" />bolangtravel</a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="text-[#B0B0B0] hover:text-[#00C0E6] transition-all duration-500 flex gap-2"
                  ><img src={icons_googleMaps} alt="googlemaps" />Jl.Ringroad Utara, Sleman, D.I. Yogyakarta</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
