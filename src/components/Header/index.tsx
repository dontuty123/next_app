/** @format */

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-700 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold">NextJS App</h1>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-400 transition">
            User
          </Link>
          <Link href="/products" className="hover:text-blue-400 transition">
            Product
          </Link>
        </div>
      </div>
    </div>
  );
}
