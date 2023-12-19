
import React from 'react'
import { FetchData } from './Components/FetchData'
import { FetchDataClick } from './Components/FetchDataClick'
import MyComponent from './Components/InsertTheData'

export const App = () => {
  return (
    <div>App
      {/* <FetchData/> */}
      <FetchDataClick/>
      <MyComponent/>
    </div>
  )
}
export default App
