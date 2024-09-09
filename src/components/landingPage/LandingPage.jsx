import React, { useEffect, useState } from "react";

import Layout8 from "../layouts/Layout8";
import Layoutt from "../layouts/Layoutt";
import Layout7 from "../layouts/Layout7";
import LayoutCode from "../layouts/LayoutCode";

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
    return <div className="w-screen h-screen bg-black"></div>;
  }
  
  return (
    <div>
      <Layoutt />
      <Layout7 />
      <LayoutCode />
      <Layout8 />
    </div>
  );
}
