import React from "react";

const ShoppingDetail = () => {
  return (
    <div>
      {/* Name */}
      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text text-md">Your Name</span>
        </div>
        <input
          type="text"
          placeholder="Type Your Name Here"
          className="input input-bordered w-full"
        />
      </label>
      {/* Mobile Number */}
      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text text-md">Mobile Number</span>
        </div>
        <input
          type="text"
          placeholder="Type Your Phone Number"
          className="input input-bordered w-full"
        />
      </label>
      {/* Email */}
      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text text-md">Email</span>
        </div>
        <input
          type="text"
          placeholder="Type Your Email"
          className="input input-bordered w-full"
        />
      </label>
      {/* Address */}
      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text text-md">Address</span>
        </div>
        <input
          type="text"
          placeholder="Type Your Address"
          className="input input-bordered w-full"
        />
      </label>
      {/* Distric */}
      <div className="flex flex-row">
        <label className="form-control w-full max-w-xs me-2">
          <div className="label">
            <span className="label-text text-md">Distric / State</span>
          </div>
          <input
            type="text"
            placeholder="Type Your Distric/State"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        {/* Country */}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-md">Country</span>
          </div>
          <input
            type="text"
            placeholder="Type Your Country"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
      {/* Delivery Note */}
      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text text-md">Delivery Note</span>
        </div>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Insert your delivery/order note"
        ></textarea>
      </label>
      <div>
        <div className="form-control">
          <label className="label cursor-pointer flex flex-row justify-start">
            <input type="checkbox" defaultChecked className="checkbox me-2" />
            <span className="label-text">My shipping address and billing address are the same</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShoppingDetail;
