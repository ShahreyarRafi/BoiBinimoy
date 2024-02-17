import React from "react";

export default function WriterCard({ item }) {
  return (
    <div className="space-y-3">
      <img
        src={item.profile}
        className="w-24 h-24 border ring-4 ring-teal-300 p-1 rounded-full mx-auto"
        alt="writer profile"
      />
      <h3 className="text-center font-semibold">{item.writer_name}</h3>
    </div>
  );
}
