import React from 'react';
import { Card, ListGroup, Badge, Container, Row, Col } from 'react-bootstrap';
import { 
  FaHeartbeat, FaAppleAlt, FaRunning, FaSmokingBan, FaBed, 
  FaClinicMedical, FaUserMd, FaBrain, FaShieldAlt, FaSyringe 
} from 'react-icons/fa';

const Prevencion = () => {
  return (
    <Container className="prevencion-container py-4">
      <h2 className="text-center mb-4 text-primary">
        <FaHeartbeat className="me-2" />
        Medidas de Prevención para una Vida Saludable
      </h2>
      
      <Row className="g-4">
        {/* Estilo de vida saludable */}
        <Col md={6}>
          <Card className="h-100 shadow-sm border-primary">
            <Card.Header className="bg-primary text-white d-flex align-items-center">
              <FaAppleAlt className="me-2" />
              <strong>Estilo de Vida Saludable</strong>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  <Badge bg="success" className="me-3 p-2">1</Badge>
                  <div>
                    <strong>Nutrición balanceada</strong>
                    <p className="mb-0 text-muted small">Consumir 5 porciones diarias de frutas y verduras, granos integrales y proteínas magras</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <Badge bg="info" className="me-3 p-2">2</Badge>
                  <div>
                    <strong>Actividad física</strong>
                    <p className="mb-0 text-muted small">
                      <FaRunning className="me-1" />
                      Mínimo 150 minutos semanales de ejercicio moderado o 75 minutos de actividad intensa
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <Badge bg="warning" className="me-3 p-2">3</Badge>
                  <div>
                    <strong>Evitar hábitos nocivos</strong>
                    <p className="mb-0 text-muted small">
                      <FaSmokingBan className="me-1" />
                      No fumar y limitar el alcohol a 1 bebida/día (mujeres) o 2 bebidas/día (hombres)
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <Badge bg="secondary" className="me-3 p-2">4</Badge>
                  <div>
                    <strong>Descanso adecuado</strong>
                    <p className="mb-0 text-muted small">
                      <FaBed className="me-1" />
                      7-9 horas de sueño reparador cada noche para adultos
                    </p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-muted small">
              Estos hábitos reducen hasta un 80% el riesgo de enfermedades crónicas
            </Card.Footer>
          </Card>
        </Col>

        {/* Chequeos médicos */}
        <Col md={6}>
          <Card className="h-100 shadow-sm border-info">
            <Card.Header className="bg-info text-white d-flex align-items-center">
              <FaClinicMedical className="me-2" />
              <strong>Chequeos Médicos Preventivos</strong>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h5 className="d-flex align-items-center text-info">
                  <FaUserMd className="me-2" />
                  Exámenes generales
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Badge pill bg="light" text="dark" className="me-2">✓</Badge>
                    <strong>Presión arterial:</strong> Cada 1-2 años desde los 18 años
                  </li>
                  <li className="mb-2">
                    <Badge pill bg="light" text="dark" className="me-2">✓</Badge>
                    <strong>Colesterol:</strong> Cada 4-6 años desde los 20 años (anual si hay factores de riesgo)
                  </li>
                  <li className="mb-2">
                    <Badge pill bg="light" text="dark" className="me-2">✓</Badge>
                    <strong>Glucosa:</strong> Cada 3 años a partir de los 45 años (antes si hay sobrepeso)
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="d-flex align-items-center text-info">
                  <FaUserMd className="me-2" />
                  Para mujeres
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Badge pill bg="light" text="dark" className="me-2">✓</Badge>
                    <strong>Mamografía:</strong> Cada 1-2 años desde los 40-50 años
                  </li>
                  <li className="mb-2">
                    <Badge pill bg="light" text="dark" className="me-2">✓</Badge>
                    <strong>Papanicolaou:</strong> Cada 3 años desde los 21 años
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="d-flex align-items-center text-info">
                  <FaUserMd className="me-2" />
                  Para hombres
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Badge pill bg="light" text="dark" className="me-2">✓</Badge>
                    <strong>Próstata:</strong> Discutir con médico a partir de los 50 años (45 si hay antecedentes familiares)
                  </li>
                </ul>
              </div>
            </Card.Body>
            <Card.Footer className="text-muted small">
              La frecuencia puede variar según factores de riesgo individuales
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      {/* Consejos adicionales con íconos */}
      <Card className="mt-4 border-success shadow">
        <Card.Header className="bg-success text-white">
          <strong>Consejos Adicionales</strong>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <div className="p-3 bg-light rounded mb-3">
                <h5 className="text-success d-flex align-items-center">
                  <FaBrain className="me-2" />
                  Salud Mental
                </h5>
                <ul>
                  <li>Practicar técnicas de relajación</li>
                  <li>Mantener conexiones sociales</li>
                  <li>Buscar ayuda profesional cuando sea necesario</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 bg-light rounded mb-3">
                <h5 className="text-success d-flex align-items-center">
                  <FaShieldAlt className="me-2" />
                  Prevención de Lesiones
                </h5>
                <ul>
                  <li>Usar cinturón de seguridad</li>
                  <li>Usar casco al andar en bicicleta</li>
                  <li>Protecciones en deportes de riesgo</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 bg-light rounded mb-3">
                <h5 className="text-success d-flex align-items-center">
                  <FaSyringe className="me-2" />
                  Vacunación
                </h5>
                <ul>
                  <li>Mantener al día el calendario de vacunas</li>
                  <li>Gripe anual para grupos de riesgo</li>
                  <li>Vacuna contra el COVID-19 y refuerzos</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Prevencion;
