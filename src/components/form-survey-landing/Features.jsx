import React, { useState } from "react";

const Features = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    prayerRequest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert(
          "Tu solicitud ha sido enviada. Nos pondremos en contacto contigo pronto."
        );
      } else {
        alert(
          "Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde."
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6  order-lg-first" data-aos="fade-left0">
          <div className="title-style-fourteen text-white" >
            <div className="upper-title text-white-50">HABLEMOS</div>
            <h2 className=" text-white">Dejanos ponernos en contacto contigo</h2>
            <p className="mt-30 mb-20 text-white-70">
              Compartenos una petición y oraremos por ella en <br />
              nuestros servicios de la semana
            </p>
          </div>
      </div>

      <div className="col-md-6 text-left order-lg-last custom-card" data-aos="fade-right">
        <form onSubmit={handleSubmit} class="custom-material-card">
          <div className="mb-3">
            <label for="fullName" class="form-label">Nombre Completo</label>
            <input
              type="text"
              class="form-control custom-rounded-border"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control custom-rounded-border"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Teléfono</label>
            <input
              type="tel"
              class="form-control custom-rounded-border"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="prayerRequest" class="form-label">Petición de Oración</label>
            <textarea
              class="form-control custom-rounded-border"
              id="prayerRequest"
              name="prayerRequest"
              value={formData.prayerRequest}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn text-white col-12 bg-dark custom-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Features;
