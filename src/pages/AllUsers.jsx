import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../config/axiosInstance";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    let resp = await AxiosInstance.get("/users");
    console.log(resp.data);
    setUsers(resp.data);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    await AxiosInstance.delete(`/users/${id}`);
    toast.success("User Deleted");
    getAllUsers();
  };

  return (
    <div className="p-10">
      <h1 className="font-bold text-xl">All Users</h1>

      <main className="mt-5">
        {users.length === 0 ? (
          <p>No users available</p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {users.map((ele) => {
              return (
                <div
                  key={ele.id}
                  className="border border-gray-300 shadow rounded p-5"
                >
                  <h4>{ele.fullname}</h4>
                  <p>{ele.email}</p>
                  <p>{ele.password}</p>
                  <Link to={`/edit/${ele.id}`} className="border px-4 me-2">Edit</Link>
                  <button
                    className="border px-4 me-2"
                    onClick={() => handleDeleteUser(ele.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </section>
        )}
      </main>
    </div>
  );
};

export default AllUsers;
