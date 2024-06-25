import React, { useState, useEffect } from 'react';
import AdquisicionService from './AdquisicionService';

function AdquisicionDetail({ adquisicionId }) {
    const [adquisicion, setAdquisicion] = useState(null);

    useEffect(() => {
        AdquisicionService.getById(adquisicionId)
            .then(data => setAdquisicion(data))
            .catch(error => console.error(error));
    }, [adquisicionId]);

    if (!adquisicion) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>{adquisicion.tipo}</h2>
            <p>Presupuesto: {adquisicion.presupuesto}</p>
            <p>Unidad: {adquisicion.unidad}</p>
            <p>Cantidad: {adquisicion.cantidad}</p>
            <p>Valor Unitario: {adquisicion.valorUnitario}</p>
            <p>Valor Total: {adquisicion.valorTotal}</p>
            <p>Fecha de Adquisición: {adquisicion.fecha}</p>
            <p>Proveedor: {adquisicion.proveedor}</p>
            <p>Documentación: {adquisicion.documentacion}</p>
        </div>
    );
}

export default AdquisicionDetail;
