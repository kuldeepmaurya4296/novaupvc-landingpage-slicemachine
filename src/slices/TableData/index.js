import TableComponent from "@/components/Pages/IndivisualProject/Table";

/**
 * @typedef {import("@prismicio/client").Content.TableDataSlice} TableDataSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TableDataSlice>} TableDataProps
 * @param {TableDataProps}
 */
const TableData = ({ slice }) => {
  // console.log('Table Data -------', slice.primary.tabledata[0].minheight)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TableComponent tableData={slice.primary.tabledata} />
    </section>
  );
};

export default TableData;
