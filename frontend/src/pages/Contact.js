import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const phoneNumber = '6290210010';
  const email = 'sales@sports2020.co.in';
  const whatsappNumber = `91${phoneNumber}`;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, query } = formData;
    const message = `Hello, I have a query:%0AName: ${name}%0APhone: ${phone}%0AQuery: ${query}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Container className="my-4">
      <Row>
        {/* Left Column: Contact Information */}
        <Col xs={12} md={6}>
          <h1>Contact Information</h1>

          <div className="contact-method">
            <FaPhone className="contact-icon" />
            <a href={`tel:${phoneNumber}`} className="contact-link">
              +91 {phoneNumber}
            </a>
            <span className="ms-2">(Click to call)</span>
          </div>

          <div className="contact-method mt-2">
            <FaWhatsapp className="contact-icon whatsapp-icon" />
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-method mt-2">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${email}`} className="contact-link">
              {email}
            </a>
          </div>
        </Col>

        {/* Right Column: Centered Form */}
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <Form className="mt-4 w-100" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
            <h4 className="text-center">Send us a message</h4>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Your Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formQuery">
              <Form.Label>Your Query</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message"
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Send via WhatsApp
            </Button>
          </Form>
        </Col>
      </Row>

      <style jsx>{`
        .contact-method {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .contact-icon {
          font-size: 1.2rem;
          margin-right: 10px;
        }
        .whatsapp-icon {
          color: #25D366;
        }
        .contact-link {
          color: #333;
          text-decoration: none;
        }
        .contact-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .text-center {
            text-align: center;
          }
        }
      `}</style>
    </Container>
  );
};

export default Contact;


































// import { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

// const Contact = () => {
//   const phoneNumber = '6290210010';
//   const email = 'sales@sports2020.co.in';
//   const whatsappNumber = `91${phoneNumber}`; // WhatsApp needs country code
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     query: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, phone, query } = formData;
//     const message = `Hello, I have a query:%0AName: ${name}%0APhone: ${phone}%0AQuery: ${query}`;
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <Container className="my-4">
//       <h1>Contact Information</h1>
//       <Row>
//         <Col md={6}>
//           <div className="contact-method">
//             <FaPhone className="contact-icon" />
//             <a href={`tel:${phoneNumber}`} className="contact-link">
//               +91 {phoneNumber}
//             </a>
//             <span className="ms-2">(Click to call)</span>
//           </div>

//           <div className="contact-method mt-2">
//             <FaWhatsapp className="contact-icon whatsapp-icon" />
//             <a
//               href={`https://wa.me/${whatsappNumber}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="contact-link"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>

//           <div className="contact-method mt-2">
//             <FaEnvelope className="contact-icon" />
//             <a href={`mailto:${email}`} className="contact-link">
//               {email}
//             </a>
//           </div>

//           <Form className="mt-4" onSubmit={handleSubmit}>
//             <h4>Send us a message</h4>
//             <Form.Group className="mb-3" controlId="formName">
//               <Form.Label>Your Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formPhone">
//               <Form.Label>Your Phone Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter phone number"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formQuery">
//               <Form.Label>Your Query</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Write your message"
//                 name="query"
//                 value={formData.query}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Button variant="success" type="submit">
//               Send via WhatsApp
//             </Button>
//           </Form>
//         </Col>
//       </Row>

//       <style jsx>{`
//         .contact-method {
//           display: flex;
//           align-items: center;
//           margin-bottom: 10px;
//         }
//         .contact-icon {
//           font-size: 1.2rem;
//           margin-right: 10px;
//         }
//         .whatsapp-icon {
//           color: #25D366;
//         }
//         .contact-link {
//           color: #333;
//           text-decoration: none;
//         }
//         .contact-link:hover {
//           text-decoration: underline;
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default Contact;





























// import { Container, Row, Col } from 'react-bootstrap';
// import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

// const Contact = () => {
//   const phoneNumber = '6290210010';
//   const email = 'sales@sports2020.co.in';
//   const locationUrl = 'https://www.google.com/maps/place/Invida+Solutions/@22.4916369,88.3825519,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02711553cd7063:0x7037429c50ee8311!8m2!3d22.4916369!4d88.3825519!16s%2Fg%2F1tgr_bt6?entry=ttu';

//   return (
//     <Container className="my-4">
//       <h1>Contact Us</h1>
//       <Row>
//         <Col md={6}>
//           <h3>Our Address</h3>
//           <p>
//             Invida Solutions<br />
//             22.4916369, 88.3825519<br />
//             Kolkata, India
//           </p>
          
//           <h3>Contact Information</h3>
//           <div className="contact-method">
//             <FaPhone className="contact-icon" />
//             <a href={`tel:${phoneNumber}`} className="contact-link">
//               +91 {phoneNumber}
//             </a>
//             <span className="ms-2">(Click to call)</span>
//           </div>
          
//           <div className="contact-method mt-2">
//             <FaWhatsapp className="contact-icon whatsapp-icon" />
//             <a 
//               href={`https://wa.me/91${phoneNumber}`} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="contact-link"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
          
//           <div className="contact-method mt-2">
//             <FaEnvelope className="contact-icon" />
//             <a href={`mailto:${email}`} className="contact-link">
//               {email}
//             </a>
//           </div>
//         </Col>
        
//         <Col md={6}>
//           <h3>Opening Hours</h3>
//           <p>
//             <strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM<br />
//             <strong>Saturday:</strong> 9:00 AM - 9:00 PM<br />
//             <strong>Sunday:</strong> 10:00 AM - 6:00 PM
//           </p>
          
//           <div className="mt-4">
//             <h3>Our Location</h3>
//             <div style={{ height: '300px', width: '100%' }}>
//   <iframe
//     title="Shop Location"
//     width="100%"
//     height="100%"
//     frameBorder="0"
//     scrolling="no"
//     marginHeight="0"
//     marginWidth="0"
//     src="https://maps.google.com/maps?q=22.4916369,88.3825519&z=17&output=embed"
//   ></iframe>
// </div>

//           </div>
//         </Col>
//       </Row>

//       <style jsx>{`
//         .contact-method {
//           display: flex;
//           align-items: center;
//           margin-bottom: 10px;
//         }
//         .contact-icon {
//           font-size: 1.2rem;
//           margin-right: 10px;
//         }
//         .whatsapp-icon {
//           color: #25D366;
//         }
//         .contact-link {
//           color: #333;
//           text-decoration: none;
//         }
//         .contact-link:hover {
//           text-decoration: underline;
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default Contact;
