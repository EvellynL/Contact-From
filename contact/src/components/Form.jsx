import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <h1>Contact Us</h1>

            <div className="names">
                <div className="form-control" id="first-name">
                    <label htmlFor="name">First Name: *</label>
                    <input type="text" name="name" required/>
                </div>
                <div className="form-control" id="last-name">
                    <label htmlFor="name">Last Name: *</label>
                    <input type="text" name="name" required/>
                </div>
            </div>

            <div className="form-control">
                <label htmlFor="email">Email Adress: *</label>
                <input type="email" name="email" required/>
            </div>

            <div className="form-control">
                <label htmlFor="query-type">Query type: *</label>
                <div className="query-type">
                    <label htmlFor="radio" className="radio-option">
                        <input type="radio" name="query-type" required/>General Enquiry
                    </label>
                    <label htmlFor="radio" className="radio-option">
                        <input type="radio" name="query-type" />Support Request
                    </label>
                </div>
            </div>

            <div className="form-control">
                <label htmlFor="message">Message: *</label>
                <textarea name="message" id="message" required></textarea>
            </div>

            <div className="form-control">
                <label htmlFor="contacted-team">
                    <input type="radio" name="contacted-team" required/> I consent to begin contacted by the team *
                </label>

                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form