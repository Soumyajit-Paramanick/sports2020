import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../config'; // ✅ Imported centralized config
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    search: ''
  });


  useEffect(() => {
    let url = API.PRODUCTS; // ✅ Used config API.PRODUCTS
    const params = new URLSearchParams();
    
    if (filters.category) params.append('category', filters.category);
    if (filters.minPrice) params.append('min_price', filters.minPrice);
    if (filters.maxPrice) params.append('max_price', filters.maxPrice);
    if (filters.search) params.append('search', filters.search);
    
    url += `?${params.toString()}`;
    
    axios.get(url)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <h5>Filters</h5>
              <Form>
                
                <Form.Group className="mb-3">
                  <Form.Label>Price Range</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="number"
                      placeholder="Min"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                    />
                    <span className="mx-2">to</span>
                    <Form.Control
                      type="number"
                      placeholder="Max"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                    />
                  </div>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search products..."
                    name="search"
                    value={filters.search}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={9}>
          <Row>
            {products.map(product => (
              <Col key={product.id} md={4} className="mb-4">
                <Card>
                  <Card.Img 
                    variant="top" 
                    src={product.images[0]?.image || 'https://via.placeholder.com/300'} 
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.short_description}</Card.Text>
                    <Card.Text className="fw-bold">₹{product.price}</Card.Text>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
