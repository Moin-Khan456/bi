import React, {useEffect, useState} from 'react';
import { Pagination } from 'antd';
import {BsFillFastForwardFill} from "react-icons/bs"
import {FaBackward} from "react-icons/fa"
import { useRouter } from 'next/router';
import Loader from "../../components/common/loader"
const App = ({totalPages, itemsPerPage, setCurrentPage, currentPage}) => {
  
  const [load, setLoad] = useState(false);
  const router = useRouter();
  const handlePaginationChange = (page, pageSize) => {
    window.scrollTo(0, 0)
    setCurrentPage(page);
    router.push("/blog/"+page); 
  };

  return (
    <div className='flex justify-center py-12'>
    { load ? <div className={`position-loader first-component`}>
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
      </div> : null }
      <Pagination
        defaultCurrent={currentPage}
        total={totalPages}
        pageSize={itemsPerPage}
        className="text-white"
        showSizeChanger={false}
        nextIcon={<BsFillFastForwardFill className='text-white bg-[#17008d] w-[2rem] h-[2rem] p-2 rounded-full'/>}
        prevIcon={<FaBackward className='text-white bg-[#17008d] w-[2rem] h-[2rem] p-2 rounded-full'/>}
        onChange={handlePaginationChange} // Attach the event handler
      />
    </div>
  );
};
export default App;