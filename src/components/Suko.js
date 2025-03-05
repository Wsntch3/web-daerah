import {Container , Row , Col , Button} from 'react-bootstrap'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Suko = () => {
    useEffect (( )=> {
        Aos.init({
            duration:1000
         });
    },[])
    return(
        <div className="intro">
            <Container className = "text-white justify-content-center text-center align-items-center d-flex">
             <Row>
                <Col animate__animated animate__fadeInUp> 
                    <div className='kata' data-aos='zoom-in-down'>  SELAMAT DATANG</div>
                    <div className='kata' data-aos='zoom-in-down'>SUKOHARJO MAKMUR</div>
                    <div className='SukoButton mt-4 text-center'></div>
                    <Button variant='dark' data-aos='zoom-in-down'>Mari kita explore</Button>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Suko