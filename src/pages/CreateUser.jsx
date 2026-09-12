import { useState } from "react";
import { AxiosInstance } from "../config/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { fullname, email, password };
    await AxiosInstance.post("/users", newUser);
    toast.success("Registered successfully");
    navigate("/all");
  };

  return (
    <div className="p-10">
      <h1 className="font-bold text-xl">Register User</h1>

      <form className="p-5" onSubmit={handleSubmit}>
        <label htmlFor="fullname" className="font-semibold me-2">
          Fullname
        </label>
        <input
          type="text"
          className="border border-gray-200 shadow rounded"
          required
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email" className="font-semibold me-2">
          Email
        </label>
        <input
          type="email"
          className="border border-gray-200 shadow rounded"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password" className="font-semibold me-2">
          Password
        </label>
        <input
          type="password"
          className="border border-gray-200 shadow rounded"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="bg-purple-600 text-white px-5 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
