import { createRef, useRef } from "react"
export const GetData = () => {
    // const h1Ref=useRef(null);
    const h1Ref=createRef(null)

    const handleClick=()=>{
      const data=h1Ref?.current?.innerText;
      alert(data)
    }
    
  return (
    <div>
        <h1 ref={h1Ref}>The city is Pune</h1>
        <button onClick={handleClick}>Click me</button>

        <Hero heroName="Puneeth Raj" age="48">I'm from Sandalwood</Hero>
        <Hero heroName="Mahesh Babu"age="47">I'm from tollywood</Hero>
        <Hero heroName="Sudeep"/>
    </div>
  )
}



const Hero=({heroName,children,age})=>{
    return <h1>My hero name....{heroName}...age is {age}...{children}</h1>
}