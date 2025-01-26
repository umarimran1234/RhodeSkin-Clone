import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-4 py-28 sm:px-6 lg:px-20  ">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase ">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 text-center mb-12">
        Effective Date: <span className="font-medium"> 26 / january / 25 </span>
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 uppercase">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">zalmar.store</span>. Your
          privacy is critically important to us. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          visit our website or use our services. Please read this document
          carefully to understand our practices regarding your personal data and
          how we handle it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 uppercase ">
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We may collect the following types of information:
        </p>
        <h3 className="text-xl font-medium mb-2 uppercase">
          Personal Information:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Streat Address</li>

          {/* <li>Billing Information</li> */}
        </ul>
        <h3 className="text-xl font-medium mt-6 mb-2 uppercase">
          Non-Personal Information:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Browsing activity on our site</li>
        </ul>
        <h3 className="text-xl font-medium mt-6 mb-2 uppercase ">
          Cookies and Tracking Technologies:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Cookies</li>
          <li>Web beacons</li>
          <li>Analytics tools</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold uppercase mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          <li>To provide and maintain our services.</li>
          <li>To improve user experience and customize content.</li>
          <li>To process transactions securely.</li>
          <li>To send administrative and promotional emails.</li>
          <li>To monitor website performance and security.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 uppercase ">
          How We Share Your Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We do not sell, trade, or rent your personal information to others. We
          may share information in the following cases:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          <li>
            <strong>With Service Providers:</strong> To perform services on our
            behalf.
          </li>
          <li>
            <strong>Legal Requirements:</strong> To comply with legal
            obligations.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, sale,
            or acquisition.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 uppercase ">Your Rights</h2>
        <p className="text-gray-700 leading-relaxed">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          <li>Access to your data.</li>
          <li>Correction of inaccurate data.</li>
          <li>Deletion of your data.</li>
          <li>Opt-out of data processing.</li>
          <li>File a complaint with a regulatory authority.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 uppercase ">
          Data Security
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We implement industry-standard security measures to protect your
          information. However, no method of transmission over the internet is
          100% secure. We cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 uppercase ">
          Third-Party Links
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these sites. We encourage you
          to read their privacy policies before providing them with personal
          data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl uppercase font-semibold mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. Changes will be
          notified by updating the "Effective Date" at the top of this page. We
          encourage you to review this policy periodically.
        </p>
      </section>

      <section>
        <Link
          href={"/contact_us"}
          className="text-2xl  text-blue font-semibold mb-4"
        >
          Contact Us
        </Link>
        <p className="text-gray-700 mt-6 leading-relaxed">
          If you have any questions or concerns about this Privacy Policy,
          please :
        </p>
        <Link className=" underline" href={"/contact_us"}>
          contact us{" "}
        </Link>
        <ul className="list-none mt-4 space-y-2 text-gray-700">
          {/* <li>
            <strong>Email:</strong> <span>Storezalmar@gmail.com</span>
          </li>
          <li>
            <strong>Phone:</strong> <span>+92 329 2299694</span>
          </li> */}
          {/* <li>
            <strong>Address:</strong> <span>[Your Address]</span>
          </li> */}
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
