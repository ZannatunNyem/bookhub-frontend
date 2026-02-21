import React from "react";
import { Link } from "react-router-dom";

export default function BlogBanner() {
  return (
    <div className="hero h-full bg-secondary">
      <div className="hero-overlay flex items-center justify-center">
        <div className="hero-content text-neutral-content py-10 md:py-15">
          <div className="max-w-md text-center">
            <h1 className="my-5 text-4xl font-bold">The World of Books</h1>
            <hr className="border-t border-base-100 my-8 w-1/4 mx-auto" />

            <p className="mb-5">
              Explore our latest articles from authors and book lovers. Stay
              updated with the stories that matter to you........
            </p>

            <Link to={"/blogs"}>
              <button className="btn btn-accent text-neutral-content">
                Read Our Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
