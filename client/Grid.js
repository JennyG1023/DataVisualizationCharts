import React from "react";
import ReactTable from "react-table";

const Grid = (props) => {
    const { data, selectedLine } = props;
    return (
      <div className='grid'>
        <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "Times",
                  accessor: "time",
                  width: 240
                },
                {
                  Header: "Revenues - " + selectedLine.name,
                  accessor: 'value',
                  width: 500
                }
              ]
            }   
          ]}
          defaultPageSize={12}
          style={{
            height: '400px',
          }}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
}

export default Grid;