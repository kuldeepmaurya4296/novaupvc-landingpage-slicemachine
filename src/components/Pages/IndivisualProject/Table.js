import React from 'react';

// Sample data from JSON (this would usually be fetched from a file or API)


const TableComponent = ({ tableData }) => {
  // console.log('table data ----', tableData[0]?.maxwidth)
  return (
    <div className="overflow-x-auto py-8 px-4 lg:px-28">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-4 px-6 border border-[#c69240] text-left" rowSpan={2}></th>
            <th className="py-4 px-6 border border-[#c69240] text-left text-[#c69240]" colSpan={2}>Minimum </th>
            <th className="py-4 px-6 border border-[#c69240] text-left text-[#c69240]" colSpan={2}>Maximum </th>
          </tr>
          <tr>
            <th className="py-4 px-6 border border-[#c69240] text-left">Width</th>
            <th className="py-4 px-6 border border-[#c69240] text-left">Height</th>
            <th className="py-4 px-6 border border-[#c69240] text-left">Width</th>
            <th className="py-4 px-6 border border-[#c69240] text-left">Height</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="py-4 px-6 border border-[#c69240]">{row.heading}</td>
              <td className="py-4 px-6 border border-[#c69240]">{row.minwidth}</td>
              <td className="py-4 px-6 border border-[#c69240]">{row.minheight}</td>
              <td className="py-4 px-6 border border-[#c69240]">{row.maxwidth}</td>
              <td className="py-4 px-6 border border-[#c69240]">{row.maxheight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>All dimensions are in mm</p>
    </div>
  );
};

export default TableComponent;
