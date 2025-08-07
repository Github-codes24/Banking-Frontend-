import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 pb-2">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Office Address</h2>
            <p>
              Ghandhi ward<br />
             Manihar Chowk,<br />
             Gondiya
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-blue-600 underline">contact@bagherwalsamaj.org</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Contact Number</h2>
            <p>+91 9876543210</p>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="w-full h-[300px]">
          <iframe
            title="Bagherwal Samaj Location"
            className="w-full h-full border rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.7595449871914!2d75.7885!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d8e218ad07%3A0x1b53f31c08e5bfe3!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1691423442800!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
