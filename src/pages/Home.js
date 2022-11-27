import  React, { useState} from 'react'
import styles from './my-style.module.css'; 
import './App.css';
import Springc from './components/SpringC'

const Home = () => {

    const [serviceList, setServiceList ] = useState([
      {service:''},
      
    ]);

    const handleServiceAdd = () => {
        setServiceList([...serviceList,{service:''}]);
    }

    const handleServiceRemove = (index) => {

      const list = [...serviceList]
      list.splice(index, 1)
      setServiceList(list)
    } 

    const handleServiceChange  = (e, index) =>{
      const {name, value} = e.target;
      const list = [...serviceList];
      list[index][name] = value;
      setServiceList(list)
    }

    return (
    <div className={styles.Home}>
      <h1 >Home</h1>
      <form className="App" autoComplete="off">
        <div className='form-field'>
          <label htmlFor='service'>Service(s)</label>
          {serviceList.map((singleService, index) =>(

          <div key = {index}className='services'>
            <div className='first-division'>
              <input name='service' type='text' id='service' required 
                value={singleService.service}
                onChange = {(e) => handleServiceChange(e, index)}

              />
              {serviceList.length -1 ===index && serviceList.length < 4}

                <button type="button" className='add-btn'
                  onClick={handleServiceAdd}
                >
                  <span>Add a service</span>
                </button>

            </div>
            <div className='second-division'>
              {serviceList.length > 1 &&(
                <button type="button" className='remove-btn'
                onClick={()=>handleServiceRemove(index)}
                >
                <span>Remove</span>
              </button>
              )}
            </div>
          </div>
          ))}      
        </div>
        <div className='output'>
            <h2>Output</h2>
            {
              serviceList.map((singleService, index) =>(
                <ul key ={index}>
                  {singleService.service && <li>{singleService.service}</li>}
                </ul>
              ))
            }
        </div>
      </form>
      <Springc/>
    </div> 
  
  )
}
export default Home;