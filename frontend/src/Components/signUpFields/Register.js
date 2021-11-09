import { useState } from 'react';
import fieldsStyle from '../signUpFields/Register.module.css'
import MiniSpinner from '../spinners/MiniSpinner';
import { connect } from 'react-redux'

const Register = (props) => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cellphone, setCellPhone] = useState("");
    const [bornYear, setBornYear] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    const inputUser = form => {
        setUsername(form.target.value)
    }

    const inputName = form => {
        setName(form.target.value)
    }

    const inputLastName = form => {
        setLastName(form.target.value)
    }

    const inputCellPhone = form => {
        setCellPhone(form.target.value)
    }

    const inputBornYear = form => {
        setBornYear(form.target.value)
    }

    const inputGender = form => {
        setGender(form.target.value)
    }

    const inputPassword = form => {
        setPassword(form.target.value)
    }

    const inputPasswordConf = form => {
        setPasswordConf(form.target.value)
    }

    const onSubmit = form => {
        form.preventDefault(); //avoids refresh
    }

    const onSend = () => {
        //checks that the passwords match
        let isMatch = false;
        if (password === passwordConf) {
            isMatch = true;
        }

        const userData = {
            email: username,
            password: password,
        }
        props.submit(userData, isMatch, () => {
            props.history.push('/')
        })
    }

    const renderSubmitButton = () => {
        let content = <button type="button" className={fieldsStyle.buttons} onClick={() => onSend()}>REGISTRAR</button>

        if (props.loadingAuth) {
            content = <MiniSpinner></MiniSpinner>
        }
        return content;
    };

    return (
        <form onSubmit={onSubmit} className={fieldsStyle.form} autoComplete={"off"}>

            <h6 className={fieldsStyle.title}>E-mail </h6>

            <div className={fieldsStyle.inputSpace}>
                <input
                    type="text"
                    placeholder="Escriba su email"
                    value={username}
                    name="username"
                    className={fieldsStyle.field}
                    onChange={inputUser}
                />
            </div>

            <h6 className={fieldsStyle.title}>Nombres </h6>

            <div className={fieldsStyle.inputSpace}>
                <input
                    type="text"
                    placeholder="Escriba sus nombres"
                    value={name}
                    name="name"
                    className={fieldsStyle.field}
                    onChange={inputName}
                />
            </div>

            <h6 className={fieldsStyle.title}>Apellidos </h6>

            <div className={fieldsStyle.inputSpace}>
                <input
                    type="text"
                    placeholder="Escriba sus apellidos"
                    value={lastName}
                    name="lastName"
                    className={fieldsStyle.field}
                    onChange={inputLastName}
                />
            </div>

            <h6 className={fieldsStyle.title}>Número celular </h6>

            <div className={fieldsStyle.inputSpace}>
                <input
                    type="number"
                    placeholder="Escriba su número celular"
                    value={cellphone}
                    name="cellphone"
                    className={fieldsStyle.field}
                    onChange={inputCellPhone}
                />
            </div>

            <h6 className={fieldsStyle.title}>Año de nacimiento </h6>

            <div className={fieldsStyle.inputSpace}>
                <input
                    type="date"
                    placeholder="Ingrese su fecha de nacimiento"
                    value={bornYear}
                    name="bornYear"
                    className={fieldsStyle.field}
                    onChange={inputBornYear}
                />
            </div>

            <h6 className={fieldsStyle.title}>Genero </h6>

            <div className={fieldsStyle.inputSpace}>
                <select name="gender" className={fieldsStyle.field} onChange={inputGender}>
                    <option value={gender}>Mujer</option>
                    <option value={gender}>Hombre</option>
                    <option value={gender}>Prefiero no decir</option>
                </select>
            </div>

            <h6 className={fieldsStyle.title}>Contraseña</h6>

            <input
                type="password"
                placeholder="Escriba su contraseña"
                value={password}
                name="password"
                className={fieldsStyle.field}
                onChange={inputPassword}
            />

            <h6 className={fieldsStyle.title}>Confirmar contraseña</h6>

            <input
                type="password"
                placeholder="Confirme su contraseña"
                value={passwordConf}
                name="passwordConf"
                className={fieldsStyle.field}
                onChange={inputPasswordConf}
            />


            {renderSubmitButton()}
            <p className={fieldsStyle.wrongForm}>{props.errorMessage}</p>

        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        //loadingAuth: state.loggedStore.loadingAuth
    }
}

export default connect(mapStateToProps, null)(Register);