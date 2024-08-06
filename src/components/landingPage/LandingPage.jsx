import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Layout2 from "../layouts/Layout2";
import Layout3 from "../layouts/Layout3";
import Layout4 from "../layouts/Layout4";
import Layout5 from "../layouts/Layout5";
import Layout7 from "../layouts/Layout7";
import AllSlides from "../slides/AllSlides";
import Layout8 from "../layouts/Layout8";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async data fetching/loading process
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <div className="w-screen h-screen bg-white"></div>;
  }

  return (
    <div>
      <Layout />
      <Layout2 />
      <Layout3 />
      <Layout4 />
      <Layout5 />
      <Layout7 />
      <AllSlides />
      <Layout8 />
    </div>
  );
}
