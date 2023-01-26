import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ReadTopic() {
  const [topics, setTopics] = useState([])
  const navigate = useNavigate()

  async function deleteTopic(id) {
    try {
      await axios.delete(`https://ironrest.cyclic.app/blocoDeNotasDaKa/${id}`)

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await axios.get(
          'https://ironrest.cyclic.app/blocoDeNotasDaKa',
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

  console.log(topics);
  return (
    <div>
      {topics.map((currentTopic) => {
        return (
          <div key={currentTopic._id}>
            <h2>{currentTopic.title}</h2>
            <p>{currentTopic.content}</p>
            <button
              onClick={() => {
                navigate(`/edit-topic/${currentTopic._id}`)
              }}
            >
              Editar
            </button>
            <button onClick={() => {
              deleteTopic(currentTopic._id)
            }}>
              Deletar
            </button>
          </div>
        )
      })}
    </div>
  )
}
