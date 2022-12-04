import { useState } from "react";
import './Login.css'

const Login = () => {
    const[model, setModel] = useState({
        email: '',
        password: '',
        recordar: false
    });
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    // const email = useFormInput('');
    // const password = useFormInput('');

    const handleSubmit = (event) => {
        console.log(email, password);
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setModel({ [name]: value});

        console.log(model);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

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
                    <input type="text" name="" required="" onChange={handleEmailChange} value={email} />
                    <label>Correo</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" onChange={handlePasswordChange} value={password} />
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