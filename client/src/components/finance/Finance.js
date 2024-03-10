import React from 'react'
import { Card, Button } from 'react-bootstrap';
import img1 from "../../images/img_1.avif";
import img2 from "../../images/img_2.jpg";
import img3 from "../../images/img_3.jpg";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import "./Finance.css"
const Finance = () => {
  const cardData = [
    {
      title: '',
      text: 'Total Cost of Cultivation.',
      imageUrl: img1,
    },
    {
      title: '',
      text: 'Expected Yield',
      imageUrl: img2,
    },
    {
      title: '',
      text: 'Payback Period',
      imageUrl: img3,
    },
  ];
  return (
    <div  className="parent d-flex flex-wrap" style={{ maxHeight: '200px' }}>
      
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '10px' }} className='child'>
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary">Calculate</Button>
          </Card.Body>
        </Card>
      ))}
    
    </div>
  )
}

export default Finance