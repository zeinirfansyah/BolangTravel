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
import DestinationList from "./pages/admin/destination/DestinationList";
import AddDestination from "./pages/admin/destination/AddDestination";
import UpdateDestination from "./pages/admin/destination/UpdateDestination";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import AuthRoute from "./routes/AuthRoute";
import Dashboard from "./pages/admin/Home/Dashboard";
import CreateDestinationsAndRundowns from "./pages/admin/formDestinationsAndRundowns/CreateDestinationsAndRundowns";
import { Suspense } from "react";
import BookingHistory from "./pages/bookingHistory/BookingHistory";
import BookingList from "./pages/admin/bookingList/BookingList";

function App() {
  AOS.init();
  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/paket-wisata" element={<TravelPackage />} />
            <Route path="/paket-wisata/:id" element={<PackageDetail />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="/booking-progres/:id/:date" element={<AuthRoute />}>
              <Route index element={<BookingProgress />} />
            </Route>

            <Route path="/pembayaran/:id" element={<AuthRoute />}>
              <Route index element={<Payment />} />
              <Route path="selesai" element={<Completed />} />
            </Route>

            <Route path="/account" element={<AuthRoute />}>
              <Route index element={<BookingProgress />} />
              <Route path="booking-history" element={<BookingHistory />} />
            </Route>

            <Route path="/admin" element={<AuthRoute role="admin" />}>
              <Route index element={<Dashboard />} />
              <Route path="destination" element={<DestinationList />} />
              <Route path="add-destination" element={<AddDestination />} />
              <Route
                path="update-destination"
                element={<UpdateDestination />}
              />
              <Route
                path="booking-list"
                element={<BookingList />}
              />

              <Route
                path="create-destinations-and-rundowns"
                element={<CreateDestinationsAndRundowns />}
              />
            </Route>

            <Route path="*" element={<NotFound />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
