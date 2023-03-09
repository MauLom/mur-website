import * as React from 'react'
import { ondataHalloffame } from './sockets.js'
import icon2 from '../assets/icon2.png'
const halloffame = () => {

    const styles = {
        hr: {
            backgroundColor: "white",
            height: "10px"
        }
    }
    const datahalloffame=(data)=>{
        console.log('datos de hall of fame', data)
    }
    ondataHalloffame(datahalloffame)
    
    return (
        <div class="container d-md-none d-xl-none d-lg-none " id='floatcontent'>
            <input type="checkbox" id='toggle' />
            
            <nav class="nav">
            <label htmlFor="toggle" class="button"><center><img src={icon2} alt="" height="10%" width="10%" /></center></label>
                <div id='divhalf'>
                
                
                <br />
                <br />
                    <p><h1><font color='white'>Hall of Fame</font></h1></p><br />
                    <hr style={styles.hr} />
                    <p><h3><font color='white'>....00Xe364A ------ 50$</font></h3></p><br />
                    <hr style={styles.hr} />
                    <p><h3><font color='white'>....00Xe364A ------ 50$</font></h3></p><br />
                    <hr style={styles.hr} />
                    <p><h3><font color='white'>....00Xe364A ------ 50$</font></h3></p><br />
                    <hr style={styles.hr} />
                    <p><h3><font color='white'>....00Xe364A ------ 50$</font></h3></p><br />
                    <hr style={styles.hr} />
                    <p><h3><font color='white'>....00Xe364A ------ 50$</font></h3></p><br />

                </div>
            </nav>
        </div>
    )

}
export default halloffame