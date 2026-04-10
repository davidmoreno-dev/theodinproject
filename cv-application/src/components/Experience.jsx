import { useState } from "react"

function Experience() {
  const [isEditing, setIsEditing] = useState(true)
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [responsibilities, setResponsibilities] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")

  if (isEditing) {
    return (
      <section>
        <h2>Experiencia Práctica</h2>
        <label>
          Empresa:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <label>
          Puesto:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
        <label>
          Responsabilidades:
          <textarea
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
          />
        </label>
        <label>
          Desde:
          <input
            type="text"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </label>
        <label>
          Hasta:
          <input
            type="text"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </label>
        <button onClick={() => setIsEditing(false)}>Enviar</button>
      </section>
    )
  }

  return (
    <section>
      <h2>Experiencia Práctica</h2>
      <p><strong>Empresa:</strong> {company}</p>
      <p><strong>Puesto:</strong> {position}</p>
      <p><strong>Responsabilidades:</strong> {responsibilities}</p>
      <p><strong>Período:</strong> {dateFrom} - {dateTo}</p>
      <button onClick={() => setIsEditing(true)}>Editar</button>
    </section>
  )
}

export default Experience