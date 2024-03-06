import React from "react";

export default function AdminDashboardHome() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="uppercase text-xl font-semibold">Total Sales</h3>
          <h2 className="font-bold text-2xl">$1000</h2>
        </div>
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="uppercase text-xl font-semibold">Total Orders</h3>
          <h2 className="font-bold text-2xl">256</h2>
        </div>
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="uppercase text-xl font-semibold">Total Customers</h3>
          <h2 className="font-bold text-2xl">100</h2>
        </div>
      </div>
    </div>
  );
}
