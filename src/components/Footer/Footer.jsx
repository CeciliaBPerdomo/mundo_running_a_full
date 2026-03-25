import React from "react";
import { Link } from "react-router";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[var(--color-background-third)] text-[var(--p-blanco)] py-10 flex justify-center">

        {/* Contenedor al 95% */}
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* 1 — VISÍTANOS */}
          <div>
            <h3 className="text-[var(--color-titulos)] font-semibold text-lg mb-4">VISÍTANOS</h3>

            <div className="flex items-start gap-2 mb-6">
              <FaMapMarkerAlt className="text-[var(--p-blanco)] text-xl mt-1" />
              <p className="font-din">
                José Salvo 305 esq. Defensa,<br />
                Juan Lacaze, Uruguay.
              </p>
            </div>

            <p className="font-semibold mb-1">Horarios de Atención:</p>
            <p>
              Lunes a Viernes: 09:00hs - 13:00hs <br />
              y de 15:00hs - 19:00hs.
            </p>
            <p>Sábados: 09:00hs - 13:00hs.</p>
          </div>

          {/* 2 — CONTACTÁNOS + SEGUINOS */}
          <div>
            {/* CONTACTO */}
            <h3 className="text-[var(--color-titulos)] font-semibold text-lg mb-4">CONTACTÁNOS</h3>

            <p className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-[var(--p-blanco)]" />
              info@mundorunningafull.com
            </p>

            <p className="flex items-center gap-2 mb-6">
              <FaWhatsapp className="text-[var(--p-blanco)]" />
              092 810 119
            </p>

            {/* SEGUINOS */}
            <h3 className="text-[var(--color-titulos)] font-semibold text-lg mb-4">SEGUINOS</h3>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.instagram.com/mundorunningafull/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064317512612&locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.youtube.com/@mundorunning8525"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaYoutube />
              </a>
            </div>
          </div>

          {/* 3 — PRODUCTOS + ENLACES DE INTERÉS */}
          <div>
            {/* PRODUCTOS */}
            <h3 className="text-[var(--color-titulos)] font-semibold text-lg mb-4">PRODUCTOS</h3>
            <ul className="space-y-1 mb-6">
              <Link to="/tienda/ciclismo"><li>Ciclismo</li></Link>
              <Link to="/tienda/natacion"><li>Natación</li></Link>
            <Link to="/tienda/running"><li>Running</li></Link> 
            </ul>

            {/* ENLACES */}
            <h3 className="text-[var(--color-titulos)] font-semibold text-lg mb-4">ENLACES DE INTERÉS</h3>
            <ul className="space-y-1">
              <li><a href="https://www.specialized.uy">www.specialized.uy</a></li>
              <li><a href="https://www.lazersport.com/latam">www.lazersport.com/latam</a></li>
            </ul>
          </div>

          {/* 4 — SERVICIOS + EQUIPO */}
          <div>
            {/* SERVICIOS */}
            <h3 className="text-[var(--color-titulos)] font-semibold text-lg mb-4">SERVICIOS</h3>
            <ul className="space-y-1 mb-6">
              <Link to="/servicios"><li>Mantenimiento y reparación de bicicletas</li></Link>
              <Link to="/servicios"><li>Fotografías para eventos deportivos</li></Link>
            </ul>

            {/* EQUIPO */}
            <h3 className="text-[var(--color-titulos)] font-semibold text-lg mb-4">
              EQUIPO DE DESARROLLO
            </h3>
            <p>Desarrollo web: <a href="https://portfolio-cecilia.vercel.app/">Cecilia Perdomo</a></p>
            <p>Diseño UX/UI: <a href="https://www.linkedin.com/in/noeliaperdomo/">Noelia Perdomo</a></p>
          </div>

        </div>
      </footer>
      {/* <hr className="w-full border border-[var(--p-negro)] fixed bottom-[85px] left-0"/> */}
    </>
  );
};

export default Footer;
