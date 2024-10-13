// ContactForm.js
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { BiHome } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import Swal from "sweetalert2";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";
const ContactForm = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:5000/contact", data)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for your feedback",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className=" text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent my-6 p-3">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="md:mr-6">
          <div className="">
            {/* First Name */}
            <div className="mb-4">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className={`input input-bordered w-full ${
                  errors.firstName ? "input-error" : ""
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
                className={`input input-bordered w-full ${
                  errors.lastName ? "input-error" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,12}$/,
                  message: "Invalid phone number",
                },
              })}
              className={`input input-bordered w-full ${
                errors.phone ? "input-error" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className={`textarea textarea-bordered w-full ${
                errors.message ? "textarea-error" : ""
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button type="submit" className="btn btn-success text-white w-full">
              Submit
            </button>
          </div>
        </form>

        {/* Contact Info Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <MdEmail className="text-3xl text-green-600" />
            <span className="text-lg">sohrawardy1998@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <PiPhone className="text-3xl text-green-600" />
            <span className="text-lg">+8801749659384</span>
          </div>
          <div className="flex items-center gap-2">
            <BiHome className="text-3xl text-green-600" />
            <span className="text-lg">Azimpur, Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="tooltip  " data-tip="On Top!">
          <button
            onClick={scrollToTop}
            className="border rounded-full p-2 hover:bg-green-600 hover:text-white duration-200"
          >
            <AiOutlineArrowUp className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
