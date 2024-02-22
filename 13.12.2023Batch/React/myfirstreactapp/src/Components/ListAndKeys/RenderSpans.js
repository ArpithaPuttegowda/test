import { StyledSpan } from "./styled";

export const RenderSpans = () => {
  const data = [
    {
      id: 1,
      content: "React",
    },
    {
      id: 2,
      content: "Angular",
    },
    {
      id: 3,
      content: "nodejs",
    },
  ];
  return <div>
   {
    data?.map((dataObj)=>{
     return <StyledSpan key={dataObj.id}>{dataObj.content}</StyledSpan>
    })
   }
</div>;
};
