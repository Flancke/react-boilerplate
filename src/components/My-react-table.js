import React from 'react';
import { Table } from 'reactable';


const MyReactTable = function () {
  const tableData =
    [
      { Name: 'Alexa', Age: '29', Professional: 'Developer/Designer' },
      { Name: 'Moritz', Age: '25', Professional: 'Musician' },
      { Name: 'Fox', Age: '36', Professional: 'Musician' }
    ];
  return (
      <div>
        <Table
        className="table table-striped table-bordered"
        data={tableData}
        itemsPerPage={2}
        pageButtonLimit={5}
        sortable={true} />
      </div>
    );
};

export default MyReactTable;
