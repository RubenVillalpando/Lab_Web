import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const Logs = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [logs, setLogs] = useState([]);

  useEffect(
    fetch(`${process.env.DB_BASE_URL}/logs`, {
      method: "GET",
      body: {
        username: currentUser,
      },
    })
      .then((res) => {
        res.json().then((json) => setLogs(json));
      })
      .catch((error) => {
        console.log(error);
      }),
    []
  );

  return (
    <>
      <table>
        <tr>
          <th>Usuario</th>
          <th>Evento</th>
          <th>Fecha</th>
        </tr>
        {logs.map((log) => (
          <>
            <tr>
              <td>{log.username}</td>
              <td>{log.fecha_evento}</td>
              <td>{log.evento}</td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
};
