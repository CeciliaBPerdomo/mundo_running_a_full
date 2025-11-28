import React from "react";
import { FiUpload } from "react-icons/fi";

const Contacto = () => {
  return (
    <section className="w-full py-16 bg-[var(--color-background)] flex justify-center">
      <div className="w-[95%] max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ----------- COLUMNA 1: INFO + MAPA ----------- */}
        <div>
          <h2 className="text-[35px] font-bold text-[var(--botones-rojos)] mb-4">
            Contáctate con nosotros
          </h2>

          <p className="text-[18px] text-[var(--p-negro)] leading-relaxed mb-8">
            Si quieres saber más acerca de nuestros productos o servicios no dudes
            en enviarnos un mensaje!
          </p>

          <h3 className="text-[30px] font-semibold text-[var(--botones-rojos)] mb-2">
            Visítanos en:
          </h3>

          <p className="text-[18px] text-[var(--p-negro)] mb-8">
            José Salvo 305 esquina Defensa, Juan Lacaze, Uruguay
          </p>

          {/* Google Maps (514 × 241) */}
          <div className="h-[241px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="mapa"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.078334334815!2d-57.340918!3d-34.4358747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959835ed9dcd31df%3A0xe84df1602043614d!2sJos%C3%A9%20Salvo%20305%2C%2070000%20Juan%20Lacaze%2C%20Departamento%20de%20Colonia!5e0!3m2!1ses-419!2suy!4v1700000000000"
            ></iframe>
          </div>
        </div>

        {/* ----------- COLUMNA 2: FORMULARIO ----------- */}
        <div>
          <form className="space-y-6">

            {/* Nombre + Apellido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Apellido"
                className="w-full p-3 border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] rounded-md outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] rounded-md outline-none"
            />

            {/* Adjuntar imagen + (opcional) */}
            <div className="relative w-full">
              <input
                type="file"
                id="fileInput"
                className="w-full p-3 border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] rounded-md outline-none pr-20 cursor-pointer"
              />

              <label
                htmlFor="fileInput"
                className="
                  absolute top-1/2 -translate-y-1/2 right-2
                  bg-[var(--botones-rojos)] text-[var(--p-blanco)]
                  p-2 rounded-md cursor-pointer
                  flex items-center justify-center
                "
              >
                <FiUpload size={18} />
              </label>

              {/* Texto opcional (chiquito) */}
              <span className="absolute right-2 bottom-[-20px] text-[12px] text-gray-500">
                Opcional
              </span>
            </div>

            {/* Mensaje */}
            <textarea
              placeholder="Mensaje"
              rows={5}
              className="w-full p-3 border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] rounded-md outline-none resize-none"
            ></textarea>

            {/* Botón enviar */}
            <button
              type="submit"
              className="
                w-full bg-[var(--botones-rojos)]
                text-[var(--p-blanco)] font-semibold py-3 rounded-md
                hover:bg-[var(--botones-rojos-hover)] transition-all"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contacto;
