import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/image/1.webp";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import { useState } from "react";
import axios from "axios";
import Toast from "../../components/ui/Toast";

export const Register = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          fullname,
          username,
          phone,
          address,
          email,
          password,
        }
      );

      if (response.status === 201) {
        alert("Register Success!");
        navigate("/login");
      }
    } catch (error) {
      setError(error?.response?.data?.message);

      console.log("Failed to register", error?.response?.data);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-2 min-h-screen mt-32">
        <div className="max-w-7xl mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-4 py-1 lg:w-[60vw] border-2 border-slate-200 rounded-lg mb-12"
          >
             {error && <Toast text={error} backgroundColor="bg-red-200" />}
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
                id="bookingForm"
                className="flex flex-col gap-5 w-full lg:pe-20 px-4 py-6 "
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Nama Lengkap</label>
                  <Input
                    name="name"
                    placeholder="Masukkan nama anda"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <Input
                    name="phone"
                    placeholder="Masukan nomor telepon anda"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="address">Alamat</label>
                  <Textarea
                    name="address"
                    placeholder="Masukan alamat anda"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
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

                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <Input
                    name="email"
                    placeholder="Masukan email anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
              <div className="w-full lg:w-[320px]">
                <Button
                  title="Register"
                  style="bg-secondary text-white hover:bg-primary"
                  onClick={handleSubmit}
                />
              </div>
              <Link
                to="/login"
                className="text-center text-primary hover:text-secondary"
              >
                Saya sudah punya akun
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
