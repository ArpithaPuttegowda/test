
import React from 'react'
import { createPortal } from 'react-dom'
import { FetchData } from './Components/FetchData'
import { FetchDataClick } from './Components/FetchDataClick'
import MyComponent from './Components/InsertTheData'
import {ModalComp} from './Components/ModalComp'

export const App = () => {
  return (
    <div>
      {/* <FetchData/>
      <FetchDataClick/>
      <MyComponent/> */}
      <h1>App</h1>
      {createPortal(<ModalComp/>,document.getElementById("modal-root"))}
    </div>
  )
}
export default App
