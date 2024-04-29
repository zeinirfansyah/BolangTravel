import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { TravelPackage } from "./pages/travelPackages/TravelPackage";
import { BookingProgress } from "./pages/bookingProgess/BookingProgress";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/paket-wisata" element={<TravelPackage />} />
          <Route path="/detail-paket/:id" element={<TravelPackage />} />
          <Route path="/booking-progres" element={<BookingProgress />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
