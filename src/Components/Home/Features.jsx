import {  FaBookOpen, FaHeadset, FaLock } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { GoShieldLock } from "react-icons/go";
export default function Features() {
  const features = [
    { icon: <FaBookOpen className="text-6xl text-secondary" />, name: "Huge Collection" },
    { icon: <FaHeadset className="text-6xl text-secondary" />, name: "24/7 Support" },
    { icon: <FiGift className="text-6xl text-secondary" />, name: "Special Offers" },
    { icon: <GoShieldLock className="text-6xl text-secondary" />, name: "Secure Payments" },
  ];

  return (
    <section className="w-full py-16 bg-base-100 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-2">
              {feature.icon}
              <span className="font-semibold ">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
