import React from 'react'
import './ContactView.css'

const ContactView = () => {
  return (
    <>
      <div class="container">
        <div class=" text-center mt-5 ">
          <h1 >Contacto</h1>
        </div>
        <div class="row ">
          <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
              <div class="card-body bg-light">
                <div class="container">
                  <form id="contact-form">
                    <div class="controls">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_name">Nombre *</label>
                            <input id="form_name" type="text" name="name" class="form-control"  required="required" data-error="Nombre es obligatorio." />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_lastname">Apellido *</label>
                            <input id="form_lastname" type="text" name="surname" class="form-control"  required="required" data-error="Apellido es obligatorio." />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_email">Email *</label>
                            <input id="form_email" type="email" name="email" class="form-control"  required="required" data-error="Email es obligatorio." />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_need">Motivo del contacto *</label>
                            <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                              <option value="" selected disabled>--Seleccione--</option>
                              <option >Solicitar presupuesto</option>
                              <option >Consulta tecnica</option>
                              <option >Proveedor</option>
                              <option >Recursos Humanos</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="form_message">Mensaje *</label>
                            <textarea id="form_message" name="message" class="form-control" rows="4" required="required" data-error="Por favor escriba un mensaje."></textarea
                            >
                          </div>
                        </div>
                        <div class="col-md-12">
                          <input type="submit" class="btn btn-success btn-send  pt-2 btn-block
                            " value="ENVIAR" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactView