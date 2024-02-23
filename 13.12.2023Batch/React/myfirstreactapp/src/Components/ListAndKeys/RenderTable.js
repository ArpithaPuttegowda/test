export const RenderTable = () => {
  const headers = ["Name", "Loc", "Runs"];
  const data = [
    {
      name: "Sachin",
      loc: "mumbai",
      runs: 10,
    },
    {
      name: "Dhoni",
      loc: "Kohli",
      runs: 20,
    },
  ];
  return (
    <>
      <table border="">
        <thead>
          <tr>
            {headers?.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((obj) => {
            return (
              <tr>
                <td>{obj.name}</td>
                <td>{obj.loc}</td>
                <td>{obj.runs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
