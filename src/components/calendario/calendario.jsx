import { useEffect, useState } from "react";
import { meses, dias } from "../../utils/time.js";
import "./calentario.css";
import Horas from "../horas/horas.jsx";
import Form from "../form/form.jsx";

const Calendario = () => {
  const [mes, setMes] = useState("");
  const [Dates, setDates] = useState([]);
  const [months, setMonths] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [hourSelected, setHourSelected] = useState(undefined);

  const retroceder = () => {
    setMonths((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const adelantar = () => {
    setMonths((prevMonth) => (prevMonth + 1) % 12);
  };

  const clickedFecha = (day) => {
    setSelectedDate(`${day} ${mes}`);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openForm = (e) => {
    setFormOpen(true);
    setHourSelected(e.target.innerText);
  };
  const closeForm = () => {
    setFormOpen(false);
    setIsModalOpen(false);
  };

  useEffect(() => {
    setMes(meses[months]);
  }, [months]);

  useEffect(() => {
    const date = new Date();

    function getDaysInMonth(year, month) {
      const date = new Date(year, month + 1, 0);
      return date.getDate();
    }

    const days = [];

    for (let i = 1; i <= getDaysInMonth(date.getFullYear(), months); i++) {
      days.push(i);
    }
    setDates(days);
  }, [months]);

  return (
    <>
      <div className="content-title">
        <p className="dia flecha" onClick={retroceder}>{`<`}</p>
        <p className="mes">{mes}</p>
        <p className="dia flecha" onClick={adelantar}>{`>`}</p>
      </div>
      <div className="content">
        {dias.map((e, i) => {
          return (
            <p key={i} className="dia">
              {e[0]}
            </p>
          );
        })}
        {Dates.map((e, i) => {
          return (
            <p key={i} onClick={() => clickedFecha(e)} className="content-li">
              {e}
            </p>
          );
        })}
        {isModalOpen && (
          <Horas
            date={selectedDate}
            closeModal={closeModal}
            onClick={openForm}
          />
        )}
        {formOpen && (
          <Form data={selectedDate} hour={hourSelected} closeForm={closeForm} />
        )}
      </div>
    </>
  );
};

export default Calendario;
