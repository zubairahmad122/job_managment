import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const JobPostForm = () => {
  const [image, setImage] = useState(false);
  const [pdf, setPdf] = useState(false);

  const [data, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    number: "",
    currentSalary: "",
    expectedSalary: "",
  });

  const url = process.env.URI;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("position", data.position);
    formData.append("phoneNumber", data.number);
    formData.append("currentSalary", data.currentSalary);
    formData.append("expectedSalary", data.expectedSalary);
    formData.append("image", image);
    formData.append("pdf", pdf);

    try {
      const response = await axios.post(`${url}/api/v1/application/apply`, formData);
      toast.success("We received your application successfully. Our team will contact you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        position: "",
        number: "",
        currentSalary: "",
        expectedSalary: "",
      });
      setImage(false);
      setPdf(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit job application.");
    }
  };

  return (
    <>
      <section  className="w-full bg-[#fcf6f6] py-20 no-scrollbar">
        <motion.div
          initial={{ y: 600, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="main-form"
        >
          <form
            onSubmit={handleSubmit}
            className="flex border flex-col mx-auto w-full bg-white rounded-xl shadow-lg py-20 mdd:w-[850px] items-start px-12 gap-3"
          >
            <div className="flex flex-col gap-2 items-center">
              <p className="text-[16px] text-gray-500">Upload Your Profile</p>
              <label
                htmlFor="image"
                className="cursor-pointer text-lg border rounded-full w-[80px] flex items-center justify-center bg-gray-100 h-[80px]"
              >
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="image"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FiUpload size={30} />
                )}
              </label>
              <input
                required
                onChange={(e) => setImage(e.target.files[0])}
                id="image"
                type="file"
                hidden
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Name and Email */}
            <div className="flex w-full flex-col sm:flex-row mt-5 gap-2">
              <div className="flex flex-col flex-1">
                <label className="text-[16px] my-2 ml-1 text-gray-500">Full Name</label>
                <input
                  required
                  value={data.name}
                  name="name"
                  onChange={handleChange}
                  type="text"
                  className="w-full p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-[16px] my-2 ml-1 text-gray-500">Email Address</label>
                <input
                  required
                  value={data.email}
                  name="email"
                  onChange={handleChange}
                  type="email"
                  className="w-full p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"
                  placeholder="Email Address"
                />
              </div>
            </div>

            {/* Position */}
            <div className="flex flex-col w-full mt-5 gap-2">
              <label className="text-[16px] text-gray-500">Position</label>
              <input
                required
                value={data.position}
                name="position"
                onChange={handleChange}
                type="text"
                className="w-full p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"
                placeholder="Laravel Developer"
              />
            </div>

            {/* Current and Expected Salary */}
            <div className="flex w-full flex-col sm:flex-row mt-5 gap-2">
              <div className="flex flex-col flex-1">
                <label className="text-[16px] my-2 ml-1 text-gray-500">Current Salary</label>
                <input
                  required
                  value={data.currentSalary}
                  name="currentSalary"
                  onChange={handleChange}
                  type="number"
                  className="w-full p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"
                  placeholder="Current Salary"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-[16px] my-2 ml-1 text-gray-500">Expected Salary</label>
                <input
                  required
                  value={data.expectedSalary}
                  name="expectedSalary"
                  onChange={handleChange}
                  type="number"
                  className="w-full p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"
                  placeholder="Expected Salary"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col w-full mt-5 gap-2">
              <label className="text-[16px] text-gray-500">Phone Number</label>
              <input
                required
                value={data.number}
                name="number"
                onChange={handleChange}
                type="number"
                className="w-full p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"
                placeholder="+92 111 111 111"
              />
            </div>

            {/* Resume Upload */}
            <div className="flex w-full flex-col gap-2 items-start mt-4">
              <p className="text-[16px] text-gray-500">Upload Your Resume</p>
              <label
                htmlFor="pdf"
                className="cursor-pointer w-full p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md flex items-center justify-center bg-gray-100"
              >
                {pdf ? (
                  <span className="">{pdf.name}</span>
                ) : (
                  <FiUpload size={30} />
                )}
              </label>
              <input
                required
                onChange={(e) => setPdf(e.target.files[0])}
                id="pdf"
                type="file"
                accept=".pdf"
                hidden
                className="w-full p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"
              />
            </div>

            <button className="bg-yellow-600 text-white px-4 w-full py-3 rounded-lg mt-5 hover:bg-blue-700 duration-300">
              Submit Your CV
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default JobPostForm;
