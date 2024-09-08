import React, { useState } from "react";
import paypal from "../assets/paypal.svg";
import analytics from "../assets/analytics.svg";
import flow from "../assets/flow.svg";
import feed from "../assets/feed.svg";
import star from "../assets/star.svg";

const Functionality: React.FC = () => {
  const [accentColor, setAccentColor] = useState("#FF9898");
  const [textColor, setTextColor] = useState("#571010");
  const [backgroundColor, setBackgroundColor] = useState("#FFEAEA");
  const [htmlLink, setHtmlLink] = useState("");

  const handleColorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  return (
    <div className="pt-8 pb-20 pl-24 bg-gray-50 ,mt-4  ">
      <h1 className="text-2xl font-bold mb-8 ">
        Discover the Heart of Our Functionality
      </h1>

      <div className="grid grid-cols-[27%_34%_27%] gap-6">
        {/* Custom Tracking Page Styles */}
        <div className="bg-white p-6 rounded-lg shadow-all-custom border border-gray-200">
          <h2 className="text-sm font-semibold mb-4 text-[#4A4A4A] pr-2">
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </h2>
          <p className="mt-6 text-[#4A4A4A] text-[13px] font-normal pr-14 ">
            Immerse your customers in a branded experience by personalizing the
            colors on your tracking page.
          </p>
          <div className="space-y-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Accent Color
              </label>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={accentColor}
                  onChange={(e) => handleColorChange(e, setAccentColor)}
                  className="mt-1 pl-2 block w-3/4 rounded-md border border-slate-500  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
                />
                <div
                  className="w-12 h-8 mt-1 rounded-lg"
                  style={{ backgroundColor: accentColor }}
                ></div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Text Color
              </label>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => handleColorChange(e, setTextColor)}
                  className="pl-2 block w-3/4 rounded-md border border-slate-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <div
                  className="w-12 h-8 mt-1 rounded-lg"
                  style={{ backgroundColor: textColor }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Background Color
              </label>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => handleColorChange(e, setBackgroundColor)}
                  className="pl-2 block w-3/4 rounded-md border border-slate-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <div
                  className="w-12 h-8 mt-1 rounded-lg"
                  style={{ backgroundColor: backgroundColor }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-8 space-x-2">
            <button className="px-4 py-2 text-xs font-medium border border-gray-200 bg-white text-black rounded-lg hover:bg-gray-100 shadow-all-custom">
              Preview
            </button>
            <button className=" px-4 py-2 text-xs font-medium border border-black bg-[#303030] text-white rounded-lg hover:bg-gray-700 shadow-all-custom">
              Apply Colors
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          {/* Exclusive Onboarding Support */}
          <div className="bg-white p-6 rounded-lg shadow-all-custom border border-gray-200">
            <h2 className="text-sm font-semibold  text-[#4A4A4A]">
              Exclusive Onboarding Support for High-Volume Brands
            </h2>
            <p className="mt-2 text-[#4A4A4A] text-[13px] font-normal pr-20">
              Unlock personalized guidance! Book a one-on-one onboarding call to
              streamline your experience.
            </p>
            <button className="mt-4 px-4 py-2 text-xs font-medium border border-black bg-[#303030] text-white rounded-lg hover:bg-gray-700 shadow-all-custom">
              Schedule A Call
            </button>
          </div>
          {/* Explore Our Integrated Ecosystem */}
          <div className="bg-white p-6 rounded-lg shadow-all-custom border border-gray-200 col-span-full md:col-span-2 lg:col-span-3">
            <h2 className="text-sm font-semibold mb-4 text-[#4A4A4A]">
              Explore Our Integrated Ecosystem
            </h2>
            <p className="mb-2 text-[#4A4A4A] text-[13px] font-normal pr-10">
              Discover a variety of popular integrations tailored for your
              convenience.
            </p>
            <div className="flex space-x-6 mt-6 mb-4">
              <img src={paypal} alt="paypal" className="w-8 h-8" />
              <img src={star} alt="star" className="w-8 h-8 " />
              <img src={feed} alt="feed" className="w-8 h-8 " />
              <img src={analytics} alt="analytics" className="w-8 h-8 " />
              <img src={flow} alt="flow"  className="w-8 h-8 " />
            </div>
            <button className="mt-2 px-4 py-2 text-xs font-medium border border-black bg-[#303030] text-white rounded-lg hover:bg-gray-700 shadow-all-custom">
              Explore Integrations
            </button>
          </div>
        </div>

        {/* Seamlessly Integrate Custom HTML Elements */}
        <div className="bg-white p-6 rounded-lg shadow-all-custom border border-gray-200">
          <h2 className="text-sm font-semibold mb-4 text-[#4A4A4A] pr-20">
            Seamlessly Integrate Custom HTML Elements
          </h2>
          <p className="mb-4 text-[#4A4A4A] text-[13px] font-normal pr-20">
            Unleash creativity with our Custom HTML feature. Add links, custom
            messages, or any HTML content to elevate the tracking page
            experience for your customers.
          </p>
          <div className="mb-4">
            <label className="block text-sm font-[450] text-[#303030]">
              HTML Link
            </label>
            <textarea
              value={htmlLink}
              onChange={(e) => setHtmlLink(e.target.value)}
              placeholder="  Value"
              className="mt-2 h-40 block w-full rounded-md border border-gray-300 shadow-sm resize-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none" 
            />
          </div>
          <div className="mt-8 space-x-2">
            <button className="px-4 py-2 text-xs font-medium border border-gray-200 bg-white text-black rounded-lg hover:bg-gray-100 shadow-all-custom">
              Preview
            </button>
            <button className=" px-4 py-2 text-xs font-medium border border-black bg-[#303030] text-white rounded-lg hover:bg-gray-700 shadow-all-custom">
              Apply Colors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
