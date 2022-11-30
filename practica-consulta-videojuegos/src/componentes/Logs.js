import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const Logs = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8585/logs/${currentUser}`, {
      method: "GET",
    })
      .then((res) => {
        res.json().then((json) => setLogs(json));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="text-center">Usuario</th>
            <th className="text-center">Evento</th>
            <th className="text-center">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <>
              <tr>
                <td>{log.username}</td>
                <td>{log.fecha_evento}</td>
                <td>{log.evento}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};
