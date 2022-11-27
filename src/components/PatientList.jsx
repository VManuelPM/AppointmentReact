import { Patient } from './Patient'

const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ml-4">
      <h2 className="font-black text- text-3xl text-center">Patient List</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Manage your{' '}
        <span className="text-indigo-600 font-bold">
          patients and appointment{' '}
        </span>
      </p>

      <Patient></Patient>
      <Patient></Patient>
    </div>
  )
}

export default PatientList
