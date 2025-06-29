import React from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';

const Enfermedades = () => {
  // URLs de las imágenes
  const imageUrls = {
    diabetes: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    hypertension: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    cancer: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    heart: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  };

  // Estilos personalizados
  const styles = {
    header: {
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    commonDiseases: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '30px',
      borderLeft: '5px solid #28a745'
    },
    highRiskDiseases: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '10px',
      borderLeft: '5px solid #dc3545'
    },
    accordionHeader: {
      backgroundColor: '#e9ecef',
      fontWeight: 'bold'
    },
    symptomList: {
      backgroundColor: '#e8f4f8',
      padding: '15px',
      borderRadius: '5px'
    },
    recommendationList: {
      backgroundColor: '#f5e8f8',
      padding: '15px',
      borderRadius: '5px'
    }
  };

  return (
    <div className="container mt-4">
      {/* Encabezado con estilo */}
      <div style={styles.header}>
        <h1 className="text-center">Información sobre Enfermedades</h1>
        <p className="text-center">Conoce los síntomas, tratamientos y recomendaciones para diversas condiciones de salud</p>
      </div>

      {/* Sección de Enfermedades Comunes */}
      <div style={styles.commonDiseases}>
        <h2 className="mb-4 text-success">
          <i className="fas fa-heartbeat me-2"></i>
          Enfermedades Comunes
        </h2>
        
        <Accordion defaultActiveKey="0">
          <Card className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header style={styles.accordionHeader}>
                <i className="fas fa-syringe me-2 text-primary"></i>
                Diabetes
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={4}>
                    <img 
                      src={imageUrls.diabetes} 
                      alt="Diabetes" 
                      className="img-fluid rounded mb-3"
                      style={{border: '3px solid #6a11cb', maxHeight: '250px', objectFit: 'cover'}}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <p>La diabetes es una enfermedad metabólica caracterizada por niveles elevados de glucosa en sangre.</p>
                      <h5 className="text-primary">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        Síntomas:
                      </h5>
                      <ul style={styles.symptomList}>
                        <li>Sed excesiva</li>
                        <li>Micción frecuente</li>
                        <li>Pérdida de peso inexplicable</li>
                        <li>Visión borrosa</li>
                        <li>Cicatrización lenta de heridas</li>
                      </ul>
                      <h5 className="text-success">
                        <i className="fas fa-lightbulb me-2"></i>
                        Recomendaciones:
                      </h5>
                      <ul style={styles.recommendationList}>
                        <li>Monitoreo regular de glucosa</li>
                        <li>Dieta balanceada baja en azúcares</li>
                        <li>Ejercicio regular</li>
                      </ul>
                    </Card.Body>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Card>

          <Card className="mb-3">
            <Accordion.Item eventKey="1">
              <Accordion.Header style={styles.accordionHeader}>
                <i className="fas fa-heartbeat me-2 text-danger"></i>
                Hipertensión Arterial
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={4}>
                    <img 
                      src={imageUrls.hypertension} 
                      alt="Hipertensión" 
                      className="img-fluid rounded mb-3"
                      style={{border: '3px solid #2575fc', maxHeight: '250px', objectFit: 'cover'}}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <p>La hipertensión arterial es una condición en la que la fuerza de la sangre contra las paredes arteriales es demasiado alta.</p>
                      <h5 className="text-primary">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        Síntomas:
                      </h5>
                      <ul style={styles.symptomList}>
                        <li>Dolor de cabeza intenso</li>
                        <li>Mareos o vértigo</li>
                        <li>Zumbido en los oídos</li>
                        <li>Visión borrosa o doble</li>
                        <li>Hemorragia nasal</li>
                      </ul>
                      <h5 className="text-success">
                        <i className="fas fa-lightbulb me-2"></i>
                        Recomendaciones:
                      </h5>
                      <ul style={styles.recommendationList}>
                        <li>Reducir el consumo de sal</li>
                        <li>Mantener un peso saludable</li>
                        <li>Realizar ejercicio regularmente</li>
                        <li>Evitar el consumo excesivo de alcohol</li>
                        <li>Controlar el estrés</li>
                      </ul>
                    </Card.Body>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        </Accordion>
      </div>

      {/* Nueva Sección de Enfermedades de Alto Riesgo */}
      <div style={styles.highRiskDiseases}>
        <h2 className="mb-4 text-danger">
          <i className="fas fa-exclamation-triangle me-2"></i>
          Enfermedades de Alto Riesgo
        </h2>
        
        <Accordion>
          <Card className="mb-3">
            <Accordion.Item eventKey="2">
              <Accordion.Header style={styles.accordionHeader}>
                <i className="fas fa-lungs me-2 text-warning"></i>
                Cáncer de Pulmón
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={4}>
                    <img 
                      src={imageUrls.cancer} 
                      alt="Cáncer de Pulmón" 
                      className="img-fluid rounded mb-3"
                      style={{border: '3px solid #fd7e14', maxHeight: '250px', objectFit: 'cover'}}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <p>El cáncer de pulmón es un tipo de cáncer que comienza en los pulmones y puede diseminarse a otros órganos.</p>
                      <h5 className="text-primary">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        Síntomas:
                      </h5>
                      <ul style={styles.symptomList}>
                        <li>Tos persistente que empeora</li>
                        <li>Tos con sangre</li>
                        <li>Dolor en el pecho</li>
                        <li>Pérdida de peso inexplicable</li>
                        <li>Fatiga constante</li>
                      </ul>
                      <h5 className="text-success">
                        <i className="fas fa-lightbulb me-2"></i>
                        Recomendaciones:
                      </h5>
                      <ul style={styles.recommendationList}>
                        <li>Evitar el tabaco en todas sus formas</li>
                        <li>Evitar la exposición al radón y a carcinógenos</li>
                        <li>Consumir una dieta rica en frutas y verduras</li>
                        <li>Realizar chequeos regulares si se es fumador</li>
                      </ul>
                    </Card.Body>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Card>

          <Card className="mb-3">
            <Accordion.Item eventKey="3">
              <Accordion.Header style={styles.accordionHeader}>
                <i className="fas fa-heart me-2 text-danger"></i>
                Enfermedad Coronaria
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={4}>
                    <img 
                      src={imageUrls.heart} 
                      alt="Enfermedad Coronaria" 
                      className="img-fluid rounded mb-3"
                      style={{border: '3px solid #dc3545', maxHeight: '250px', objectFit: 'cover'}}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <p>La enfermedad coronaria ocurre cuando las arterias que suministran sangre al músculo cardíaco se endurecen y estrechan.</p>
                      <h5 className="text-primary">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        Síntomas:
                      </h5>
                      <ul style={styles.symptomList}>
                        <li>Dolor en el pecho (angina)</li>
                        <li>Falta de aliento</li>
                        <li>Infarto al corazón</li>
                        <li>Fatiga extrema con el esfuerzo</li>
                      </ul>
                      <h5 className="text-success">
                        <i className="fas fa-lightbulb me-2"></i>
                        Recomendaciones:
                      </h5>
                      <ul style={styles.recommendationList}>
                        <li>Dejar de fumar</li>
                        <li>Controlar la presión arterial</li>
                        <li>Mantener niveles saludables de colesterol</li>
                        <li>Hacer ejercicio regularmente</li>
                        <li>Mantener una dieta saludable para el corazón</li>
                      </ul>
                    </Card.Body>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default Enfermedades;