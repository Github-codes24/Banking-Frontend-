import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-10">
      {/* Header Image - Full Width */}
      <div className="w-full">
        <img
          src="/slider-2.jpg"
          alt="About Us Header"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Content Section - Centered */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* About Us */}
        <h2 className="text-5xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-8 ">
          MAA ANUSAYA URBAN Co-operative Credit Society Limited is a Multi-State Co-operative Society registered under the Multi-State Co-operative Societies Act, 2002 (Registration No. MSCS/CR/784/2013), established on February 8, 2013. Our mission is to uplift the financial and social well-being of our members by promoting savings and responsible financial practices.
          <br /><br />
          We offer a variety of secure and member-centric financial products including Fixed Deposits, Recurring Deposits, Monthly Income Schemes, and other investment options tailored to support financial growth. With our registered office located in Mumbai, our operational reach extends across Maharashtra, Karnataka, and Goa.
          <br /><br />
          As a fully compliant and regulated entity, we function under the byelaws of the society and strictly adhere to the provisions of the Multi-State Co-operative Societies Act. Our activities are monitored and guided by the Central Registrar of Co-operative Societies under the Ministry of Agriculture & Farmers Welfare, Government of India. All collected funds are judiciously utilized for member lending and investment in accordance with our cooperative principles.
        </p>

        {/* Our Vision */}
        <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
        <p className="text-gray-700 mb-6">
          To become a trusted and leading co-operative credit society, empowering members through transparent, ethical, and inclusive financial services that foster long-term prosperity.
        </p>

        {/* Our Values */}
        <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Integrity and Transparency</li>
          <li>Innovation and Excellence</li>
          <li>Customer-Centric Approach</li>
          <li>Inclusive Growth and Team Collaboration</li>
          <li>Compliance, Trust & Accountability</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
