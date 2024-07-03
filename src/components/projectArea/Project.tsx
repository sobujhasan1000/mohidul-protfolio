"use client";
import Image from "next/image";
import webChemistry from "../../../public/screenShot web/chemisty shot.png";
import webLaptops from "../../../public/screenShot web/laptops web screenshot.png";
import { useState } from "react";

const Project = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenlaptop, setModalOpenlaptop] = useState(false);

  return (
    <div className="py-12 ">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        MY Latest Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Dating site
          </h2>
          <div className="overflow-hidden rounded-lg h-64">
            <div className="relative group h-full">
              <Image
                src={webChemistry}
                alt="Project 1"
                className="w-full h-auto transition-transform duration-[10000ms] group-hover:translate-y-[-75%]"
              />
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <a
              href="https://github.com/sobujhasan1000/chemistry-corner"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
              onClick={() => setModalOpen(true)}
            >
              project Details
            </button>
            <a
              href="https://chemistry-corner-client.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Live Link
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            eCommerce site
          </h2>
          <div className="overflow-hidden rounded-lg h-64">
            <div className="relative group h-full">
              <Image
                src={webLaptops}
                alt="Project 2"
                className="w-full h-auto transition-transform duration-[10000ms] group-hover:translate-y-[-75%]"
              />
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <a
              href="https://github.com/sobujhasan1000/L2-assingment-eight"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
              onClick={() => setModalOpenlaptop(true)}
            >
              project Details
            </button>
            <a
              href="https://assingment-eight-ten.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center my-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-full overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Chemistry Corner</strong> is an online dating site
                developed using the MERN stack (MongoDB, Express.js, React.js,
                Node.js). The platform provides features aimed at connecting
                users with potential partners and fostering engaging
                interactions.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>User Registration and Authentication:</strong> Chemistry
                Corner allows new users to sign up using their email and
                password, ensuring a secure entry point. Social authentication
                with providers like Google and Facebook is also available.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Profile Management:</strong> Users can create and update
                their profiles with personal details, including name, age,
                gender, country, interests, and a profile picture. The platform
                provides users with control over their profile visibility.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Partner Search:</strong> Chemistry Corner offers robust
                search capabilities. Users can search for potential partners
                using filters such as name, country, gender, age range, and
                interests. Advanced search criteria refine results based on
                additional preferences and compatibility factors.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Communication:</strong> Real-time chat functionality
                enables users to communicate directly with their matches,
                fostering immediate connections. Message notifications ensure
                users are alerted to new messages and chat requests.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>User Interactions:</strong> Users can engage with each
                other by liking profiles, and mutual likes result in matches.
                Profile visit insights show users who has viewed their profile,
                and a favorites list allows users to bookmark profiles they are
                particularly interested in.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Blog Creation:</strong> Chemistry Corner encourages
                user-generated content through its blogging feature. Users can
                create and share blog posts on various topics, and other users
                can engage with these posts by reading, liking, and commenting.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Premium Membership:</strong> The platform offers premium
                membership plans with additional features. Secure payment
                gateway integration facilitates the processing of membership
                fees. Premium members enjoy benefits like enhanced search
                filters, unlimited messaging, and profile boosts.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Feedback System:</strong> Users can provide feedback on
                their experiences and report any issues they encounter. This
                feedback is reviewed by admins to continually improve the
                platform and address user concerns.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Security and Privacy:</strong> Chemistry Corner
                prioritizes user security and privacy. User data is encrypted to
                protect personal information. The platform also includes
                features for reporting and blocking inappropriate profiles to
                maintain a safe environment.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Technical Stack:</strong> The frontend is built using
                React.js, complemented by Next.js for server-side rendering and
                SEO optimization. Tailwind CSS and DaisyUI are utilized for
                styling and UI components. The backend is developed with Node.js
                and Express.js, with MongoDB handling data storage. Real-time
                communication is powered by Socket.io, and payment processing is
                managed through Stripe or PayPal. Authentication is secured
                using JWT (JSON Web Tokens).
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>User Journey:</strong> Users start by signing up and
                setting up their profiles. They search for potential partners
                using various filters and initiate communication through
                real-time chat. Users can share their thoughts via blog posts
                and upgrade to premium membership for additional features.
                Feedback from users helps continuously refine and enhance the
                platform.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                Chemistry Corner aims to provide a secure, engaging, and
                user-friendly environment for individuals seeking meaningful
                connections. With a focus on personalization, interactivity, and
                premium features, the platform caters to a wide range of user
                preferences and ensures a satisfying online dating experience.
              </p>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition mt-4 modal-backdrop"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Modal laptops */}
      {isModalOpenlaptop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center my-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-full overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Project Overview: Laptops eCommerce Site
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-700">
                Laptops eCommerce Site is an online platform developed using
                Next.js, TypeScript, and Tailwind CSS, aimed at providing users
                with a seamless shopping experience for the latest laptops. The
                site is designed to help users find the best laptops tailored to
                their needs, featuring various functionalities to enhance the
                shopping experience.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Next.js and TypeScript:</strong> The use of Next.js
                ensures that the site is fast, efficient, and SEO-friendly, with
                server-side rendering enhancing performance and user experience.
                TypeScript adds type safety, making the development process more
                robust and reducing the likelihood of runtime errors.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Tailwind CSS:</strong> Tailwind CSS is utilized for
                styling the site, allowing for a highly customizable and
                responsive design. The utility-first approach of Tailwind CSS
                ensures a consistent and clean layout, providing an attractive
                and user-friendly interface.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Product Discovery:</strong> Users can browse through a
                wide selection of the latest laptops available in the market.
                The site offers detailed product descriptions, specifications,
                and images, helping users make informed decisions.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Flash Sale Offers: </strong> The site features exclusive
                flash sale offers, providing users with the opportunity to
                purchase laptops at discounted prices. These limited-time deals
                are prominently displayed, encouraging quick purchases and
                providing excellent value for money.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Search and Filter: </strong> Users can easily find
                laptops that match their preferences using advanced search and
                filter options. The site allows users to search by brand,
                ensuring they can find products from their favorite
                manufacturers. Additionally, price filters enable users to set
                their budget and find laptops within their price range, making
                the shopping experience more tailored and efficient.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>User Experience: </strong> The combination of Next.js,
                TypeScript, and Tailwind CSS ensures that the Laptops eCommerce
                Site is not only visually appealing but also highly functional
                and efficient. Users can enjoy a smooth, fast, and responsive
                browsing experience, with easy navigation and a focus on
                usability.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Conclusion: </strong> The Laptops eCommerce Site aims to
                provide users with a comprehensive and enjoyable shopping
                experience. With the latest laptops, exciting flash sales, and
                advanced search and filter options, the platform caters to a
                wide range of user needs and preferences, ensuring that users
                can find the perfect laptop for their requirements.
              </p>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition mt-4 modal-backdrop"
              onClick={() => setModalOpenlaptop(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
