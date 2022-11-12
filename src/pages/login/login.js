import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInputChange} value={model.email} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" onChange={handleInputChange} value={model.password} />
            </div>

            <label htmlFor="recordar">
                <input checked={model.recordar} type="checkbox" name="recordar" id="recordar" onChange={handleInputChange}/>
            </label>
            
            <input type="submit" value="Ingresar" />
        </form>
    );
}
export default Login;