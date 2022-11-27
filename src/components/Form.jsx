import { useEffect, useState } from 'react'

//Function Declaration

//rafce -> Snippet to generate Function fast

const Form = ({ setPatients }) => {
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [discharge, setDischarge] = useState('')
  const [symptom, setSymptom] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    //Validate Form

    if ([name, owner, email, discharge, symptom].includes('')) {
      setError(true)
      return
    }

    setError(false)

    //Patient Object
    const patientObject = {
      name,
      owner,
      email,
      discharge,
      symptom,
    }

    setPatients(name)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 my-10">
      <h2 className="font-black text- text-3xl text-center">Patient Track</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add patients and{' '}
        <span className="text-indigo-600 font-bold">manage them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
            <p>There are errors</p>
          </div>
        )}
        <div className="mb-5">
          <label
            htmlFor="pet-name"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name {name}
          </label>
          <input
            type="text"
            placeholder="Pet name"
            name="pet-name"
            id="pet-name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner-name"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            type="text"
            placeholder="Owner Name"
            name="owner-name"
            id="owner-name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="discharge-date"
            className="block text-gray-700 uppercase font-bold"
          >
            Discharge Date
          </label>
          <input
            type="date"
            name="discharge-date"
            id="discharge-date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete="off"
            value={discharge}
            onChange={e => setDischarge(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            type="date"
            name="symptom"
            id="symptom"
            placeholder="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete="off"
            value={symptom}
            onChange={e => setSymptom(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value="Add Patient"
        />
      </form>
    </div>
  )
}

export default Form
