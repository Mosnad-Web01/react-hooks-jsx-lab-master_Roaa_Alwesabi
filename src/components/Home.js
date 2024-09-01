// src/components/Home.js
import React from "react";
import { name, city } from "../data/data";  // تحديث الاستيراد ليتوافق مع الأسماء الصحيحة

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
