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
            <h2>BMI Calculator</h2>
            <form>
              <div className='weight'>
                <label htmlFor="" >Weight (ibs)</label>
                <input type="text" placeholder='Enter Wight Value' value={weight} />
              </div>
              <div className='height'>
                <label htmlFor="">Height (in)</label>
                <input type="text" placeholder='Enter Wight Value' value={height} />
              </div>
              <div>
                <button className="btn " type='submit' >Submit</button>
                <button className="btn btn-outline" onClick={reload} type='submit' >Reset</button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default BMI
