import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import AdquisicionService from '../services/AdquisicionService';
import { useParams } from 'react-router-dom';

const AdquisicionesFormulario = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  console.log("existe ",id);
  useEffect(() => {
  
    if (id) {
      const fetchAdquisicion = async () => {
        try {
          setLoading(true);
          const adquisicion = await AdquisicionService.getById(id);
          Object.keys(adquisicion).forEach(key => {
            setValue(key, adquisicion[key]);
          });
          setLoading(false);
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: 'Error',
            text: 'Ha ocurrido un error al cargar la adquisición. Por favor, inténtalo de nuevo.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      };

      fetchAdquisicion();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    Swal.fire({
      title: 'Cargando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      let response;
      if (id) {
        response = await AdquisicionService.update(id, {
          nombre: data.nombre,
          direccion: data.direccion,
          presupuesto: parseFloat(data.presupuesto),
          unidad: data.unidad,
          tipo: data.tipo,
          cantidad: parseInt(data.cantidad),
          valor_unitario: parseFloat(data.valor_unitario),
          valor_total: parseFloat(data.valor_total),
          fecha_adquisicion: data.fecha_adquisicion,
          proveedor: data.proveedor,
          documentacion: data.documentacion,
        });
      } else {
        response = await AdquisicionService.create({
          nombre: data.nombre,
          direccion: data.direccion,
          presupuesto: parseFloat(data.presupuesto),
          unidad: data.unidad,
          tipo: data.tipo,
          cantidad: parseInt(data.cantidad),
          valor_unitario: parseFloat(data.valor_unitario),
          valor_total: parseFloat(data.valor_total),
          fecha_adquisicion: data.fecha_adquisicion,
          proveedor: data.proveedor,
          documentacion: data.documentacion,
        });
      }

      Swal.close();
      if (response.id) {
        Swal.fire({
          title: '¡Adquisición guardada!',
          text: 'La adquisición se ha guardado correctamente.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error al guardar la adquisición. Por favor, inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      Swal.close();
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error al guardar la adquisición. Por favor, inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="nombre" {...register('nombre')} />
      </div>
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">Dirección</label>
        <input type="text" className="form-control" id="direccion" {...register('direccion')} />
      </div>
      <div className="mb-3">
        <label htmlFor="presupuesto" className="form-label">Presupuesto</label>
        <input type="number" step="0.01" className="form-control" id="presupuesto" {...register('presupuesto')} />
      </div>
      <div className="mb-3">
        <label htmlFor="unidad" className="form-label">Unidad</label>
        <input type="text" className="form-control" id="unidad" {...register('unidad')} />
      </div>
      <div className="mb-3">
        <label htmlFor="tipo" className="form-label">Tipo de Bien o Servicio</label>
        <input type="text" className="form-control" id="tipo" {...register('tipo')} />
      </div>
      <div className="mb-3">
        <label htmlFor="cantidad" className="form-label">Cantidad</label>
        <input type="number" className="form-control" id="cantidad" {...register('cantidad')} />
      </div>
      <div className="mb-3">
        <label htmlFor="valor_unitario" className="form-label">Valor Unitario</label>
        <input type="number" step="0.01" className="form-control" id="valor_unitario" {...register('valor_unitario')} />
      </div>
      <div className="mb-3">
        <label htmlFor="valor_total" className="form-label">Valor Total</label>
        <input type="number" step="0.01" className="form-control" id="valor_total" {...register('valor_total')} />
      </div>
      <div className="mb-3">
        <label htmlFor="fecha_adquisicion" className="form-label">Fecha de Adquisición</label>
        <input type="date" className="form-control" id="fecha_adquisicion" {...register('fecha_adquisicion')} />
      </div>
      <div className="mb-3">
        <label htmlFor="proveedor" className="form-label">Proveedor</label>
        <input type="text" className="form-control" id="proveedor" {...register('proveedor')} />
      </div>
      <div className="mb-3">
        <label htmlFor="documentacion" className="form-label">Documentación</label>
        <textarea className="form-control" id="documentacion" {...register('documentacion')} />
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <button type="submit" className="btn btn-primary">Guardar</button>
      )}
    </form>
  );
};

export default AdquisicionesFormulario;
