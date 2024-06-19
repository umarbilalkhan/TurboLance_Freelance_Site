import React, { useState } from "react";

import img from "../img/Logo3.png";
import { Link } from "react-router-dom";

const documents = {
  TermsOfService: (
    <>
      <strong className="text-2xl font-bold">
        Terms of Service for TurboLance:
      </strong>
      <p>
        Welcome to TurboLance. These Terms of Service govern your access to and
        use of TurboLance.com, along with any other websites and apps we own or
        operate. By using our site, whether as a registered user or an
        unregistered visitor, you agree to abide by these terms and conditions.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">
        1. Licenses and Third-Party Content:
      </strong>
      <br></br>
      <p>
        By using TurboLance, you are granted a limited license to access and use
        our services, subject to your compliance with these Terms of Service and
        any other applicable terms and conditions. We may also include
        third-party content on our site, which is subject to the respective
        third-party terms and conditions.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">2. User Conduct:</strong>
      <br></br>
      <p>
        You agree to use TurboLance responsibly and lawfully. This includes
        refraining from engaging in any activities that may violate our Terms of
        Service, infringe upon the rights of others, or harm our website or its
        users.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">
        3. Intellectual Property Rights:
      </strong>
      <br></br>
      <p>
        All intellectual property rights associated with TurboLance, including
        trademarks, copyrights, and patents, are reserved. You may not use any
        of TurboLance's intellectual property without our express permission.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">4. Limitation of Liability:</strong>
      <br></br>
      <p>
        We strive to provide accurate and reliable information on TurboLance,
        but we cannot guarantee its completeness or accuracy. Therefore, we
        shall not be liable for any damages arising from your use of our website
        or reliance on its content.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">
        5. Governing Law and Dispute Resolution:
      </strong>
      <br></br>
      <p>
        These Terms of Service are governed by the laws of [Your Jurisdiction].
        Any disputes arising from these terms shall be resolved through
        arbitration in accordance with the rules of [Arbitration Association].
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">6. Changes to Terms:</strong>
      <br></br>
      <p>
        We reserve the right to update or modify these Terms of Service at any
        time without prior notice. Any changes will be effective immediately
        upon posting on our website.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">Conclusion:</strong>
      <br></br>
      <p>
        By using TurboLance, you agree to abide by these Terms of Service. If
        you have any questions or concerns about our terms and conditions,
        please contact us at{" "}
        <a href="mailto:terms@turbolance.com">terms@turbolance.com</a>.
      </p>
      <br></br>
    </>
  ),
  PrivacyPolicy: (
    <>
      <strong className="text-2xl font-bold">
        Privacy Policy for TurboLance:
      </strong>
      <p>
        Welcome to TurboLance. This Privacy Policy outlines how we collect, use,
        and protect your personal information when you use our website.
      </p>
      <br></br>

      <strong className="text-2xl mt-4 mb-2">1. Information We Collect:</strong>
      <br></br>
      <p>
        When you use TurboLance, we may collect various types of information,
        including:
      </p>
      <br></br>
      <ul className="list-disc ml-5">
        <li>
          <strong>Personal Information:</strong> This may include your name,
          email address, and contact details, which you provide when registering
          or using our services.
        </li>
        <li>
          <strong>Usage Information:</strong> We may collect information about
          how you interact with our website, such as your browsing history,
          pages visited, and device information.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> We use cookies and
          similar tracking technologies to enhance your user experience and
          analyze website usage.
        </li>
      </ul>
      <br></br>

      <strong className="text-xl mt-4 mb-2">
        2. How We Use Your Information:
      </strong>
      <br></br>
      <p>
        We may use the information we collect for various purposes, including:
      </p>
      <br></br>
      <ul className="list-disc ml-5">
        <li>Providing and improving our services.</li>
        <li>Personalizing your experience on TurboLance.</li>
        <li>Communicating with you about your account and our services.</li>
        <li>
          Marketing and promotional purposes, with your consent where required.
        </li>
      </ul>
      <br></br>

      <strong className="text-xl mt-4 mb-2">3. Data Security:</strong>
      <br></br>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, no method of
        transmission over the internet or electronic storage is completely
        secure, and we cannot guarantee absolute security.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">4. Your Rights:</strong>
      <br></br>
      <p>
        You have the right to access, update, or delete your personal
        information. You may also opt-out of certain data processing activities,
        such as marketing communications. To exercise these rights, please
        contact us.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">
        5. Updates to this Privacy Policy:
      </strong>
      <br></br>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. We will notify you of any
        material changes by posting the updated Privacy Policy on our website.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">6. Contact Us:</strong>
      <br></br>
      <p>
        If you have any questions or concerns about our Privacy Policy or our
        practices regarding your personal information, please contact us at{" "}
        <a href="mailto:privacy@turbolance.com">privacy@turbolance.com</a>.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">Conclusion:</strong>
      <br></br>
      <p>
        TurboLance is committed to protecting your privacy and ensuring the
        security of your personal information. By using our website, you consent
        to the collection and use of your information as outlined in this
        Privacy Policy.
      </p>
      <br></br>
    </>
  ),
  Accessibility: (
    <>
      <strong className="text-2xl font-bold">
        Accessibility Statement for TurboLance:
      </strong>
      <p>
        Welcome to TurboLance. We are committed to ensuring digital
        accessibility for individuals with disabilities. We strive to adhere to
        the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards
        to provide an inclusive experience for all users.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">1. Technologies Utilized:</strong>
      <br></br>
      <p>
        TurboLance employs modern web technologies, including React and Tailwind
        CSS, to enhance user experience. These technologies are implemented with
        accessibility in mind to ensure usability and functionality for all
        users.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">2. Accessibility Features:</strong>
      <br></br>
      <p>We have integrated several accessibility features into TurboLance:</p>
      <br></br>
      <ul className="list-disc ml-5">
        <li>
          <strong>Keyboard Navigation:</strong> Our website can be navigated
          easily using keyboard shortcuts, ensuring users who rely on keyboard
          input can access all features.
        </li>
        <li>
          <strong>Screen Reader Compatibility:</strong> TurboLance is compatible
          with popular screen reader software, enabling users with visual
          impairments to access content effectively.
        </li>
        <li>
          <strong>High Contrast Mode:</strong> Users have the option to switch
          to a high contrast mode for improved readability and visibility.
        </li>
        <li>
          <strong>Alt Text for Images:</strong> All images on TurboLance are
          accompanied by descriptive alt text, allowing screen readers to convey
          their content to users who are visually impaired.
        </li>
        <li>
          <strong>Semantic HTML:</strong> We utilize semantic HTML markup to
          enhance the structure and accessibility of our web pages.
        </li>
      </ul>
      <br></br>

      <strong className="text-xl mt-4 mb-2">3. Ongoing Improvement:</strong>
      <br></br>
      <p>
        We are continually working to improve the accessibility of TurboLance.
        Our development team regularly conducts accessibility audits and
        usability testing to identify and address any accessibility barriers.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">4. Feedback:</strong>
      <br></br>
      <p>
        Your feedback is valuable to us as we strive to improve accessibility on
        TurboLance. If you encounter any accessibility issues or have
        suggestions for improvement, please contact us at{" "}
        <a href="mailto:contact@turbolance.com">contact@turbolance.com</a>.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">Conclusion:</strong>
      <br></br>
      <p>
        TurboLance is dedicated to providing an accessible and inclusive
        platform for freelancers and clients alike. Through our commitment to
        accessibility and ongoing improvement efforts, we aim to create a
        welcoming environment where all users can participate equally. Thank you
        for choosing TurboLance.
      </p>
      <br></br>
    </>
  ),
  TermsOfUse: (
    <>
      <strong className="text-2xl font-bold">Terms of Use:</strong>
      <p>
        Welcome to TurboLance. These Terms of Use govern your access to and use
        of TurboLance.com, along with any other websites and apps we own or
        operate. By using our site, whether as a registered user or an
        unregistered visitor, you agree to these terms.
      </p>
      <br></br>

      <strong className="text-xl mt-4 mb-2">
        1. Licenses and Third-Party Content
      </strong>
      <br></br>
      <strong className="text-xl mt-3 mb-1">
        1.1 Limited License to Use Our Services
      </strong>
      <p>
        We grant you a limited license to access and use our services, subject
        to your compliance with these Terms of Use and our other Terms of
        Service. While we strive to maintain the availability of our services,
        we cannot guarantee uninterrupted access and reserve the right to
        discontinue any feature or service without notice.
      </p>
      <br></br>

      <strong className="text-xl mt-3 mb-1">1.2 Termination of License</strong>
      <p>
        We reserve the right to terminate your license to use our services at
        any time, particularly if you violate these Terms of Use or any other
        part of our Terms of Service. Upon termination, you must cease using our
        services immediately.
      </p>
      <br></br>

      <strong className="text-xl mt-3 mb-1">
        1.3 Intellectual Property Rights
      </strong>
      <p>
        Our trademarks, copyrights, patents, and other intellectual property
        rights are reserved. You may not use any of TurboLance's intellectual
        property without our express permission. This includes our logos, names,
        and any trademarks registered in various jurisdictions.
      </p>
      <br></br>

      <strong className="text-xl mt-3 mb-1">1.4 User-Generated Content</strong>
      <strong className="text-lg mt-2 mb-1">
        1.4.1 Responsibility for Your Content
      </strong>
      <p>
        You are solely responsible for any content you post on TurboLance. If
        your content results in legal action against us, you agree to indemnify
        us for any associated legal fees and expenses. When posting content,
        ensure that:
      </p>
      <br></br>
      <ul className="list-disc ml-5">
        <li>You have the right to post it.</li>
        <li>It is legal.</li>
        <li>
          It does not infringe upon anyone's rights, including intellectual
          property rights.
        </li>
      </ul>
      <br></br>
      <p>
        You acknowledge that the content poster is liable for any harm caused by
        their content, not TurboLance. You agree to defend and indemnify us, our
        partners, employees, and representatives against any legal or
        governmental actions arising from your content.
      </p>
      <br></br>
    </>
  ),
};

