import React from 'react'

const FormInput = () => {
  const [newdata, setnewdata] = React.useState([])
  const initial = {
    name: '',
    age: '',
    address: '',
    department: '',
    salary: '',
    marital: '',
  }

  const getdata = (res) => {
    setnewdata(res)
  }
  const [data, setData] = React.useState(initial)
  const ref = React.useRef(null)

  const handle = (e) => {
    const { name, value, type } = e.target
    let r = ref.current.files[0]
    setData({
      ...data,
      [name]: type === 'file' ? r.name : value,
    })
  }
  const handleto = (e) => {
    e.preventDefault()

    fetch('http://localhost:4500/Data', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(() => {
      fetch(`http://localhost:4500/Data`)
        .then((d) => d.json())
        .then((res) => getdata(res))
    })
  }
  return (
    <>
      <form onSubmit={handleto}>
        <input type="text" placeholder="name" name="name" onChange={handle} />
        <input type="text" placeholder="Age" name="age" onChange={handle} />
        <input
          type="text"
          placeholder="Address"
          name="address"
          onChange={handle}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Department"
          name="department"
          onChange={handle}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Salary"
          name="salary"
          onChange={handle}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Marital"
          name="marital"
          onChange={handle}
        />
        <br />
        <br />
        <input type="file" ref={ref} onChange={handle} name="gaurav" />
        <br />
        <br />
        <input type="submit" />
        <br />
        <br />
      </form>

      {newdata.map((el) => {
        return (
          <table>
            <tr>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{el.salary}</td>
              <td>{el.address}</td>
              <td>{el.department}</td>
              <td>{el.marital}</td>
              <td>{el.gaurav}</td>
            </tr>
          </table>
        )
      })}
    </>
  )
}

export default FormInput
