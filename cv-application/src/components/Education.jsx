import { useState } from "react"

function Education() {
  const [isEditing, setIsEditing] = useState(true)
  const [school, setSchool] = useState("")
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")

  if (isEditing) {
    return (
      <section>
        <h2>Educación</h2>
        <label>
          Centro de estudios:
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </label>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Fecha de estudio:
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button onClick={() => setIsEditing(false)}>Enviar</button>
      </section>
    )
  }

  return (
    <section>
      <h2>Educación</h2>
      <p><strong>Centro:</strong> {school}</p>
      <p><strong>Título:</strong> {title}</p>
      <p><strong>Fecha:</strong> {date}</p>
      <button onClick={() => setIsEditing(true)}>Editar</button>
    </section>
  )
}

export default Education