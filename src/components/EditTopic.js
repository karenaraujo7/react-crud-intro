import axios from 'axios' // axios é uma biblioteca que possui métodos capaz de fazer requisições http a um servidor (get, post, put, patch, delete)
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CreateTopic() {
  const [form, setForm] = useState({
    title: '',
    body: '',
  })

  const { id } = useParams() // retorna um objeto com pares de chave/valor dos parâmetros dinâmicos da URL atual que foram correspondidos

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/ironhelp/${id}`,
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
      .put(`https://ironrest.herokuapp.com/ironhelp/${id}`, form)
      .then(() => {
        alert('Seu post foi criado')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input name="title" value={form.title} onChange={handleChange}></input>
      <label>Body</label>
      <textarea
        name="body"
        value={form.body}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  )
}
