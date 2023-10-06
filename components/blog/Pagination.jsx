import React from 'react';
import { Pagination } from 'antd';
import {BsFillFastForwardFill} from "react-icons/bs"
import {FaBackward} from "react-icons/fa"
const App = ({totalPages, itemsPerPage, setCurrentPage}) => {
  
  const handlePaginationChange = (page, pageSize) => {
    // You can access the selected page and page size here
    setCurrentPage(page);
    window.scrollTo(0, 550)
    console.log(`Page changed to ${page}, Page Size: ${pageSize}`);
    
    // You can perform any action or update state based on the user's interaction
    // For example, you can make an API request to fetch data for the selected page.
  };

  return (
    <div className='flex justify-center py-12'>
      <Pagination
        defaultCurrent={1}
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