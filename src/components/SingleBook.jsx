import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
  const { singleBook } = props;
  return (
    <Col
      key={singleBook.asin}
      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
    >
      <Card>
        <Card.Img variant="top" src={singleBook.img} />
        <Card.Body>
          <Card.Title>{singleBook.title}</Card.Title>
          <Card.Text className="btn btn-warning">
            {singleBook.category}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">{singleBook.price}$</Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleBook;
