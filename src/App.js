import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Componentes de las secciones
import Inicio from './Components/Inicio';
import Enfermedades from './Components/Enfermedades';
import Prevencion from './Components/Prevencion';
import Contacto from './Components/Contacto';
import Tratamiento from './Components/Tratamiento';
import Citas from './Components/Citas';
import Estadisticas from './Components/Estadisticas';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  const renderTab = () => {
    switch (activeTab) {
      case 'inicio':
        return <Inicio />;
      case 'enfermedades':
        return <Enfermedades />;
      case 'prevencion':
        return <Prevencion />;
      case 'contacto':
        return <Contacto />;
      case 'tratamiento':
        return <Tratamiento />;
      case 'citas':
        return <Citas />;
      case 'estadisticas':
        return <Estadisticas />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header con gradiente */}
      <header className="p-3 text-white" style={{
        background: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 className="text-center" style={{ 
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          fontWeight: '600',
          letterSpacing: '1px'
        }}>Información Preventiva en Salud</h1>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </header>

      <Container fluid className="flex-grow-1 p-0">
        <Row className="g-0">
          {/* Barra de navegación lateral mejorada */}
          <Col md={3} lg={2} className="sidebar p-0" style={{
            background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
            borderRight: '1px solid rgba(0, 0, 0, 0.1)',
            minHeight: 'calc(100vh - 112px)'
          }}>
            <Nav className="flex-column p-3 sticky-top" style={{ top: '20px' }}>
              <Nav.Link 
                active={activeTab === 'inicio'} 
                onClick={() => setActiveTab('inicio')}
                className={`mb-2 nav-link-custom ${activeTab === 'inicio' ? 'active' : ''}`}
              >
                <i className="bi bi-house-door me-2"></i>Inicio
              </Nav.Link>
              <Nav.Link 
                active={activeTab === 'enfermedades'} 
                onClick={() => setActiveTab('enfermedades')}
                className={`mb-2 nav-link-custom ${activeTab === 'enfermedades' ? 'active' : ''}`}
              >
                <i className="bi bi-heart-pulse me-2"></i>Enfermedades Comunes
              </Nav.Link>
              <Nav.Link 
                active={activeTab === 'prevencion'} 
                onClick={() => setActiveTab('prevencion')}
                className={`mb-2 nav-link-custom ${activeTab === 'prevencion' ? 'active' : ''}`}
              >
                <i className="bi bi-shield-check me-2"></i>Prevención
              </Nav.Link>
              <Nav.Link 
                active={activeTab === 'tratamiento'} 
                onClick={() => setActiveTab('tratamiento')}
                className={`mb-2 nav-link-custom ${activeTab === 'tratamiento' ? 'active' : ''}`}
              >
                <i className="bi bi-capsule me-2"></i>Tratamiento
              </Nav.Link>
              <Nav.Link 
                active={activeTab === 'citas'} 
                onClick={() => setActiveTab('citas')}
                className={`mb-2 nav-link-custom ${activeTab === 'citas' ? 'active' : ''}`}
              >
                <i className="bi bi-calendar-check me-2"></i>Citas
              </Nav.Link>
              <Nav.Link 
                active={activeTab === 'estadisticas'} 
                onClick={() => setActiveTab('estadisticas')}
                className={`mb-2 nav-link-custom ${activeTab === 'estadisticas' ? 'active' : ''}`}
              >
                <i className="bi bi-graph-up me-2"></i>Estadísticas
              </Nav.Link>
              <Nav.Link 
                active={activeTab === 'contacto'} 
                onClick={() => setActiveTab('contacto')}
                className={`mb-2 nav-link-custom ${activeTab === 'contacto' ? 'active' : ''}`}
              >
                <i className="bi bi-envelope me-2"></i>Contacto
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contenido principal */}
          <Col md={9} lg={10} className="main-content p-4" style={{ 
            backgroundColor: '#fefefe',
            boxShadow: 'inset 5px 0 15px -5px rgba(0, 0, 0, 0.05)'
          }}>
            {renderTab()}
          </Col>
        </Row>
      </Container>

      {/* Pie de página con gradiente */}
      <footer className="text-white text-center p-3 mt-auto" style={{
        background: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <p className="mb-0">© {new Date().getFullYear()} Información en Salud - Todos los derechos reservados</p>
        <p className="mb-0">Este sitio es solo para fines informativos y no sustituye el consejo médico profesional.</p>
      </footer>
    </div>
  );
}

export default App;