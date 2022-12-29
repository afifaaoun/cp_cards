import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cards() {
  return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/canada.jpg" alt='canada' />
      <Card.Body>      
        <Card.Title>Canada</Card.Title>
        <Card.Text>
          beautifull vue
         
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;