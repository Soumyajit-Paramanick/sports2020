import { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import API from '../config';

const About = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get(API.GALLERY)
      .then(response => setGallery(response.data))
      .catch(error => console.error('Error fetching gallery:', error));
  }, []);

  return (
    <Container className="my-5">
      {/* About Section */}
      <Row className="mb-5 justify-content-center">
        <Col md={10} className="p-4 about-box">
          <h1 className="text-center mb-4 fw-bold text-uppercase">About Us</h1>
          <p className="lead">
            Welcome to <strong className="brand-text">sports2020</strong>! We're your one-stop shop for high-quality sports equipment at prices that won't break the bank. Based right here in <strong>Kolkata</strong>, our mission is to make sports accessible to everyone, from seasoned athletes to those just starting their fitness journey.
          </p>
          <p>
            We believe that great gear shouldn't come with a hefty price tag. That's why we're committed to sourcing and selling a wide range of products—from <em>cricket bats</em> and <em>footballs</em> to <em>yoga mats</em> and <em>running shoes</em>—that meet our high standards for quality and durability.
          </p>
          <p>
            Our team is passionate about sports, and we're dedicated to providing <strong>excellent customer service</strong>. Whether you're looking for expert advice or just need help finding the right size, we're here to help you get the equipment you need to play your best.
          </p>
          <p className="mb-0">
            Thank you for choosing <strong className="brand-text">sports2020</strong>. We're proud to be a part of the sports community and look forward to serving you!
          </p>
        </Col>
      </Row>

      {/* Gallery Section */}
      <Row>
        <Col>
          <h2 className="text-center mb-4">Our Gallery</h2>
          <Row className="gallery-grid">
            {gallery.map((item, index) => (
              <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                <div className="gallery-item">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fluid
                    rounded
                    className="w-100"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="gallery-caption">{item.title}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <style>{`
        .about-box {
          background: #f8f9fa;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
        }
        .brand-text {
          color: #007bff;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-item:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.9rem;
        }
      `}</style>
    </Container>
  );
};

export default About;

