import React from 'react';
import { useEffect } from 'react';
import { Card, Row, Col, } from 'react-bootstrap';
import image1 from '../assets/image/HP.jpg'
import image2 from '../assets/image/waduk.jpg'
import image3 from '../assets/image/sepikul.jpg'
import image4 from '../assets/image/pandawa.jpg'
import image5 from '../assets/image/petilasan.jpg'
import image6 from '../assets/image/biru.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Blok = () => {
        useEffect (( )=> {
            Aos.init({duration:1000});
        },[])
        const cardsData = [
        {
            imgSrc: image1,
            title: 'Herritage Palace',
            text: 'The Heritage Palace yang ada di Kartasura merupakan sebuah tempat menarik di Sukoharjo untuk liburan keluarga.Di destinasi wisata ini terdapat bangunan-bangunan dan arsitektur dengan gaya Eropa,khas,unik,dan eksentrik',
        },
        {
            imgSrc: image2,
            title: 'Waduk mulur',
            text: 'Wisata Waduk Mulur memang belum menjadi destinasi utama di Bendosari, Sukoharjo. Namun keindahan alamnya mampu memberikan kepuasan tersendiri untuk menikmati udara segar dan pemandangan khas waduk.Menikmati senja sambil menikmati jajanan di sekitar waduk mulur',
        },
        {
            imgSrc: image3,
            title: 'Gunung Sepikul',
            text: 'Destinasi ini berlokasi di Desa Tiyaran,Pesona keindahan tersembunyi dari Gunung Sepikul ini mampu menyedot perhatian banyak wisatawan, terutama anak muda. Wisata alam Sukoharjo Jawa Tengah ini tidaklah terlalu tinggi dan memiliki cerita legenda yang cukup menarik.',
        },
        {
            imgSrc: image4,
            title: 'Pandawa Water World',
            text: 'Pandawa Water World merupakan sebuah wahana permainan air yang cukup epic, besar, luas, indah, dan lengkap dengan berbagai fasilitasnya. Tema wisatanya pun mencerminkan budaya di Jawa yaitu para tokoh Pandawa yang menjadi ikon utamanya.',
        },
        {
            imgSrc: image5,
            title: 'Petilasan Kerajaan Pajang',
            text: 'Anda bisa menemukan bukti sejarah dari Kerajaan Pajang di sekitar kawasan Kartasura.Terdapat berbagai artefak yang berhubungan dengan Pajang dan Jaka Tingkir,berbagai lukisan dan benda-benda bersejarah lainnya.',
        },
        {
            imgSrc: image6,
            title: 'Telaga Biru',
            text: 'Telaga Biru adalah objek wisata alam Sukoharjo dan berbatasan dengan Gunung Kidul. Tempat ini populer di kalangan wisatawan, terutama anak muda, karena daya tariknya yang unik dan juga pesona alamnya. Telaga ini memiliki pemandangan yang eksotis dan sangat menawan.',
        },
    ];

    return (
        <div>
            <Row xs={1} md={1} lg={3} className="g-4">
                {cardsData.map((card, index) => (
                    <Col key={index}>
                        <Card className="card-float" data-aos='flip-left'>
                            <Card.Img variant="top" src={card.imgSrc} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};


export default Blok