const Documentation = () => {
  const [activeDoc, setActiveDoc] = useState("TermsOfService");

  return (
    <>
      <nav className="pl-5 sm:pl-20 bg-white bottom-5 border-b-2">
        <Link to="/">
          <img src={img} className="w-32 sm:w-52"></img>
        </Link>
      </nav>
      <div className="bg-white h-full w-full">
        <div className="flex flex-col sm:flex-row py-5 sm:py-10 px-5 sm:px-10">
          <div className="flex flex-col w-full sm:w-1/4 mx-2 mb-5 sm:mb-0">
            {Object.keys(documents).map((doc) => (
              <button
                key={doc}
                className={`p-2 text-left pl-6 ${
                  activeDoc === doc
                    ? "text-blue-600 border-l-4 font-semibold border-blue-600"
                    : "bg-white font-semibold text-black"
                }`}
                onClick={() => setActiveDoc(doc)}
              >
                {doc.replace(/([A-Z])/g, " $1").trim()}
              </button>
            ))}
          </div>
          <div className="w-full sm:w-3/4 p-5 sm:p-10 border-2 rounded-2xl mr-0 sm:mr-10">
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-800">
              {activeDoc.replace(/([A-Z])/g, " $1").trim()}
            </h1>
            <p className="text-xs sm:text-sm py-2">
              <i>Effective March 13,2024</i>
            </p>
            <hr className="bg-blue-500 h-1"></hr>
            <p className="pt-5">{documents[activeDoc]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;