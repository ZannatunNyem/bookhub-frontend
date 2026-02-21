import React from "react";
import reading from "../img/reading.jpg";

export default function Blogs() {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 space-y-6">
      <img
        src={reading}
        alt="Blog Visual"
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />

      <h1 className="text-4xl font-bold text-center md:text-left">
        The Transformative Power of Reading
      </h1>

      <p className="text-gray-700 text-justify max-w-5xl mx-auto">
        Reading is more than just a hobby—it is a journey into the minds,
        worlds, and experiences of others. Every book offers a unique
        perspective, teaching us empathy, critical thinking, and imagination.
        Whether it’s a gripping thriller, a heartfelt romance, or an informative
        cookbook, reading opens doors to understanding and inspiration.
      </p>

      <p className="text-gray-700 text-justify">
        In today’s fast-paced digital world, carving out time to read may feel
        challenging, but the benefits are undeniable. Regular reading improves
        focus, reduces stress, and enhances knowledge. For students and
        professionals alike, it nurtures creativity and provides insights that
        cannot always be found online.
      </p>

      <p className="text-gray-700 text-justify">
        Choosing what to read is a personal adventure. Exploring different
        genres allows readers to challenge themselves, discover new interests,
        and grow intellectually and emotionally. By incorporating reading into
        daily life, one can transform idle moments into opportunities for
        learning and reflection.
      </p>

      <p className="text-gray-700 text-justify">
        Ultimately, books have the power to shape thoughts, change perspectives,
        and enrich lives. So pick up a book today, and let the pages take you on
        a journey you’ll never forget.
      </p>
    </div>
  );
}
