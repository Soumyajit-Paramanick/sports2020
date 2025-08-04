import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Carousel, Badge } from 'react-bootstrap';
import axios from 'axios';
import API from '../config'; // ✅ Imported centralized config
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(API.PRODUCT_DETAIL(id))
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <Container>Loading...</Container>;

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.image}
                  alt={`Product ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Badge bg="secondary">{product.category?.name}</Badge>
              <Card.Text className="mt-3 fs-4">₹{product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;