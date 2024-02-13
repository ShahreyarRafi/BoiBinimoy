import Link from "next/link";
import React from "react";

export default function Author() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h3>Shop bu Author</h3>
        <Link href="/">View All</Link>
      </div>

      <div></div>
    </div>
  );
}
