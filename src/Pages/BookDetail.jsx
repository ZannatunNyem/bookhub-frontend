import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

export default function BookDetail() {
  const { user } = useAuth();
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const handleCart = (book) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login first!",
      });
      return;
    }

    const cartItem = {
      bookId: book._id,
      title: book.title,
      price: book.price,
      image: book.image,
      category: book.category,
      email: user.email,
    };

    axios
      .post("https://bookhub-backend-six.vercel.app/cart", cartItem)
      .then((res) => {
        console.log("Cart saved:", res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book added to cart!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`https://bookhub-backend-six.vercel.app/allBooks/${id}`)
      .then((res) => res.json())
      .then((data) => setBookData(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!bookData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-10 grid md:grid-cols-2 gap-10">
      <img
        src={bookData.image}
        alt={bookData.title}
        className="w-full rounded-lg shadow"
      />
      <div className=" content-center">
        <h1 className="text-3xl font-bold mb-3">{bookData.title}</h1>
        <p className="text-lg mb-2">Author: {bookData.author}</p>
        <p className="mb-2">Category: {bookData.category}</p>
        <p className="mb-2">Pages: {bookData.pages}</p>
        <p className="mb-2">Year: {bookData.publishedYear}</p>
        <p className="mb-4">Rating: ⭐ {bookData.rating}</p>
        <p className="mb-6">{bookData.description}</p>
        <p className="text-2xl font-bold">${bookData.price}</p>
        <button
          onClick={() => handleCart(bookData)}
          className="btn btn-accent mt-10 text-base-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
