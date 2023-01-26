import axios from 'axios'
import { useEffect, useState } from 'react'

export default function CreateTopic(props) {
  const [form, setForm] = useState({
    title: '',
    content: '',
  })
  const [disponivel, setDisponivel] = useState(false)

  function handleChange(event) {
    setForm({...form, [event.target.name]: event.target.value })
  }

  console.log(form);
  useEffect(() => {
    if (form.title !== '' && form.content !== '') {
      setDisponivel(true)
    }
  }, [form])

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await axios.post('https://ironrest.cyclic.app/blocoDeNotasDaKa', form)
      alert('Seu post foi criado')
    } catch (error) {
      console.log(error)
    }
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
      {disponivel ? (
        <button type="submit">Enviar</button>
      ) : (
        <button type="submit" disabled>
          Enviar
        </button>
      )}
      {/* <button type='submit'>Enviar</button> */}
    </form>
  )
}
