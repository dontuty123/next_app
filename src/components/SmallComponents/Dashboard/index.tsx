//@ts-nocheck

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { ICols } from "@/types/dashboard.type";
import Pagination from "../Pagination";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { TUser } from "@/types/user.type";
import { deleteUser } from "@/lib/redux/user.slice";

interface IDashboard {
  curCols: ICols[];
  curRows: any;
  title: string;
  rowLimit?: number;
}

export default function Dashboard({
  curRows,
  curCols,
  title,
  rowLimit = 6,
}: IDashboard) {
  const [pages, setPages] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [curUsers, setCurUsers] = useState<TUser[]>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const paginateUsers = curRows.slice(0, rowLimit);
    setPages(Math.ceil(curRows.length / rowLimit));
    setCurUsers(paginateUsers);
  }, [curRows, rowLimit]);

  useEffect(() => {
    const firstIndex = (curPage - 1) * rowLimit;
    let secIndex = curPage * rowLimit;
    if (secIndex > curRows?.length) {
      secIndex == curRows?.length;
    }
    const paginateUsers = curRows?.slice(firstIndex, secIndex);
    setCurUsers(paginateUsers);
  }, [curPage, curRows, rowLimit]);

  const handlePrevPage = () => {
    if (curPage == 1) {
      setCurPage(1);
    } else {
      setCurPage(curPage - 1);
    }
  };

  const handleNextPage = () => {
    if (curPage == pages) {
    } else {
      setCurPage(curPage + 1);
    }
  };

  const handleDeleteUser = (id: string | undefined) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <div className="overflow-auto w-full flex-nowrap rounded-2xl shadow-md bg-white dark:bg-gray-900 dark:text-white ">
        <div className="border-b p-4">
          <span className="text-md font-semibold">{title}</span>
        </div>
        <div className="p-4 border-b w-full">
          <div className="flex gap-4 text-left flex-nowrap">
            {curCols?.map((item, index) => (
              <div
                className="font-semibold hover:border-x-2"
                key={index}
                style={item.width ? { width: item.width } : { width: "200px" }}
              >
                {item.headerName}
              </div>
            ))}
            <div className="font-semibold hover:border-x-2 w-48">Action</div>
          </div>
        </div>
        {curUsers?.map((itemrow, index) => (
          <div
            className="p-4 border-b gap-4 w-full hover:bg-gray-200/40 overflow-auto "
            key={index}
          >
            <div className="flex gap-4 text-left flex-nowrap">
              {curCols?.map((itemcol, index) => (
                <div
                  className="font-normal truncate"
                  key={index}
                  style={
                    itemcol.width
                      ? { width: itemcol.width }
                      : { width: "200px" }
                  }
                >
                  {itemrow[itemcol.field]}
                </div>
              ))}
              <Link href={`/edituser/${itemrow.id}`}>
                <Button
                  className="col-span-1 bg-transparent hover:bg-blue-500 dark:text-white text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                  contentButton="Edit"
                />
              </Link>
              <Button
                className="col-span-1 bg-transparent hover:bg-rose-500 dark:text-white text-rose-700 font-semibold hover:text-white px-4 border border-rose-500 hover:border-transparent rounded"
                onClick={() => handleDeleteUser(itemrow?.id)}
                contentButton="Delete"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Pagination
          curPage={curPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          pages={pages}
          setCurPage={setCurPage}
        />
      </div>
    </div>
  );
}
