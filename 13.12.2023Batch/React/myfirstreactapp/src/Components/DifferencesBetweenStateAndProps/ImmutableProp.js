//immutable=not able to change

export const ImmutableProp = () => {
    const loc="Mumbai"
  return (
    <div>ImmutableProp...
        <Child myLoc={loc}/>
    </div>
  )
}


const Child=({myLoc})=>{
    // myLoc="Hyderabad"  //voilation of immutability of props
    return <h1>I'm Child...{myLoc}</h1>
}
