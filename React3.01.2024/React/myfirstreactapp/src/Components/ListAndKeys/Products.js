export const Products = () => {
  const data = [
    {
      pn: "TV",
      id: "2",
    },
    {
      pn: "Fridge",
      id: "3",
    },
    {
      pn: "Camera",
      id: "300",
    },
  ];
  return (
    <>
      {data.map((obj) => (
        <Product productName={obj.pn} id={obj.id} />
      ))}
    </>
  );
};

const Product = ({ productName, id }) => {
  return (
    <>
      <h1>Product:: {productName}</h1>
      <h2>Product ID:::{id}</h2>
    </>
  );
};
