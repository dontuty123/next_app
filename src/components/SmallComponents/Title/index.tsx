/** @format */

import Link from "next/link";
import React from "react";
import Button from "../Button";

interface TitleType {
  title: string;
  isButton?: boolean;
  directLink?: string;
  contentButton?: string;
}

export default function Title({
  title,
  isButton = false,
  directLink,
  contentButton,
}: TitleType) {
  return (
    <div className="text-left text-md mb-0 py-6 w-full">
      <span className="uppercase text-xs text-gray-500">dashboard</span>
      <div className="flex justify-between">
        <h3 className="page-title text-4xl font-semibold">{title}</h3>
        {isButton && (
          <Link href={directLink ? directLink : ""}>
            <Button contentButton= {contentButton} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"/>
          </Link>
        )}
      </div>
    </div>
  );
}
