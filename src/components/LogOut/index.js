import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { FiLogOut } from "react-icons/fi";

import styles from "../../styles/components/LogOut.module.css";

const LogOut = () => {
  const [isRequestingLogOut, setIsRequestingLogOut] = useState(false);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const router = useRouter();

  function handleLogOut() {
    if (isRequestingLogOut) {
      try {
        removeCookie("token");
        removeCookie("agency");
      } catch (error) {
        alert("Antes de terminar a sessão conclua os campos necessários");
      }
    }
    setIsRequestingLogOut(true);
  }
  const middleware = useCallback(() => {
    const { token, agency } = cookies;

    if (!token || !agency) {
      removeCookie("token");
      removeCookie("agency");

      alert("É necessário fazer o login!");

      router.push("/");
    }
  }, [cookies, router, removeCookie]);

  useEffect(() => {
    middleware();
  }, [cookies]);

  return (
    <div className={styles.logoutContainer}>
      <button
        className={isRequestingLogOut ? styles.requesting : null}
        type="button"
        onClick={handleLogOut}
      >
        {isRequestingLogOut ? <span>Confirmar</span> : <span>sair</span>}

        <FiLogOut width={"30px"} height={"30px"} />
      </button>
    </div>
  );
};

export default LogOut;
