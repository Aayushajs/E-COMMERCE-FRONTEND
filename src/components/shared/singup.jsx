import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./LoginModal";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://e-comerce-backend-mf8i.onrender.com/api/v1/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "600px" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "24px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              style={{ position: "absolute", top: "8px", right: "8px", background: "transparent", border: "none", cursor: "pointer" }}
            >
              ✕
            </Link>

            <h3 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "16px" }}>Signup</h3>
            <div style={{ marginBottom: "16px" }}>
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", outline: "none" }}
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span style={{ color: "#EF4444", fontSize: "0.875rem" }}>This field is required</span>
              )}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", outline: "none" }}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span style={{ color: "#EF4444", fontSize: "0.875rem" }}>This field is required</span>
              )}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", outline: "none" }}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span style={{ color: "#EF4444", fontSize: "0.875rem" }}>This field is required</span>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                type="submit"
                style={{ padding: "8px 16px", backgroundColor: "#EC4899", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                Signup
              </button>
              <p style={{ fontSize: "1rem" }}>
                Have an account? 
                <button
                  style={{ background: "none", border: "none", textDecoration: "underline", color: "#3B82F6", cursor: "pointer" }}
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
