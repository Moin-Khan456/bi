import React, { useState } from "react";
import { Pagination } from "antd";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Head from "next/head";

const App = ({ totalPages, itemsPerPage, setCurrentPage, currentPage }) => {
  const [load, setLoad] = useState(false);
  const router = useRouter();

  const handlePaginationChange = (page, pageSize) => {
    window.scrollTo(0, 0);
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1500);
    setCurrentPage(page);
    router.push("/blog/" + page);
  };

  return (
    <>
      <div className="flex text-primaryTx justify-center py-12">
        {load ? (
          <div className={`position-loader first-component`}>
            <video
              className="absolute top-0 left-0 w-full h-full object-contain scale-50 z-0 xs:rounded-b-3xl lg:rounded-r-3xl mobileContactVideo"
              muted
              loop
              autoPlay={true}
              controls={false}
            >
              <source
                src="https://braininventory.s3.us-east-2.amazonaws.com/videos/biloader.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        ) : null}
        <div className="text-primaryTx">
          <Pagination
            defaultCurrent={currentPage}
            total={totalPages}
            pageSize={itemsPerPage}
            showSizeChanger={false}
            nextIcon={
              <MdKeyboardArrowRight className="text-primaryBg bg-primaryTx w-[2rem] h-[2rem] p-2 rounded-full" />
            }
            prevIcon={
              <MdKeyboardArrowLeft className="text-primaryBg bg-primaryTx w-[2rem] h-[2rem] p-2 rounded-full" />
            }
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </>
  );
};

export default App;
