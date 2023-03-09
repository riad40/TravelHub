import '../css/form.css'

function FormContainer({ children }) {
  return (
    <div className="App opacity-80">
      <div className="rounded-lg form" style={ { backgroundColor: '#202442'}}>
        <div className="p-5">
            { children }
        </div>
      </div>
    </div>
  )
}

export default FormContainer