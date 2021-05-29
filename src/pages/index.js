import React, { useState, memo, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import api from "../services/api";

import styles from "../styles/Login.module.css";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [cookies, setCookie] = useCookies(["token"]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email && !password) {
      alert("Informações incorretas");
      return;
    }

    let eml = email.trim();
    let psw = password.trim();

    try {
      const response = await api
        .post("/agency/sessions", {
          email: eml,
          password: psw,
        })
        .catch((error) => {
          console.log(error.message);
          return;
        });

      const { token, agency } = response.data;

      setCookie("token", String(`Bearer ${token}`));
      setCookie("agency", String(agency.email));

      router.push("/home");
    } catch (error) {
      alert("AGÊNCIA não encontrada");
    }
  }
  const userAlreadyLoggedIn = useCallback(() => {
    if (!cookies.token && !cookies.agency) return;

    router.push("/home");
  }, [cookies]);

  useEffect(() => {
    document.title = "Login | Scheduler service";

    userAlreadyLoggedIn();
  }, [router, cookies]);

  return (
    <div className={styles.container}>
      <h1>Serviço de Agendamento</h1>

      <form className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="email">Identificador</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="id"
            name="email"
            id="email"
            required
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="password">Senha secreta:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="password"
            required
            name="password"
          />
          <br />
          <br />
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className={styles.default}
        >
          Entrar na Plataforma
        </button>
      </form>
    </div>
  );
}

export default memo(Home);
