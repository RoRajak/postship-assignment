import arrow from "../assets/arroeDown.svg";
import search from "../assets/search.svg";
import account from "../assets/account.svg";
import setting from "../assets/setting.svg";
import danger from "../assets/danger.svg";
import info from "../assets/info.svg";

function Navhero() {
  return (
    <div className="h-[448px] bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-24 bg-white shadow-md">
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-black font-semibold font-inter "
          >
            <span className="border-b-2 border-blue-500 pb-1">Hom</span>e
          </a>
          <a href="#" className="text-black font-semibold font-inter">
            Orders
          </a>
          <a href="#" className="text-black font-semibold font-inter">
            Integrations
          </a>
          <a href="#" className="text-black font-semibold inline-flex gap-x-2 font-inter">
            Tracking Page{" "}
            <img src={arrow} alt="icon" className="self-center size-3" />
          </a>
          <a href="#" className="text-black font-semibold font-inter">
            Partner with Us
          </a>
        </div>
        <div className="flex space-x-6">
          <div className="inline-flex border-b-2 border-gray-300 px-0.5 py-1 rounded gap-x-2">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-32 font-inter"
            />
          </div>
          <div className="inline-flex items-center text-black">
            <img src={account} alt="search" className="size-4" />
            <p className="ml-2  font-semibold font-inter">Accounts</p>
          </div>
          <div className="inline-flex items-center gap-x-2 text-black">
            <img src={setting} alt="search" className="size-4" />
            <p className="ml-2  font-semibold font-inter">Settings</p>
          </div>
        </div>
      </nav>

      {/* Welcome Message */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-800 ml-24 font-inter">
          Welcome, John Mathew!!
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl ml-24 ">
        {/* Card 1 */}
        <div className="bg-white  p-6 rounded-lg shadow-all-custom border border-gray-300">
          <h3 className="text-sm font-semibold text-gray-900 font-inter">
            Order Sync Successful!
          </h3>
          <p className="text-gray-600 mt-2 font-medium text-[13px] font-inter">
            Your order details from the last 30 days have been successfully
            synced. Check them out now!
          </p>
          <button className="mt-16 px-4 py-2 text-xs font-medium bg-[#303030] text-white rounded-md hover:bg-gray-700 shadow-all-custom font-inter">
            Explore Your Orders
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-yellow-100 border border-yellow-200 p-6 rounded-lg shadow-all-custom">
          <h3 className="text-sm font-semibold text-[#5E4200] inline-flex gap-x-2 font-inter">
            <img src={danger} alt="danger" />
            Customize Customer Notification
          </h3>
          <p className="text-[#5E4200] mt-2 font-mmtedium font-inter text-[13px]">
            Tailor Your Email Experience: Set the Sender Email and Choose
            Notification Triggers
          </p>
          <button className="mt-14 px-4 py-2 text-xs font-medium bg-[#303030] text-white rounded-md hover:bg-gray-700 shadow-all-custom font-inter">
            Configure Notifications
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-100 border border-blue-200 p-6 rounded-lg text-base font-semibold shadow-all-custom">
          <h3 className="inline-flex gap-x-2 text-black text-sm font-inter">
            <img src={info} alt="danger" />
            Your Tracking Link has been generated
          </h3>
          <p className="text-gray-600 mt-2 font-mmtedium text-[13px] font-inter pr-10">
            Include the{" "}
            <a
              href="https://50d72d-5.myshopify.com/tools/tracking."
              className="text-blue-700"
              target="_blank"
            >
              Link
            </a>{" "}
            to Your Store's Navigation Menu.
          </p>
          <div className="mt-12 space-x-2">
            <button className="px-4 py-2 text-xs font-medium bg-white text-black rounded-md hover:bg-gray-100 shadow-all-custom font-inter">
            Copy Link
            </button>
            <button className=" px-4 py-2 text-xs font-medium bg-[#303030] text-white rounded-md hover:bg-gray-700 shadow-all-custom font-inter">
            Go To Navigation Menu
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navhero;
