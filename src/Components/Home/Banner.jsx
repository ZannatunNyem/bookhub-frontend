import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);
  return (
    <section
      className="
  w-full
  flex flex-col md:flex-row
  items-start md:items-center
  justify-start md:justify-center
  pl-4 sm:pl-6 md:pl-16
  pr-2 sm:pr-4 md:pr-10
  bg-base-100
  min-h-[60vh] md:min-h-[80vh]
  bg-base-100
"
    >
      <div data-aos="fade-right" className="w-full md:w-1/2   mt-8 sm:mt-5">
        <h1 className="sm:text-left text-center text-5xl sm:text-4xl md:text-6xl font-bold mb-4">
          Every Book
        </h1>
        <h1 className="text-center text-5xl sm:text-4xl md:text-6xl font-bold mb-4">
          You’re Looking For,
        </h1>
        <h1 className="text-primary-content sm:text-left text-center text-5xl sm:text-4xl md:text-5xl font-bold mb-4">
          Under One Roof{" "}
          <span className="hidden lg:inline"> and One click</span>
        </h1>
        <p className="text-center text-xl font-semibold">
          Books For Every Mind
        </p>
      </div>

      <div
        data-aos="zoom-in-down"
        className="hidden md:flex md:w-1/2 justify-end"
      >
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Books Banner"
          className="w-[90%] max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
