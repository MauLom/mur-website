import * as React from 'react'
import { ondataHalloffame } from './sockets.js'
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
        <div class="container" id='floatcontent'>
            <input type="checkbox" id='toggle' />
            <label htmlFor="toggle" class="button"><center></center></label>
            <nav class="nav">
                <div id='divhalf'>

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