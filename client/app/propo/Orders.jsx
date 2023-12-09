"use client"
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../data/data";
import Navbar from "../components/header/Navbar";
import { VscActivateBreakpoints } from "react-icons/vsc";

const Orders = () => {
  const [orders, setOrders] = useState(data);

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
    <div className="min-h-screen text-black">
      <Navbar />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span className="text-white">Proposal Name</span>
            <span className="sm:text-left text-right text-white">Status</span>
            <span className="hidden md:grid text-white">No. of Votes</span>
            <span className="hidden sm:grid text-white">Comment</span>
          </div>
          <ul>
          {orders.map((order, id) => (
          <li
            key={id} 
            className="hover:bg-[#1c1c1c] rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 items-center justify-between cursor-pointer"
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
                <div className="text-gray-600 sm:text-left text-right">
                  <select
                    value={order.selectedStatus}
                    onChange={(e) => {
                      const updatedOrders = orders.map((order) => {
                        if (order.id === e.target.id) {
                          return { ...order, selectedStatus: e.target.value };
                        } else {
                          return order;
                        }
                      });
                      setOrders(updatedOrders);

                      setOrderStatus(e.target.value, e.target.id);
                    }}
                    id={order.id}
                    className={
                      order.selectedStatus === "On Hold"
                        ? "bg-[#1c1c1c] p-2 rounded-lg text-gray-300"
                        : order.selectedStatus === "Processing"
                          ? "p-2 bg-[#1c1c1c] rounded-lg text-gray-300"
                          : order.selectedStatus === "Completed"
                            ? "bg-[#1c1c1c] p-2 rounded-lg text-gray-300"
                            : "bg-[#1c1c1c] p-2 rounded-lg text-gray-300"
                    }
                  >
                    <option value="Ongoing">Ongoing</option>
                    <option value="Finished">Finished</option>
                  </select>
                </div>
                
                <p className="hidden md:flex text-gray-300">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <div className="sm:text-left text-right">
                   <input
                     type="text"
                     value={order.comment || ""}
                     onChange={(e) => handleCommentChange(e, order.id)}
                     placeholder="Add a comment"
                     className="p-2 rounded-lg w-30"
                   />
                  </div> 
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;