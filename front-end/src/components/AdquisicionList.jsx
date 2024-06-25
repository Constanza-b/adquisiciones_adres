import React, { useState, useEffect } from 'react';
import AdquisicionService from '../services/AdquisicionService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdquisicionList = () => {
  const [adquisiciones, setAdquisiciones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Número de elementos por página
  const [pageNumberLimit] = useState(5); // Número de botones de paginación a mostrar
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const navigate = useNavigate();
  const fetchAdquisiciones = async () => {
    try {
      const data = await AdquisicionService.getAll(); // Llama al servicio para obtener todas las adquisiciones
      setAdquisiciones(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {


    fetchAdquisiciones();
  }, []);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = adquisiciones.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = adquisiciones.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
          <button id={number} onClick={handleClick} className="page-link">{number}</button>
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementButton = null;
  if (adquisiciones.length > maxPageNumberLimit) {
    pageIncrementButton = <li className="page-item"><button onClick={handleNextButton} className="page-link">&#8811;</button></li>;
  }

  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = <li className="page-item"><button onClick={handlePrevButton} className="page-link">&#8810;</button></li>;
  }

  const handleUpdate = (id) => {
    navigate(`/actualizar-adquisicion/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
            Swal.fire({
                title: 'Eliminando Adquisición...',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                }
              });
            const resp = await AdquisicionService.delete(id);
            Swal.close();
            if(resp){
                setAdquisiciones(adquisiciones.filter(adquisicion => adquisicion.id !== id));
                fetchAdquisiciones();
                Swal.fire('¡Eliminado!', 'La adquisición ha sido eliminada.', 'success');
            }
        } catch (error) {
            Swal.close();
            Swal.fire('Error', 'Ha ocurrido un error al intentar eliminar la adquisición.', 'error');
        }    
         
      }
    });
  };

  return (
    <div className="row mt-4">
      <div className='col'>
      <h2>Lista de Adquisiciones</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Presupuesto</th>
            <th>Unidad</th>
            <th>Tipo de Bien o Servicio</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Valor Total</th>
            <th>Fecha de Adquisición</th>
            <th>Proveedor</th>
            <th>Documentación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(adquisicion => (
            <tr key={adquisicion.id}>
              <td>{adquisicion.presupuesto}</td>
              <td>{adquisicion.unidad}</td>
              <td>{adquisicion.tipo}</td>
              <td>{adquisicion.cantidad}</td>
              <td>{adquisicion.valor_unitario}</td>
              <td>{adquisicion.valor_total}</td>
              <td>{adquisicion.fecha_adquisicion}</td>
              <td>{adquisicion.proveedor}</td>
              <td>{adquisicion.documentacion}</td>
              <td>
                <div className="btn-group" role="group">
                  <button className="btn btn-warning" onClick={() => handleUpdate(adquisicion.id)}>Actualizar</button>
                  <button className="btn btn-danger ml-2" onClick={() => handleDelete(adquisicion.id)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button onClick={handlePrevButton} className="page-link">&#8810;</button>
          </li>
          {pageDecrementButton}
          {renderPageNumbers}
          {pageIncrementButton}
          <li className="page-item">
            <button onClick={handleNextButton} className="page-link">&#8811;</button>
          </li>
        </ul>
      </nav>
      </div>
    
    </div>
  );
};

export default AdquisicionList;
