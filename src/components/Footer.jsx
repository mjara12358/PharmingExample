import React from 'react';
import imgfooter from '/src/assets/footer.png'; 
import footerdos from '/src/assets/footerdos.png'; 

const Footer = () => {
  return (
    <footer className='footer'>
        <div style={styles.separator}></div> {/* Línea separadora con sombra */}
        <a href="https://www.eltiempo.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgfooter} alt="footer" style={{ width: '100%' }}/>
        </a>
        <div style={styles.separatorDos}></div> {/* Línea separadora simple */}
        <a target="_blank" rel="noopener noreferrer">
            <img src={footerdos} alt="footer" style={{ width: '100%' }}/>
        </a>
    </footer>
  )
}

const styles = {
  separator: {
    width: '100%',
    height: '2px',
    backgroundColor: '#ccc', // Color de la línea
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)', // Sombra
    marginBottom: '20px', // Espacio entre la línea y el contenido siguiente
  },
  separatorDos: {
    width: '100%',
    height: '3px',
    backgroundColor: '#0B5891', // Color de la línea
    marginBottom: '0px', // Espacio entre la línea y el contenido siguiente
  }
};

export default Footer;
