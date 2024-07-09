import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { TravelPackage } from "./pages/travelPackages/TravelPackage";
import { PackageDetail } from "./pages/packageDetail/PackageDetail";
import { BookingProgress } from "./pages/bookingProgess/BookingProgress";
import { Layout } from "./layouts/Layout";
import { Payment } from "./pages/bookingProgess/Payment";
import { Completed } from "./pages/bookingProgess/Completed";
import AOS from "aos";
import "aos/dist/aos.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import DestinationList from "./pages/admin/destination/DestinationList";
import AddDestination from "./pages/admin/destination/AddDestination";
import UpdateDestination from "./pages/admin/destination/UpdateDestination";

function App() {
  AOS.init();
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/paket-wisata" element={<TravelPackage />} />
          <Route path="/paket-wisata/:id" element={<PackageDetail />} />
          <Route path="/booking-progres/:id/:date" element={<BookingProgress />} />
          <Route
              path="/pembayaran"
              element={
                <ProtectedRoute redirectPath="/booking-progres"
                requiredData={["date", "name", "phone", "email", "address"]}>
                  <Payment />
                </ProtectedRoute>
              }
            />
        
          <Route path="/booking-selesai" element={<Completed />} />
          <Route path="/destination" element={<DestinationList />} />
          <Route path="/add-destination" element={<AddDestination />} />
          <Route path="/update-destination" element={<UpdateDestination />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
