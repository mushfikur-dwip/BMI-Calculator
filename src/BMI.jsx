import './BMI.css'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function BMI() {
  let weight = 0;
  let height = 0;
  let reload = 0;
  return (
    <>
        <div className="app">
          <div className="container">
          <div className='heading'>
            <h1>BMI Calculator</h1>
          </div>
            <form>
              <div className='weight'>
                <label htmlFor="" >Weight (ibs)</label>
                <input type="text" placeholder='Enter Wight Value'  />
              </div>
              <div className='height'>
                <label htmlFor="">Height (in)</label>
                <input type="text" placeholder='Enter Wight Value'  />
              </div>
              <div className='buttons'>
                <button className="submit_btn" type='submit' >Submit</button>
                <button className="reload" onClick={reload} type='submit' >Reset</button>
              </div>
          </form>
          <div className="msg">
            <span>Your BMI is <span className='bmi-point'>18.29</span></span>
            <span>Your are <span className='bmi-msg'>Healthy</span></span>
          </div>
          </div>
        </div>
    </>
  )
}


export default BMI
