"use client"
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../data/data";
import Navbar from "../components/header/Navbar";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";

const page = () => {
    const [orders, setOrders] = useState(data);
    const proposalDeadline = new Date("2023-12-31");

  const setOrderStatus = (newStatus, orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      } else {
        return order;
      }
    });
    setOrders(updatedOrders);
  };

  const handleCommentChange = (event, orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, comment: event.target.value };
      } else {
        return order;
      }
    });
    setOrders(updatedOrders);
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-3 items-center justify-between cursor-pointer">
            <span className="text-white">Proposal Name</span>
            <span className="sm:text-left text-right text-white">Current Votes</span>
            <span className="hidden md:grid text-white">Join to Vote</span>
          </div>
          <ul>
            {orders.map((order, id) => (
              <li
                key={id}
                className="hover:bg-[#1c1c1c] rounded-lg my-3 p-2 grid md:grid-cols-3 sm:grid-cols-3 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <div className="p-3 rounded-lg">
                    <VscActivateBreakpoints className="text-green-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-300 font-bold">
                      {order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-300 text-sm">{order.name.first}</p>
                  </div>
                </div>
                
                <p className="hidden md:flex text-gray-300">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <div className="sm:text-left text-right">
                    {/* Enable the button only if the deadline hasn't been reached */}
                    {new Date() < proposalDeadline ? (
                      <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded flex items-center gap-2">
                        Join <FaPlus />
                      </button>
                    ) : (
                      <button className="bg-gray-500 text-gray-700 px-2 py-1 rounded" disabled>
                        Join <FaPlus />
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;