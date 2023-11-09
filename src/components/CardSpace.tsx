import { Col, Card } from "react-bootstrap";

interface CardSpaceProps {
  title?: string;
  imgUrl?: string;
}

const CardSpace = (props: CardSpaceProps) => {
  return (
    <Col className="col-12 col-md-4">
      <Card>
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardSpace;
