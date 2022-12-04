import { useState } from "react";
import './Login.css'

const Login = () => {
    const[model, setModel] = useState({
        email: '',
        password: '',
        recordar: false
    });

    const handleSubmit = (event) => {
        console.log(model);
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setModel({ [name]: value});

        console.log(model);
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

        <div class="login-box">
            <h2>Iniciar Sesión</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" />
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required="" />
                    <label>Password</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Ingresar
                </a>
            </form>
        </div>
    );
}
export default Login;