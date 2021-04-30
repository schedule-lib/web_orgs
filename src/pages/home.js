import React from "react";

import styles from "../styles/pages/Home.module.css";

function pages() {
  return (
    <div className={styles.container}>
      <aside>
        <h1>Serviço de agendamento</h1>

        <div className={styles.alreadyGroup}>
          <div className={styles.serverDone}>
            <h5>serviços existentes:</h5>
          </div>
          <ul className={styles.listAside}>
            <li>
              <a href="#">criar novo</a>
            </li>
            <li>
              <a href="#">alterar cartao</a>
            </li>
            <li>
              <a href="#">falar com agencia</a>
            </li>
          </ul>
        </div>

        <button className={styles.default}>novo serviço</button>
      </aside>

      <article className={styles.rightContainer}>
        <div className={styles.agencyHeader}>
          <h4>Agência bancaria AOA</h4>
          <div>+</div>
        </div>

        <div className={styles.servicesContainer}>
          <div className={styles.servicesLeft}>
            <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
              <strong>nome do service</strong>
              <input type="text" placeholder="ex: nome service" />
            </div>

            <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
              <div>
                <h5>Endereço de serviço</h5>
              </div>

              <div className={styles.packetService}>
                <strong>província</strong>
                <input type="text" name="tipo" placeholder="ex: luanda" />
              </div>

              <div className={styles.packetService}>
                <strong>ponto de atendimento</strong>
                <input
                  type="text"
                  name="tipo"
                  placeholder="ex: UNASP centro hortolândia 183"
                />
              </div>
            </div>

            <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
              <div>
                <h5>Horario de atendimento</h5>
              </div>

              <div className={styles.packetService}>
                <strong>Hora que começa atendimento</strong>
                <input type="text" name="tipo" placeholder="ex: 08:30" />
              </div>

              <div className={styles.packetService}>
                <strong>Termino do Horario</strong>
                <input type="text" name="tipo" placeholder="ex: 18:00" />
              </div>
            </div>
          </div>

          <div className={styles.servicesRight}>
            <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
              <div className={styles.header}>
                <strong>campos para usuário preencher</strong>

                <button className={styles.new}>novo +</button>
              </div>

              <div className={styles.packetService}>
                <strong>tipo de campo</strong>
                <input type="text" name="tipo" placeholder="ex: numero" />
              </div>

              <div className={styles.packetService}>
                <strong>tipo de campo</strong>
                <input type="text" name="tipo" placeholder="ex: numero" />
              </div>
            </div>

            <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
              <div id={styles.serviceMonth}>
                <strong>
                  Mêses livre de atendimento <span>2021</span>
                </strong>

                <small>clique nos mesês para selecionar</small>
              </div>

              <div className={styles.monthsBlock}>
                <div className={`${styles.month} ${styles.clicked}`}>
                  JANEIRO
                </div>
                <div className={styles.month}>FEVEREIRO</div>
                <div className={styles.month}>MARÇO</div>
                <div className={styles.month}>ABRIL</div>
                <div className={styles.month}>MAIO</div>
                <div className={`${styles.month} ${styles.clicked}`}>JUNHO</div>
                <div className={styles.month}>JULHO</div>
                <div className={`${styles.month} ${styles.clicked}`}>
                  AGOSTO
                </div>
                <div className={styles.month}>SETEMBRO</div>
                <div className={`${styles.month} ${styles.clicked}`}>
                  OUTUBRO
                </div>
                <div className={`${styles.month} ${styles.clicked}`}>
                  NOVEMBRO
                </div>
                <div className={`${styles.month} ${styles.clicked}`}>
                  DEZEMBRO
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default pages;
