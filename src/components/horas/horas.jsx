/* eslint-disable react/prop-types */
import "./horas.css";

const Horas = ({ date, closeModal, onClick }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <p>Fecha seleccionada: {date}</p>
        <button onClick={closeModal}>Cerrar</button>
      </div>
      <ul className="content-ul">
        <li className="li" onClick={onClick}>
          10:00
        </li>
        <li className="li" onClick={onClick}>
          10:30
        </li>
        <li className="li" onClick={onClick}>
          11:00
        </li>
        <li className="li" onClick={onClick}>
          11:30
        </li>
        <li className="li" onClick={onClick}>
          12:00
        </li>
        <li className="li" onClick={onClick}>
          12:30
        </li>
        <li className="li" onClick={onClick}>
          13:00
        </li>
        <li className="li" onClick={onClick}>
          13:30
        </li>
        <li className="li" onClick={onClick}>
          14:00
        </li>
        <li className="li" onClick={onClick}>
          14:30
        </li>
        <li className="li" onClick={onClick}>
          15:00
        </li>
        <li className="li" onClick={onClick}>
          15:30
        </li>
        <li className="li" onClick={onClick}>
          16:00
        </li>
        <li className="li" onClick={onClick}>
          16:30
        </li>
        <li className="li" onClick={onClick}>
          17:00
        </li>
        <li className="li" onClick={onClick}>
          17:30
        </li>
        <li className="li" onClick={onClick}>
          18:00
        </li>
        <li className="li" onClick={onClick}>
          18:30
        </li>
        <li className="li" onClick={onClick}>
          19:00
        </li>
        <li className="li" onClick={onClick}>
          19:30
        </li>
      </ul>
      <div className="horas-text">
        <h4>🟢Turno disponible</h4>
        <h4>🔴Turno no disponible</h4>
      </div>
    </div>
  );
};

export default Horas;
