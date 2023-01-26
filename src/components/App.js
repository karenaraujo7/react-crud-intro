import {Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "./CreateTopic"
import ReadTopic from "./ReadTopic"
import EditTopic from './EditTopic'
// import CreateTopic from './CreateTopic'
import { useState } from 'react'

function App() {
  
  
return <div>
  <Routes>
    <Route path="/" element={<ReadTopic/>}/>
    <Route path="/create-topic" element={<Form/>}/>
    <Route path="/edit-topic/:id" element={<EditTopic/>}/>
  </Routes>
  

</div>



}

export default App



