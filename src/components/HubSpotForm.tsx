"use client";
import { useEffect } from "react";

const HubspotForm = () => {
  useEffect(() => {
    // Dynamically load the HubSpot script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48158610",
          formId: "e5d9350c-840e-4697-be26-c1cabd9617bf",
          target: "#hubspotForm", // Target the container
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-6">Contact Us</h1>
      {/* Container for the HubSpot form */}
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotForm;
