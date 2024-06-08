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
    <div className="w-full h-full ">
      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <div className="w-full h-full flex items-center justify-center">
            <iframe
              src="https://mern-blog-luyx.onrender.com/"
              width="90%"
              height="95%"
              className=""
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPage;
