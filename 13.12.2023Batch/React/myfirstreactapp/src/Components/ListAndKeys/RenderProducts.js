export const RenderProducts = () => {
  const productDetails = [
    { productId: 100, productName: "TV", pcost: "50k", pcolor: "gray" },
    { productId: 110, productName: "Fridge", pcost: "40k", pcolor: "white" },
    {
      productId: 120,
      productName: "washing machin",
      pcost: "80k",
      pcolor: "purple",
    },
  ];
  return (
    <div>
      {productDetails?.map((productObj, i) => {
        const { productId, productName, pcolor, pcost } = productObj;
        return (
          <p>
            <Product
              pid={productId}
              pname={productName}
              pcost={pcost}
              pclr={pcolor}
            />
          </p>
        );
      })}
    </div>
  );
};

const Product = ({ pid, pname, pcost, pclr }) => {
  return (
    <>
      <div>Product Name:{pname}</div>
      <div>Product ID:{pid}</div>
      <div>Product Cost:{pcost}</div>
      <div>Product Color:{pclr}</div>
    </>
  );
};
