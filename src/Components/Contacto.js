import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert, Container } from 'react-bootstrap';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaComment } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    consulta: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData.consulta) newErrors.consulta = 'La consulta es requerida';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      setSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        consulta: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{ color: '#2c3e50' }}>
        Contáctenos
      </h2>

      {submitted && (
        <Alert variant="success" className="mb-4" onClose={() => setSubmitted(false)} dismissible>
          ¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto.
        </Alert>
      )}

      <Row className="g-4">
        <Col lg={6}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Title className="mb-4 d-flex align-items-center">
                <FaPaperPlane className="me-2 text-primary" />
                Formulario de Contacto
              </Card.Title>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNombre" className="mb-3">
                  <Form.Label className="d-flex align-items-center">
                    <FaUser className="me-2 text-muted" />
                    Nombre completo
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingrese su nombre"
                    isInvalid={!!errors.nombre}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.nombre}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label className="d-flex align-items-center">
                    <MdEmail className="me-2 text-muted" />
                    Correo electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingrese su email"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formConsulta" className="mb-4">
                  <Form.Label className="d-flex align-items-center">
                    <FaComment className="me-2 text-muted" />
                    Consulta
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="consulta"
                    value={formData.consulta}
                    onChange={handleChange}
                    placeholder="Escriba su consulta aquí"
                    isInvalid={!!errors.consulta}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.consulta}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    <FaPaperPlane className="me-2" />
                    Enviar consulta
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Title className="mb-4 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 text-primary" />
                Información de Contacto
              </Card.Title>
              
              <div className="contact-info">
                <div className="d-flex align-items-start mb-4">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary me-3">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h5 className="mb-1">Teléfono</h5>
                    <p className="mb-0 text-muted">+1 234 567 890</p>
                    <p className="mb-0 text-muted">+1 987 654 321</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary me-3">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <p className="mb-0 text-muted">info@salud.com</p>
                    <p className="mb-0 text-muted">emergencias@salud.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary me-3">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h5 className="mb-1">Dirección</h5>
                    <p className="mb-0 text-muted">Calle Salud 123</p>
                    <p className="mb-0 text-muted">Ciudad, País</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Horario de atención</h5>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">Lunes a Viernes: 8:00 AM - 8:00 PM</li>
                    <li className="mb-2">Sábados: 9:00 AM - 2:00 PM</li>
                    <li>Domingos: Solo emergencias</li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <style jsx>{`
        .icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-info h5 {
          color: #2c3e50;
          font-size: 1.1rem;
        }
      `}</style>
    </Container>
  );
};

export default Contacto;