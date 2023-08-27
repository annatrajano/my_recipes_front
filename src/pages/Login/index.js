// Main import
import { useState } from "react";

//Style - Login
import styles from "./Login.module.css";

import FormInput from "../../components/Form";

export default function Login() {
  /*   const history = useHistory() */
  const [values, setValues] = useState({});
  async function handleSubmit() {
    try {
   /*    await Login(values.user, values.password); */
      /*     history.push(`/home`); */
      window.location.reload(true);
    } catch (error) {
      console.log(error.message);
      // Toast
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
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
      onKeyDown: handleKeyDown,
    },
  ];
  return (
    <div className={styles.login__container}>
      <section>
        <form className={styles.form__container}>
          {firstInputSection.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </form>
      </section>
    </div>
  );
}
