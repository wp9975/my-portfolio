import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const ContactMe: React.FC<Props> = (props) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!name) {
      nameError = "Name is required";
    }

    if (!email || !validateEmail(email)) {
      emailError = "Valid email is required";
    }

    if (!message) {
      messageError = "Message is required";
    }

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Przesyłanie danych z formularza
      console.log({ name, email, message });
      // Czyszczenie formularza
      setName("");
      setEmail("");
      setMessage("");
      setErrors({ name: "", email: "", message: "" });
    }
  };

  const formVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative flex items-center justify-center w-full p-4 py-20"
    >

      <div className="relative z-10 p-8 rounded-md shadow-md min-w-[400px] md:w-1/3 max-w-2xl text-white border-2">
        <h2 className="mb-4 text-4xl font-bold">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <AnimatePresence>
            {inView && (
              <>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={formVariants}
                  custom={0}
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.name && (
                      <p className="text-red-600">{errors.name}</p>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={formVariants}
                  custom={1}
                >
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email}</p>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={formVariants}
                  custom={2}
                >
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={4}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-600">{errors.message}</p>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          <button
            type="submit"
            className="px-4 py-2 mt-2 text-white transition-all duration-300 bg-blue-900 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
