
const Cards = () => {
  return (
    <div className="from-container space-y-4 text-center">
      <h2 className="form-heading font-bold">Exam Result</h2>
      <form className="result-form items-center justify-center">
        <div className="form-group ">
          <label htmlFor="rollnumber text-sm font-medium leading-6 text-gray-900">Roll Number *</label>
          <input 
           type="text"
           id="rollnumber"
           placeholder="Roll Number"
           className="border border-gray-300 p-2 rounded w-ful"
           required
            />
        </div>
        <div className="form-group  space-y-4">
          <label htmlFor="cnic">CNIC or B-form Number *</label>
          <input
           type="text"
           id="cnic"
           placeholder="CNIC or B-form Number"
           className="border border-gray-300 p-2 rounded w-ful"
           required
            />
        </div>
      
        <button type="button" className="submit-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Result</button>
         
      </form>
    </div>
  )
}

export default Cards