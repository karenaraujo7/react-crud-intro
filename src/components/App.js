import {Routes, Route} from 'react-router-dom'

import Form from "./CreateTopic"
import ReadTopic from "./ReadTopic"
import EditTopic from './EditTopic'

function App() {
return <div>
  <Routes>
    <Route path="/" element={<ReadTopic/>}/>
    <Route path="/create-topic" element={<Form/>}/>
    <Route path="/update-topic/:id" element={<EditTopic/>}/>
  </Routes>
  
  

</div>



}

export default App



