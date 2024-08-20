import React, { useState } from 'react';
import navdos from '/src/assets/navdos.png'; 
import port from '/src/assets/port1.png'; 
import aut from '/src/assets/autor1.png'; 
import elem1 from '/src/assets/elem1not1.png'; 
import elem2 from '/src/assets/elem2not1.png'; 
import elem3 from '/src/assets/elem3not1.png'; 
import elem4 from '/src/assets/elem4not1.png';
import elem5 from '/src/assets/elem5not1.png';
import elem6 from '/src/assets/elem6not1.png'; 
import elem7 from '/src/assets/elem7not1.png'; 
import elem8 from '/src/assets/elem8not1.png'; 
import elem9 from '/src/assets/elem9not1.png';
import elem10 from '/src/assets/elem10not1.png';
import elem11 from '/src/assets/elem11not1.png'; 
import elem12 from '/src/assets/elem12not1.png';
import ModalFace from './ModalFace.jsx';

function NotiUno({ categoria, titulo, detalle }) {
    const [showMore, setShowMore] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleVerMasClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleModalAccept = () => {
        setIsModalOpen(false);
        setShowMore(true);
    };

    return (
        <div className="noti-uno">
            <a href="https://www.eltiempo.com/economia" target="_blank" rel="noopener noreferrer">
                <img src={navdos} alt="navdos" className='navdos'/>
            </a>
            <div style={{ display: 'flex', width: '100%' }}>
                <div className='noti-izq'>
                    {/* <p>Info 1</p> */}
                    <a href="https://bydauto.com.co/modelo/byd-dolphin-ev/byd-i-dolphin/?utm_source=ELTIEMPO&utm_medium=DMP&utm_campaign=PERFORMANCECEET&utm_campaign=MOTORYSA_BYD" target="_blank" rel="noopener noreferrer">
                        <img src={elem4} alt="publi1" style={{ width: '95%', marginTop: '2px' }} />
                    </a>
                    <br />
                    <a href="https://www.whatsapp.com/channel/0029VZzpVDREKyZEhMhFIr3F" target="_blank" rel="noopener noreferrer">
                        <img src={elem5} alt="publi2" style={{ width: '90%', marginTop: '290px' }} />
                    </a>
                    <br />
                    {/* Contenido adicional visible solo si se hace clic en Ver Más */}
                    {showMore && (
                    <>
                        <a href="https://www.tiendaeltiempo.com/colecciones/novelas-de-aventura?utm_source=Autopauta&utm_medium=&utm_campaign=Coleccion_novelas_de_aventura&utm_content=300x100" target="_blank" rel="noopener noreferrer">
                            <img src={elem6} alt="publi3" style={{ width: '80%', marginTop: '300px'  }} />
                        </a>
                        <a href="https://bydauto.com.co/modelo/byd-dolphin-ev/byd-i-dolphin/?utm_source=ELTIEMPO&utm_medium=DMP&utm_campaign=PERFORMANCECEET&utm_campaign=MOTORYSA_BYD" target="_blank" rel="noopener noreferrer">
                            <img src={elem8} alt="publi4" style={{ width: '90%', marginTop: '400px'  }} />
                        </a>
                        <br />
                        <a href="https://bydauto.com.co/modelo/byd-dolphin-ev/byd-i-dolphin/?utm_source=ELTIEMPO&utm_medium=DMP&utm_campaign=PERFORMANCECEET&utm_campaign=MOTORYSA_BYD" target="_blank" rel="noopener noreferrer">
                            <img src={elem11} alt="publi5" style={{ width: '95%', marginTop: '500px'  }} />
                        </a>
                        <br />
                    </>
                    )}
                </div>
                <div className='noti-med'>
                    <img src={port} alt="El Tiempo" className="imgport" />
                    <a href="https://www.eltiempo.com/noticias/lady-daniela-ortiz-gongora" target="_blank" rel="noopener noreferrer">
                        <img src={aut} alt="Autor" className="imgport" />
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={elem1} alt="Autor" className="imgelem1" />
                        <p id='parrafointro' className='noti-uno-text'>
                            n la actualidad existen varias alternativas para <b>trabajar</b>, 
                            una de ellas es hacerlo desde la <b>comodidad de su casa</b>. Sin embargo, 
                            aún está la percepción de que encontrar este tipo de empleos es difícil, 
                            por esta razón, a continuación le contamos sobre algunas <b>ofertas</b>.
                        </p>
                    </div>
                    
                    {/* Botón Ver Más */}
                    {!showMore && (
                        <button onClick={handleVerMasClick} className="ver-mas-btn" style={{ marginTop: '10px' }}>
                            Ver más
                        </button>
                    )}

                    {/* Contenido adicional visible solo si se hace clic en Ver Más */}
                    {showMore && (
                    <>
                        <h3 className='noti-uno-title'>1. Marco Learning</h3>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Este empleo está dirigido a personas que tienen experiencia como <b>correctores y 
                            evaluadores de trabajos académicos</b>. Usted podrá trabajar desde su casa de manera 
                            online.
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Además, su labor sería proporcionar la retroalimentación basada en criterios 
                            predefinidos.
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Si desea conocer más información sobre esta plataforma puede ingresar 
                            <a className='noti-uno-a' href="https://marcolearning.com/become-a-grader/" target="_blank" rel="noopener noreferrer"> aquí</a>.
                        </p>
                        <br />

                        <h3 className='noti-uno-title'>2. Toloka</h3>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Con esta plataforma, usted puede ganar dinero cuando tenga 
                            espacios libres, pues Toloka ofrece una amplia gama de tareas, 
                            las cuales puede ejecutar en cualquier momento y lugar.
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            El trabajo consta de <b>verificar algunos datos</b> y hasta la 
                            <b>moderación de contenido</b>. Añadiendo que la plataforma reporta 
                            ganancias promedio de <b>15.000 dólares</b> al año.
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Dé clic <a className='noti-uno-a' href="https://toloka.ai/tolokers/es/" target="_blank" rel="noopener noreferrer"> aquí </a>
                            para conocer los detalles. 
                        </p>
                        <br />

                        <h3 className='noti-uno-title'>3. Nexrep</h3>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Nexrep ofrece la oportunidad de trabajar en el área de atención 
                            al cliente.
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Su horario es  flexible y a tiempo parcial. Sin embargo, 
                            tenga en cuenta que aunque las horas de trabajo se pueden ajustar 
                            conforme a sus necesidades, <b>las ganancias no</b>.
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Si desea conocer más información sobre este recurso de empleo, ingrese 
                            <a className='noti-uno-a' href="https://nexrep.com/category/work-from-home-tips/work-from-home/" target="_blank" rel="noopener noreferrer"> aquí</a>.
                        </p>
                        <br />

                        <h3 className='noti-uno-title'>4. Welocalize</h3>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Este trabajo se enfoca en la evaluación de calidad de 
                            <b>búsqueda por internet</b>, tiene que ver con proporcionar 
                            retroalimentación sobre los resultados de búsqueda en la web. 
                            Asimismo, tenga en cuenta que todo depende de su ubicación 
                            geográfica. 
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            <a className='noti-uno-a' href="https://jobs.lever.co/welocalize" target="_blank" rel="noopener noreferrer">Aquí </a>
                            puede conocer los términos y condiciones para hacer parte de este empleo. 
                        </p>
                        <br />

                        <h3 className='noti-uno-title'>5. Arise</h3>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Arise le brinda la oportunidad de ser representante de servicio 
                            al cliente, su función será comunicarse con las personas que lo 
                            requieran para resolver consultas y quejas. 
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Según su portal web, no necesita experiencia ni título universitario. 
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Conozca la plataforma
                            <a className='noti-uno-a' href="https://www.arise.com/" target="_blank" rel="noopener noreferrer"> aquí</a>.
                        </p>
                        <img src={elem2} alt="ImgArise" style={{ width: '95%' }} />
                        <br />

                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            Las opciones anteriormente descritas se encargan de 
                            ofrecer una amplia gama de vacantes de trabajo remoto, 
                            añadiendo que proporcionan <b>recursos y herramientas</b>,
                             las cuales facilitan el proceso de empleo y las labores. 
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            LADY DANIELA ORTIZ GÓNGORA 
                        </p>
                        <p className='noti-uno-text' style={{ marginLeft: '20px' }}>
                            REDACCIÓN ÚLTIMAS NOTICIAS  
                        </p>
                        <a href="https://www.eltiempo.com/bogota/el-distrito-de-busca-profesionales-en-lengua-de-senas-enfermeria-y-mediadores-858644" target="_blank" rel="noopener noreferrer">
                            <img src={elem3} alt="MasNot" style={{ width: '95%' }}/>
                        </a>
                    </>
                    )}
                </div>
                <div className='noti-der'>
                    {/* <p>Info 3</p> */}
                    <a href="https://www.eltiempo.com/zona-usuario/boletines" target="_blank" rel="noopener noreferrer">
                        <img src={elem7} alt="publi6" style={{ width: '95%', marginTop: '200px'  }} />
                    </a>
                    <br />
                    <a href="https://bydauto.com.co/modelo/byd-dolphin-ev/byd-i-dolphin/?utm_source=ELTIEMPO&utm_medium=DMP&utm_campaign=PERFORMANCECEET&utm_campaign=MOTORYSA_BYD" target="_blank" rel="noopener noreferrer">
                        <img src={elem9} alt="publi7" style={{ width: '80%', marginTop: '300px'  }} />
                    </a>
                    <br />
                    {/* Contenido adicional visible solo si se hace clic en Ver Más */}
                    {showMore && (
                    <>
                        <a href="https://www.futbolred.com/copa-libertadores/jorge-almiron-ya-palpita-el-junior-vs-colo-colo-en-barranquilla-dice-que-es-una-final-218432" target="_blank" rel="noopener noreferrer">
                            <img src={elem10} alt="publi8" style={{ width: '95%', marginTop: '600px'  }} />
                        </a>
                        <br />
                        <a href="https://www.futbolred.com/copa-libertadores/jorge-almiron-ya-palpita-el-junior-vs-colo-colo-en-barranquilla-dice-que-es-una-final-218432" target="_blank" rel="noopener noreferrer">
                            <img src={elem12} alt="publi9" style={{ width: '95%', marginTop: '600px'  }} />
                        </a>
                        <br />
                    </>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <ModalFace onClose={handleModalClose} onAccept={handleModalAccept} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotiUno;
