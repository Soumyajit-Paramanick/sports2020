import { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../config'; // ✅ Imported centralized config
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // ✅ Used config variable here
    axios.get(`${API.PRODUCTS}?limit=12`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    axios.get(API.HOMEPAGE_BANNERS)
      .then(response => setBanners(response.data))
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  // Randomly change banner every 1.5 seconds
  useEffect(() => {
    if (banners.length > 1) {
      intervalRef.current = setInterval(() => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * banners.length);
        } while (nextIndex === currentIndex && banners.length > 1);
        setCurrentIndex(nextIndex);
      }, 1500);
      return () => clearInterval(intervalRef.current);
    }
  }, [banners, currentIndex]);

  return (
    <>
      <Helmet>
        <title>Best Cricket Products Online | Cricket Shop</title>
        <meta name="description" content="If you want to get the best cricket related product, this is the best destination. Everything you get at the right price." />
        <meta name="keywords" content="cricket, cricket shop, cricket products, best cricket gear, buy cricket equipment, cricket bats, cricket balls, cricket accessories, best price" />
      </Helmet>
      <Container>
        <Row className="my-4">
          <Col>
            {banners.length > 0 && (
              <div style={{ position: 'relative' }}>
                <Carousel
                  fade
                  activeIndex={currentIndex}
                  controls={false}
                  indicators={false}
                  interval={null}
                >
                  {banners.map((banner, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100 banner-img-responsive"
                        src={banner.image}
                        alt={`Banner ${index + 1}`}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxHeight: '400px',
                          objectFit: 'cover',
                          borderRadius: '0.5rem',
                          aspectRatio: banner.width && banner.height ? `${banner.width} / ${banner.height}` : undefined
                        }}
                      />
                      {banner.message && (
                        <Carousel.Caption>
                          <h5>{banner.message}</h5>
                        </Carousel.Caption>
                      )}
                    </Carousel.Item>
                  ))}
                </Carousel>
                <style>{`
                  @media (max-width: 768px) {
                    .banner-img-responsive {
                      max-height: 180px !important;
                    }
                  }
                  @media (min-width: 769px) {
                    .banner-img-responsive {
                      max-height: 400px !important;
                    }
                  }
                `}</style>
              </div>
            )}
          </Col>
        </Row>

        <Row className="my-4">
          <h2 className="text-center mb-4">Top Products</h2>
          {products.map(product => (
            <Col key={product.id} md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={product.images[0]?.image || 'https://via.placeholder.com/300'} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>₹{product.price}</Card.Text>
                  <Link to={`/products/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;

