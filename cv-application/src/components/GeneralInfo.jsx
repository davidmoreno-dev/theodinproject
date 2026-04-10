import { useState } from "react"

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  if (isEditing) {
    return (
      <section>
        <h2>Información General</h2>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Teléfono:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button onClick={() => setIsEditing(false)}>Enviar</button>
      </section>
    )
  }

  return (
    <section>
      <h2>Información General</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Teléfono:</strong> {phone}</p>
      <button onClick={() => setIsEditing(true)}>Editar</button>
    </section>
  )
}

export default GeneralInfo