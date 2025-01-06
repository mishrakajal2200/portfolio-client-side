
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set button text to "Sending Message..."

    try {
      const response = await axios.post(
        "http://localhost:4000/api/msz/contact",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Or wherever your token is stored
          },
        }
      );

      if (response.data.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset button text to "Send Message"
    }
  };

  return (
    <section id="contact" className="bg-dark text-white py-5 min-vh-100 ">
    <ToastContainer style={{textAlign:"right"}}/>
      <h3 className="text-warning mt-3">Get In Touch</h3>
      <div className="container mt-4">
        <motion.p
          className="text-center text-muted mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-primary">
            I'm excited to collaborate with you! Drop me a message, and I'll get back to you soon.
          </span>
        </motion.p>

        {/* Form */}
        <motion.form
          action="#"
          method="POST"
          className="row g-4 align-items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Name Input */}
          <div className="col-lg-6 col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="col-lg-6 col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-12 text-center">
            <motion.button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-warning btn-lg px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? "Sending Message..." : "Send Message"} {/* Button Text */}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
