import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import car from "../assets/car.jpeg";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleID, setRoleID] = useState("");

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    if (selectedRole === "owner") {
      setRoleID(1);
    } else if (selectedRole === "customer") {
      setRoleID(2);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
    console.log(userCred);
    await addDoc(collection(firestore, "users"), {
      uid: userCred.user.uid,
      role: roleID,
    });
    navigate("/login");
  };

  return (
    <main className="text-white">
      <div>
        <div className="flex w-[100vw] h-[100vh]">
          <div className="w-[60%] h-[100%]">
            <img src={car} alt="" className="h-[100%]" />
          </div>
          <div className="h-[100%] p-8">
            <h1 className="text-3xl font-bold"> SignUp </h1>
            <span>Register yourself to access the application</span>
            <form>
              <div className="flex flex-col mt-6">
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                  className="bg-transparent border-gray-50 rounded-sm border-2 p-2"
                />
              </div>

              <div className="flex flex-col mt-6">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  className="bg-transparent border-gray-50 rounded-sm border-2 p-2"
                />
              </div>
              <div className="flex flex-col mt-6">
                <label htmlFor="password">Role</label>
                <select
                  name="role"
                  id="role"
                  className="bg-transparent p-2"
                  onChange={handleRoleChange}
                >
                  <option  className="bg-transparent" value="">Select Role</option>
                  <option  className="bg-transparent" value="owner">Car Owner</option>
                  <option  className="bg-transparent" value="customer">Customer</option>
                </select>
              </div>

              <button
                type="submit"
                onClick={onSubmit}
                className="mt-8 bg-white text-black px-5 py-1 rounded-sm w-[50%]"
              >
                Sign up
              </button>
            </form>

            <p className="mt-4">
              Already have an account?{" "}
              <NavLink to="/login" className="border-b-2 border-gray-50">
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
