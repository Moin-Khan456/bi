import React, { useEffect, useState } from "react";
import data from "../../pages/posts/blog_dataset.json";

const BlogsTable = () => {
  const tableHead = [
    { label: "Id" },
    { label: "Title" },
    { label: "Description" },
  ];

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / pageSize);

  const fetchBlogsMetaData = async () => {
    try {
      const res = await fetch("/api/admin", {
        method: "GET",
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogsMetaData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-2 border-gray-300">
        <thead>
          <tr className="bg-base-blue-2">
            {tableHead?.map(({ label }) => {
              return (
                <th
                  key={label}
                  className="py-2 px-4 border border-gray-300 text-left"
                >
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(({ id, Title, description }) => {
            return (
              <tr key={id}>
                <td className="py-2 px-4 border border-gray-300">{id}</td>
                <td className="py-2 px-4 border border-gray-300">{Title}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-base-blue-2 hover:bg-[#6302DD58] text-white font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-base-blue-2 hover:bg-[#6302DD58] text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogsTable;
