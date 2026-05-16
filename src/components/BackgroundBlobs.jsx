"use client";

import React from "react";

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="organic-blob w-[600px] h-[600px] bg-blue-200 -top-20 -left-20"></div>
      <div
        className="organic-blob w-[500px] h-[500px] bg-purple-200 top-1/2 -right-20"
        style={{ animationDelay: "-5s" }}
      ></div>
      <div
        className="organic-blob w-[400px] h-[400px] bg-pink-100 bottom-0 left-1/3"
        style={{ animationDelay: "-10s" }}
      ></div>
    </div>
  );
};

export default BackgroundBlobs;
