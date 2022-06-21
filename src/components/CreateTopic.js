import axios from 'axios'
import { useState } from 'react'

export default function CreateTopic() {
  const [form, setForm] = useState({
    title: '',
    body: ''
  })

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios.post("https://ironrest.herokuapp.com/ironhelp", form)
    .then(() => {
      alert('Seu post foi criado')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input name="title" value={form.title} onChange={handleChange}></input>
      <label>Body</label>
      <textarea name="body" value={form.body} onChange={handleChange}></textarea>
      <button type='submit'>Enviar</button>
    </form>
  )
}
