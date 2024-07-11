import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { useState } from "react";
import Toast from "../../components/ui/Toast";
import {useAuthStore} from "../../store/useAuthStore";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const login = useAuthStore((state) => state.login);
  const { token, user } = useAuthStore((state) => state);

  if (token) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/"} replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(username, password);

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      console.log(token);
    } catch (error) {
      setError(error?.response?.data?.message);

      console.log("Failed to Login", error?.response?.data);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-2 min-h-screen mt-32">
        <div className="max-w-7xl mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-4 py-1 lg:w-[60vw] shadow border-2 border-slate-200 rounded-lg mb-12"
          >
            <div className="title flex flex-col justify-center items-center gap-2 my-12">
              <h1 className="text-2xl lg:text-3xl font-bold text-center">
                Welcome to BolangTravel
              </h1>
              <p className="text-center text-gray-400">
                Fill the registration from below!
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
              <div
                id="bookingInfo"
                className="flex flex-col gap-5 w-full lg:ps-20 px-4 py-6 pb-10 lg:pb-auto border-b-2 lg:border-b-0 lg:border-s-2 border-pureGray "
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Username</label>
                  <Input
                    name="name"
                    placeholder="Masukkan username akun anda"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="address">Password</label>
                  <Input
                    name="address"
                    type="password"
                    placeholder="Masukan password anda"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center my-12">
              {error && <Toast text={error} backgroundColor="bg-red-200" />}
              <div className="w-full lg:w-[320px]">
                <Button
                  title="Login"
                  style="bg-secondary text-white hover:bg-primary"
                  onClick={handleSubmit}
                />
              </div>
              <Link
                to="/register"
                className="text-center text-primary hover:text-secondary"
              >
                Saya belum punya akun
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
