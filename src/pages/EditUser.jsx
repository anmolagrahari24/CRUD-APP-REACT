import { useEffect, useState } from "react";
import { AxiosInstance } from "../config/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  async function getEditUser() {
    let resp = await AxiosInstance.get(`/users/${params.id}`);
    console.log(resp.data);
    setFullName(resp.data.fullname);
    setEmail(resp.data.email);
    setPassword(resp.data.password);
  }

  useEffect(() => {
    getEditUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { fullname, email, password };
    await AxiosInstance.put(`/users/${params.id}`, updatedUser);
    toast.success("User Updated");
    navigate("/all")
  };

  return (
    <div className="p-10">
      <h1 className="font-bold text-xl">Update User</h1>

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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
