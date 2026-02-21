import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        console.log("Full result:", result);
        const user = result.user;
        updateProfile(user, { photoURL: photoURL, displayName: name });

        Swal.fire({
          icon: "success",
          title: "Registration Successful 🎉",
          text: `Welcome to BookHub,`,
          timer: 1500,
          showConfirmButton: false,
        });
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };
  return (
    <div className="my-14 flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Register</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label text-neutral">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />

              <label className="label text-neutral">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              <label className="label text-neutral">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              <label className="label text-neutral">Photo</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />

              <button className="btn btn-neutral my-3">Register</button>
            </fieldset>
          </form>
          <p className="text-xs">
            Already have an account?{" "}
            <Link to={"/login"} className="text-primary-content font-semibold">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
