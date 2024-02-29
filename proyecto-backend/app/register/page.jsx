"use client"

import "@styles/Register.scss"
import { FcGoogle } from "react-icons/fc"
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerForm = new FormData();

      for (var key in formData) {
        registerForm.append(key, formData[key]);
      }

      const response = await fetch("/api/register/", {
        method: "POST",
        body: registerForm,
      });

      if (response.ok) {
        router.push("/login");
      }
    } catch (err) {
      console.log("Registration failed", err.message);
    }
  };

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" onSubmit={handleSubmit}>

          <input placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />

          <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />

          <input placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />

          <input placeholder="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

          <input id="image" type="file" name="profileImage" onChange={handleChange} accept="image" style={{ display: "none" }} required />

          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add prifile" />
            <p>Upload Profile Photo</p>
          </label>

          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile"
              style={{ maxWidth: "80px", maxHeight: "100px" }}
            />
          )}

          <button type="submit" disabled="{!passwordMatch}">Register</button>
        </form>

        <button type="button" onClick={""} className="google">
          <p>Login with Google</p>
          <FcGoogle />
        </button>

        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  )
}

export default Register