import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { TravelPackage } from "./pages/travelPackages/TravelPackage";
import { PackageDetail } from "./pages/packageDetail/PackageDetail";
import { BookingProgress } from "./pages/bookingProgess/BookingProgress";
import { Layout } from "./layouts/Layout";
import { Payment } from "./pages/bookingProgess/Payment";
import { Completed } from "./pages/bookingProgess/Completed";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/paket-wisata" element={<TravelPackage />} />
          <Route path="/detail-paket/:id" element={<PackageDetail />} />
          <Route path="/booking-progres" element={<BookingProgress />} />
          <Route path="/pembayaran" element={<Payment />} />
          <Route path="/booking-selesai" element={<Completed />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
