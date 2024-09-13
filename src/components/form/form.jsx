/* eslint-disable react/prop-types */
import "./form.css";

const Form = ({ data, hour, closeForm }) => {
  return (
    <form className="content-data">
      <p className="form-title">{`Turno para el ${data} a las ${hour}`}</p>

      <div className="content-form">
        <label className="form-label" htmlFor="nombre">
          Nombre
        </label>
        <input className="form-input" id="nombre" type="text" />

        <label className="form-label" htmlFor="nombre">
          Telefono
        </label>
        <input className="form-input" id="nombre" inputMode="numeric" />
      </div>

      <div className="content-buton">
        <button className="button confirmar" onClick={closeForm}>
          Confirmar
        </button>
        <button className="button cancelar" onClick={closeForm}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default Form;
