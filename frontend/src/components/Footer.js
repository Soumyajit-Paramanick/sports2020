import { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '6290210010';
  const email = 'sales@sports2020.co.in';

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container>
        <Row className="g-0">
          <Col xs={12} className="text-center mb-2">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
              <span className="d-flex align-items-center">
                <FaPhone className="me-2 text-success" />
                <a href={`tel:${phoneNumber}`} className="text-white text-decoration-none">
                  +91 {phoneNumber}
                </a>
              </span>

              <span className="d-flex align-items-center">
                <FaWhatsapp className="me-2 text-success" />
                <a
                  href={`https://wa.me/91${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  WhatsApp
                </a>
              </span>

              <span className="d-flex align-items-center">
                <FaEnvelope className="me-2 text-danger" />
                <a href={`mailto:${email}`} className="text-white text-decoration-none">
                  {email}
                </a>
              </span>
            </div>
          </Col>

          <Col xs={12} className="text-center mb-2">
            <p className="mb-1">
              <strong>Note:</strong> 7 days{' '}
              <button onClick={handleShow} className="btn btn-link text-white p-0 text-decoration-underline">
                return policy
              </button>{' '}
              is applicable over all products.
            </p>
            <p className="mb-0">
              © {new Date().getFullYear()} sports2020. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Modal for Return Policy */}
      <Modal show={showModal} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Return Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We offer a 7-day return policy on all products. To be eligible for a return, your item
            must be unused and in the same condition that you received it. It must also be in the
            original packaging.
          </p>
          <p>
            To complete your return, we require a receipt or proof of purchase. Once your return is
            received and inspected, we will notify you of the approval or rejection of your refund.
          </p>
          <p>
            If approved, your refund will be processed, and a credit will automatically be applied
            to your original method of payment within 15 days.
          </p>
          <p>
            Please note that return shipping costs are the responsibility of the customer unless the
            item was defective or incorrect.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Floating WhatsApp Chat Icon */}
      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat Now"
      >
        <FaWhatsapp size={28} />
        <span className="chat-text">Chat Now</span>
      </a>

      <style>{`
        footer {
          position: relative;
          bottom: 0;
          width: 100%;
        }
        @media (max-width: 768px) {
          .d-flex {
            flex-direction: column;
            gap: 0.5rem !important;
          }
        }
        a:hover {
          color: #25d366 !important;
        }

        /* Floating WhatsApp Button */
        .floating-whatsapp {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          border-radius: 50px;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 1000;
          text-decoration: none;
          font-weight: bold;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          animation: pulse 2s infinite;
          transition: transform 0.2s ease-in-out;
        }
        .floating-whatsapp:hover {
          transform: scale(1.05);
          text-decoration: none;
        }
        .chat-text {
          display: inline;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @media (max-width: 576px) {
          .chat-text {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;


