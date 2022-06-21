import axios from 'axios'
import { useEffect, useState } from 'react'

export default function ReadTopic() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await axios.get(
          'https://ironrest.herokuapp.com/ironhelp',
        )
        console.log(response)
        console.log(response.data)
        setTopics([...response.data])
      } catch (err) {
        console.log(err)
      }
    }
    fetchTopic()
  }, [])

  return (
    <div>
      {topics.map((currentTopic) => {
        return (
          <div key={currentTopic._id}>
            <h2>{currentTopic.title}</h2>
            <p>{currentTopic.body}</p>{' '}
          </div>
        )
      })}
    </div>
  )
}
