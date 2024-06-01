"use client";

import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const BlogPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="w-full h-full flex items-end justify-center">
      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <iframe
          src="https://mern-blog-luyx.onrender.com/"
          frameborder="0"
          width="90%"
          height="95%"
          className=""
        ></iframe>
      )}
    </div>
  );
};

export default BlogPage;
