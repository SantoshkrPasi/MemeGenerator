import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Edit from '../pages/Edit';

function MemeCard(props) {
    const Navigate = useNavigate();
  return (
    <>
    <Card style={{  width: '18rem', margin:"10px" }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Button variant="primary" onClick={()=>Navigate(`/edit?url=${props.img}`)}>Edit</Button>
    </Card.Body>
  </Card>
  </>
  )
}

export default MemeCard