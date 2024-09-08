import React from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";
import calender from "../assets/calender.svg";
import Package from "../assets/package.svg";
import eye from "../assets/View.svg";

const Dashboard: React.FC = () => {
  const shipmentData = [
    { name: "Intransit", value: 70, color: "#956F00" },
    { name: "Pending", value: 90, color: "#E5A500" },
    { name: "Delivered", value: 80, color: "#FFC879" },
    { name: "Out for delivery", value: 50, color: "#FFDDB6" },
    { name: "Exception", value: 100, color: "#5E4200" },
  ];
  const shipmentData1 = [
    { name: "Exception", value: 100, color: "#5E4200" },
    { name: "Intransit", value: 70, color: "#956F00" },
    { name: "Pending", value: 90, color: "#E5A500" },
    { name: "Delivered", value: 80, color: "#FFC879" },
    { name: "Out for delivery", value: 50, color: "#FFDDB6" },
  ];
  const shipmentData2 = [
    "Delivered",
    "Out for delivery",
    "Intransit",
    "Pending",
    "Exception",
  ];

  const timelineOptions = [
    "Lifetime",
    "Last Week",
    "Last Month",
    "Last Year",
    "Customize Time Line",
  ];

  return (
    <div className="bg-[#fff7ee] pt-6 pb-20 pl-24 rounded-lg shadow-lg space-y-6 ">
      <h1 className="text-2xl font-bold mb-4 font-inter">
        Instant Dive into Your Performance Metrics
      </h1>

      <div className="flex space-x-2 mb-6">
        {timelineOptions.map((option, index) => (
          <button
            key={index}
            className={`px-3 py-2 rounded font-semibold text-sm inline-flex items-center gap-x-2 font-inter ${
              index === 0
                ? "bg-blue-100 text-black border border-blue-500"
                : "bg-gray-100 text-black"
            }`}
          >
            {option}
            {index === 4 && <img src={calender} alt="calender" />}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[32%_15%_38%] gap-6">
        <div className=" bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-all-custom">
          <div className='flex justify-between mb-2 p-3">'>
            <h2 className="text-sm font-[650] font-inter"> Shipment Updates</h2>
            <h3 className="text-sm font-[650] text-slate-600 font-inter">
              Total Orders:394
            </h3>
          </div>
          <div className="flex w-full gap-x-2  mt-6 overflow-hidden">
            {shipmentData2.map((item, index) => (
              <button
                key={index}
                className={`px-3 py-2 rounded min-w-fit text-[#4A4A4A] border border-[#E3E3E3] text-[13px] font-[650] font-inter ${
                  index === 0 ? "bg-[#f8e2cb]" : "bg-[#F1F1F1] "
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div
            className="relative top-1/2 left-1/2 translate-x-[-26%] translate-y-[-78%]"
            style={{ width: "100%", height: "200px" }}
          >
            <PieChart width={200} height={200}>
              <Pie
                data={shipmentData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {shipmentData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    values={index === 0 ? entry.value.toString() : undefined}
                    className="font-inter"
                  />
                ))}
                <LabelList
                  dataKey="value"
                  position="outside"
                  content={({index }) =>
                    index === 2 ? ( // Only show label for the slice at index 2
                      <text
                      x={45}
                      y={105}
                        // Adjust this value to move the label above the slice
                        fill="#000"
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="font-inter text-sm"
                      >
                        40
                      </text>
                    ) : null
                  }
                />
              </Pie>
            </PieChart>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {shipmentData1.map((item, index) => (
              <div key={index} className="flex items-center text-sm mb-1">
                <div
                  className="w-5 h-2.5 rounded-lg mr-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="font-inter text-sm font-[450]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className=" bg-[#956F00] text-white p-4 rounded-lg flex flex-col mx-auto justify-between shadow-all-custom border border-[#956F00]">
          <div>
            <h2 className="text-sm font-[650] text-white mb-2 pl-2 pr-6 font-inter">
              Star Facts about your orders!!!
            </h2>
            <p className="mt-2 text-[13px] font-[450] text-white pl-2 pr-6 font-inter">
              There are 8 shipments that have been in out for delivery for more
              than 3 days.
            </p>
            <p className="mt-4 text-[13px] font-[450] text-wgite pl-2 pr-6 font-inter">
              There are 5 shipments in exception right now.
            </p>
            <p className="mt-4 text-[13px] font-[450] text-white pl-2 pr-6 font-inter">
              The maximum chargebacks are from Miami.
            </p>
          </div>

          <button className="ml-2 px-1 py-2 text-xs font-medium bg-white text-black rounded-md hover:bg-gray-100 shadow-all-custom w-[150px] font-inter">
            Check Orders Page
          </button>
        </div>

        <div className=" bg-gray-50 p-4 rounded-lg shadow-all-custom border border-gray-300">
          <h2 className="text-sm font-[650] text-[#4A4A4A] mb-4 font-inter">
            Tracking Page Views Vs Orders
          </h2>
          <p className="text-[13px] font-[450] text-[#4A4A4A] mb-4 font-inter">
            Understand user engagement patterns and optimize your tracking page
            for enhanced customer experiences.
          </p>
          <div className="space-y-8 mt-4">
            <div className="bg-[#FFEBD5] py-4 px-8 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-y-4">
                <span className="font-medium text-sm font-inter">Orders</span>
                <span className="text-4xl font-bold mr-2 font-inter">80</span>
              </div>

              <img src={Package} alt="package" className="size-12" />
            </div>
            <div className="bg-yellow-100 py-4 px-8 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-y-4">
                <span className="font-medium text-sm font-inter">
                  Tracking Page Views
                </span>
                <span className="text-4xl font-bold mr-2 font-inter">44</span>
              </div>

              <img src={eye} alt="package" className="size-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
