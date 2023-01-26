import axios from 'axios' // axios é uma biblioteca que possui métodos capaz de fazer requisições http a um servidor (get, post, put, patch, delete)
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditTopic() {
  const [form, setForm] = useState({
    title: '',
    content: '',
  })
  const navigate = useNavigate()
  const {id}  = useParams() // retorna um objeto com pares de chave/valor dos parâmetros dinâmicos da URL atual que foram correspondidos
  console.log(id)

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/blocoDeNotasDaKa/${id}`,
        )

        delete response.data._id

        setForm({ ...response.data })
      } catch (err) {
        console.log(err)
      }
    }
    fetchTopic()
  }, [id])

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios
      .put(`https://ironrest.cyclic.app/blocoDeNotasDaKa/${id}`, form)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input name="title" value={form.title} onChange={handleChange}></input>
      <label>Content</label>
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  )
}
