import { useState } from "react";
import { usuarioService } from "../../services/usuario.service";
import './Login.css';
import { AuthContext } from "../../context/AuthContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { guardarSesion } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const email = useFormInput('');
    const password = useFormInput('');

    const handleSubmit = async(event) => {
        console.log(email.value, password.value);
        event.preventDefault();
        
        await usuarioService.login(email.value, password.value)
            .then((snapshot) => {
                setIsLoaded(false);
                // setProducto(snapshot);
                console.log(snapshot);
                if (snapshot?.email) {
                    guardarSesion(snapshot);
                    navigate('/cart');
                } else {
                    // setIsLoaded(false);
                    navigate('/cart');
                }
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }

    // const handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     setModel({ [name]: value});

    //     console.log(model);
    // }

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // }

    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>;
    } else if (!isLoaded) {
        return <Loader></Loader>;
    } else {
        return (

            // <form onSubmit={handleSubmit}>
            //     <div className="form-group">
            //         <label htmlFor="email">Email</label>
            //         <input type="email" name="email" id="email" onChange={handleInputChange} value={model.email} />
            //     </div>
    
            //     <div className="form-group">
            //         <label htmlFor="password">Contraseña</label>
            //         <input type="password" name="password" id="password" onChange={handleInputChange} value={model.password} />
            //     </div>
    
            //     <label htmlFor="recordar">
            //         <input checked={model.recordar} type="checkbox" name="recordar" id="recordar" onChange={handleInputChange}/>
            //     </label>
                
            //     <input type="submit" value="Ingresar" />
            // </form>
    
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        {/* <input type="text" name="" required="" onChange={handleEmailChange} value={email} /> */}
                        <input type="text" name="" required="" {...email} />
                        <label>Correo</label>
                    </div>
                    <div className="user-box">
                        {/* <input type="password" name="" required="" onChange={handlePasswordChange} value={password} /> */}
                        <input type="password" name="" required="" {...password} />
                        <label>Contraseña</label>
                    </div>
                    <button className="login-button">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Ingresar
                    </button>
                </form>
            </div>
        );
    }
    
}
export default Login;

const useFormInput = (initialValue) => {
    const[value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}