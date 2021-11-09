import { useState } from 'react';
import NavBarStyles from './NavigationBar.module.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

const NavigationBar = (props) => {
  const [input, setInput] = useState("");

  const onSubmit = form => {
    form.preventDefault(); //avoids refresh
  }

  const search = () => {
    setInput("")
  }

  const inputText = form => {     //permite que el usuario pueda escribir y se muestre en el input
    setInput(form.target.value)
  }

  return (
    <div className={[NavBarStyles.header, 'py-2 align-items-center'].join(" ")}>

      <div className={'px-md-5 px-sm-4 px-3'}>
        <a href="/">
          <img src="assets/icons/logo.png" alt="Logo" className={[NavBarStyles.logoImage, 'float-left'].join(" ")} ></img>
        </a>
      </div>

      <div className={'px-md-5 px-sm-3'}>
        <div className={'float-right'}>
          <a href="/signIn" className={['mx-md-2 mx-1', NavBarStyles.menuImg].join(" ")}>¿No tienes una cuenta? Registrarse</a>
        </div>
      </div>
    </div>
  )
};

export default NavigationBar;
