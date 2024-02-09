import { useState } from "react"

export const ParentComp=()=>{
    const [playersList,setPlayersList]=useState([])
    const [sachinInfo,setSachinInfo]=useState({})
    const getPlayersList=(data)=>{
        setPlayersList(data)
    }

    const getSachinInfo=(data)=>{
     setSachinInfo(data)
    }
    return <h1>
        I'm Parent.
        <div>Data coming from child::::{playersList[0]}..{playersList[1]}...{playersList[2]}</div>
        <div>Data coming from child::::{sachinInfo.name}....{sachinInfo.area}</div>
        <Child fn={getPlayersList} gsi={getSachinInfo}/>
    </h1>
}


const Child=({fn,gsi})=>{
    const playersList=["Sachin","Dhoni","Kohli"]
    const sachinInfo={
       name:"ST",
       area:"Mumbai street"
    }
    const handleClick=()=>{
       fn(playersList)
    }
    const handleSachinInfo=()=>{
        gsi(sachinInfo)
    }
    return <h1>I'm Child
        <button onClick={handleClick}>Click me </button>
        <button onClick={handleSachinInfo}>Pass sachinInfo</button>
    </h1>
}