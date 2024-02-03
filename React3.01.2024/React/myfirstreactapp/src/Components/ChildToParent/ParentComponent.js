import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
 const getPinCode=(data)=>{
   console.log(data,"data coming from child")
 }

 const getName=(name)=>{
    console.log(name,"name coming from child")
 }
  return (
    <div><ChildComponent fn={getPinCode} gN={getName}/>
    </div>
  )
}