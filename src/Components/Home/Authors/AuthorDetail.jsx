import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AuthorDetail() {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://bookhub-backend-six.vercel.app/authors/${id}`) // Make sure backend port is correct
      .then((res) => res.json())
      .then((data) => setAuthor(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!author)
    return <p className="text-center mt-10 text-xl">Loading author...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-10 rounded-lg">
      {/* Author Image */}
      <img
        src={author.image}
        alt={author.name}
        className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-md"
      />

      {/* Author Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold pb-4">{author.name}</h1>
        <p className="text-gray-700 text-justify">{author.bio}</p>
      </div>
    </div>
  );
}
