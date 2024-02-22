export const RenderTableData = () => {
  const headers = ["Name", "Loc"];
  const tableData = [
    {
      name: "Sachin",
      loc: "Mumbai",
    },
    {
      name: "Dhoni",
      loc: "Ranchi",
    },
  ];
  return (
    <div>
      <table border="">
        <thead>
          <tr>
            {headers.map((header, i) => {
              return <th key={header + i}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>{
                tableData?.map((obj,i)=>{
                return<tr key={i}>
                    <td>{obj.name}</td>
                    <td>{obj.loc}</td>
                </tr>
            })
            }</tbody>
      </table>
    </div>
  );
};
