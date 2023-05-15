import * as React from 'react'

///Bootstrap components
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown';
import { emitstateofuser } from './sockets.js';
import Logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import MetaMaskSDK from '@metamask/sdk';
import QRCode from 'react-qr-code';
import { emitwalletforbdd, ondatawallet } from './sockets.js';


const HeaderOptions = ({ changeregister }) => {
   

    const datauser = sessionStorage.getItem("username");
    const [modalHistorial, setModalHistorial] = React.useState(false);
    const [modalRetiro, setModalRetiro] = React.useState(false);
    const [modalDeposito, setModalDeposito] = React.useState(false);
    
    const sdk = new MetaMaskSDK({
        shouldShimWeb3: false,
        showQRCode: true,
      });
      const ethereum = sdk.getProvider();
      //const EthereumTx = require("ethereumjs-tx").Transaction;
    let user = "Usuario"

    if (datauser !== null || datauser !== '' || datauser !== 'data') {
        user = datauser
    }
    const datawallet=(data)=>{
        if(data===true){

        }else if(data===false){
           emitirFirma(true) 
        }
    } 
    ondatawallet(datawallet)
    const HadleLogOut = (e) => {
        if (user !== "" || user !== null || user !== 'data') {
            var data = { "user": user, "status": "idle" }
            setTimeout(function () {
                emitstateofuser(data)
                changeregister("0")
            }, 1000)
        }
    }
    const emitirFirma = async(data)=>{
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
            params: [0],
          });
        
          console.log('request accounts', accounts[0]);
        
          const msgParams = {
            types: {
              EIP712Domain: [
                { name: 'name', type: 'string' },
                { name: 'version', type: 'string' },
                { name: 'chainId', type: 'uint256' },
                { name: 'verifyingContract', type: 'address' },
              ],
              Person: [
                { name: 'name', type: 'string' },
                { name: 'wallet', type: 'address' },
              ],
              Mail: [
                { name: 'from', type: 'Person' },
                { name: 'to', type: 'Person' },
                { name: 'contents', type: 'string' },
              ],
            },
            primaryType: 'Mail',
            domain: {
              name: 'Ether Mail',
              version: '1',
              chainId: '0x1',
              verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
            },
            message: {
              from: {
                name: 'Mur Casino',
                wallet: '0xa94c4fb867C76419Ca754A5F71eF7bf1049f79E7',
              },
              to: {
                name: datauser,
                wallet: accounts[0],
              },
              contents: 'Hello, '+datauser+'!',
            },
          };
        
          const from = accounts[0];
        
          const signResponse = await ethereum.request({
            method: 'eth_signTypedData_v3',
            params: [from, JSON.stringify(msgParams)],
          });
        
          console.log('sign response', signResponse);  
          
    }
    const styles = {
        row1: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",

        },
        content1: {
            width: "80%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center"
        },
        imglogo: {
            height: '30px',
            with: '30px',
            top: '1%',
            position: 'fixed',
            left: '1%'

        }


    }
    const connecttometamask = () =>{

        const options = {
            injectProvider: false,
            communicationLayerPreference: 'webrtc',
        };
        const MMSDK = new MetaMaskSDK(options);
        const ethereum = MMSDK.getProvider();
  
       let account;
       ethereum.request({ method: 'eth_requestAccounts'}).then(accounts =>{
           account = accounts[0]; 
           //console.log('cuneta',account, 'etherium', EthereumTx);

           ethereum.request({method: 'eth_getBalance', params: [account, 'latest']}).then(result =>{
               console.log(result);
               let wei= parseInt(result,16)
               let balance= wei / (10**18);
               console.log(balance+'ETH');
               alert('conectando con '+account);
               let datos={'user':datauser,'wallet':account}
               emitwalletforbdd(datos);
               
           })
       })
    }
    function ModalHistorial(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header id='modalcoinsgate' closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <font color="white"> MUR-CASINO</font>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modalcoinsgate'>
                    <h4><font color="white">Deposito</font></h4>

                    <Row>
                        <div id="tabs">
                            <center> <span class="diana" id="uno"></span>
                                <a href="#uno" class="tab-e">Apuestas</a>
                                <span class="diana" id="dos"></span>
                                <a href="#dos" class="tab-e">Depositos</a>
                                <span class="diana" id="tres"></span>
                                <a href="#tres" class="tab-e">Retiros</a>

                                <div id="pnl_1">
                                    <div>
                                        <p><img src="https://2.bp.blogspot.com/-Ycpx_Jl2zBc/UG5BMFNpZWI/AAAAAAAACGo/ikysNYg5_q0/s1600/k.jpg" alt="sólo una pic para ilustrar" />Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>

                                        <p>At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.</p>
                                    </div>
                                </div>

                                <div id="pnl_2">
                                    <div>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>

                                        <p><img src="https://4.bp.blogspot.com/-Y_BPQRH_tDw/UHMgZdJlqII/AAAAAAAACVA/S73BrQnk-w4/s1600/avatar-anom.jpg" alt="sólo una pic para ilustrar" />Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                                    </div>
                                </div>

                                <div id="pnl_3">
                                    <div>
                                        <p> No officiis lobortis eam. Soluta laboramus mei cu, sea modo dicant eu, cu ius eius aperiri. An pro dicam contentiones. Duo amet lorem officiis ex, an legimus nusquam atomorum per, per cu erat ornatus. Nibh oratio eam eu. An lobortis sapientem delicatissimi mea, ex dicunt tacimates quo, nec ad aeque adipisci efficiantur.</p>

                                        <p> Pri ad quando suscipit conclusionemque, ad vel dico ubique. Et sit utinam apeirian. Ea nemore delicatissimi eos, cum adhuc dignissim ad, putent ocurreret has ut. Eos amet duis solet id, est ne prima nostro virtute, ea pri etiam recteque disputando. Enim dolorum vivendum at vel, vis odio consul te.</p>
                                    </div>
                                </div></center>
                        </div>
                    </Row>

                </Modal.Body>

            </Modal>
        );
    }
    function ModalRetiro(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header id='modalcoinsgate' closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <font color="white"> MUR-CASINO</font>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modalcoinsgate'>
                    <h4><font color="white">Retiro</font></h4>

                    <Row>
                        <Col ><center><input id='inputcoinsgate' placeholder='Nombres' type="text" /></center><br />
                            <center><input className='mt-2' id='inputcoinsgate' placeholder='Fecha de nacimiento' type="date" /></center>
                        </Col>
                        <Col><center><input id='inputcoinsgate' placeholder='Apellidos' type="text" /></center><br />
                            <center><input id='inputcoinsgate' placeholder='País' type="text" /></center>
                        </Col>
                    </Row>
                    <center><input className='mt-4' id='inputcoinsgatedir' placeholder='Dirección' type="text" /></center>
                    <Row className='mt-4'>
                        <Col><center><input id='inputcoinsgate' placeholder='Estado/Providencia' type="text" /></center></Col>
                        <Col><center><input id='inputcoinsgate' placeholder='Ciudad' type="text" /><br /></center></Col>
                    </Row>
                    <Button id='buttonscoinsgate' className='mt-4'>Enviar</Button>

                </Modal.Body>

            </Modal>
        );
    }
    function ModalDeposito(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header id='modalcoinsgate' closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <font color="white"> MUR-CASINO</font>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modalcoinsgate'>
                    <h4><font color="white">Deposito</font></h4>
                    <hr style={{color:"white"}} />

                    <Row>
                        <Col><QRCode
                            
                            style={{ height: "auto", maxWidth: "60%", width: "60%" }}
                            value={'0xa94c4fb867C76419Ca754A5F71eF7bf1049f79E7'}
                            viewBox={`0 0 256 256`}
                        /></Col>
                        <Col>
                            <p><h5><font color="white"> Direccion de Wallet en Metamask:</font> </h5></p><br />
                            <p><h6><font color="white"> 0xa94c4fb867C76419Ca754A5F71eF7bf1049f79E7</font></h6></p>
                        </Col>
                    </Row>
                    <hr style={{color:"white"}} />
                    

                </Modal.Body>

            </Modal>
        );
    }
    return (
        <>
            <Row style={styles.row1}>
                <div class='container d-none d-md-block d-lg-block' style={styles.imglogo}><Link to='/'><img height="80px" width="80px" src={Logo} alt="" /></Link></div>
                <div className='d-flex justify-content-around' style={styles.content1}>
                    <Col>
                        <DropdownButton variant="text" id="dropdown-basic-button" title={user}>
                            <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => { setModalHistorial(true) }}>Historial</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{ connecttometamask()}}>Conectar Metamask</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => { HadleLogOut(e) }}>Log out</Dropdown.Item>
                            
                        </DropdownButton>
                    </Col >
                    <Col><center><Button variant="success" onClick={() => setModalDeposito(true)}>Depositar</Button>{' '}</center></Col>
                    <Col><center><Button variant="info" onClick={() => setModalRetiro(true)} className="">Retirar</Button>{' '}</center></Col>

                </div>
                <div></div>
            </Row>

            <ModalHistorial
                show={modalHistorial}
                onHide={() => setModalHistorial(false)}
            />
            <ModalRetiro
                show={modalRetiro}
                onHide={() => setModalRetiro(false)}
            />
            <ModalDeposito
                show={modalDeposito}
                onHide={() => setModalDeposito(false)}
            />
        </>
    )
}

export default HeaderOptions