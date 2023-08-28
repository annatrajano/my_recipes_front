// Main import
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";

//Style - Login
import styles from "./Login.module.css";

// Components
import FormInput from "../../components/Form";
import Footer from "../../components/Footer";

export default function Login() {
  let navigate = useNavigate();
  const [values, setValues] = useState({});

  function handleSubmit() {
    navigate("home");
  }


  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const firstInputSection = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: `Email do usuário`,
      disabled: false,
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: `Senha`,
      disabled: false,
      label: "Senha",
      required: true,
    },
  ];
  return (
    <div className={styles.login__container}>
      <section>
        <form className={styles.form__container}>
          <h2 className={styles.title__login}>
            My Recipes <BiFoodMenu />{" "}
          </h2>

          {firstInputSection.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button
            className={styles.bttn__login}
            type="submit"
            onClick={handleSubmit}
          >
            <p className={styles.text__enter}>Entrar</p>
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
