export const RenderFlowers = () => {
  let colours = [
    {
      flower: "Rose",
      clr: "red",
    },
    {
      flower: "Jasmin",
      clr: "White",
    },
    {
      flower: "Lilly",
      clr: "yellow",
    },
    {
        flower:"Hibscus",
        clr:"Pink"
    }
  ];
  return (
    <>
      <ol>
        {colours?.map((obj, i) => (
          <li key={obj.clr + i}>
            <b>Flower</b>:{obj.flower}
            <br />
            <b>Color</b>:{obj.clr}
          </li>
        ))}
      </ol>
    </>
  );
};
