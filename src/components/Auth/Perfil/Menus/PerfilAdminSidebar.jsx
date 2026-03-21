import React from "react";
import LogoutButton from "../LogoutButton"
import menuAdmin from "../../../../data/menu-admin.json";

const PerfilAdminSidebar = ({ vista, setVista, open, setOpen }) => {
  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-[60px] left-0 z-50
          h-[calc(100vh-60px)]
          w-64
          bg-[var(--color-background-third)]
          text-[var(--p-blanco)]
          px-8 py-10
          flex flex-col justify-between
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div>
          <h2 className="text-xl font-semibold mb-6 tracking-wide">
            Mi cuenta Admin
          </h2>

          <nav className="flex flex-col gap-3">
            {menuAdmin.map((item) => {
              const activo = vista === item.key;

              return (
                <button
                  key={item.titulo}
                  onClick={() => {
                    setVista(item.key);
                    setOpen(false); 
                  }}
                  className={`text-left px-3 py-2 rounded-md transition
                    ${activo
                      ? "bg-[var(--color-titulos)] font-semibold"
                      : "hover:bg-[var(--color-titulos)]"
                    }`}
                >
                  {item.titulo}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pb-1">
          <LogoutButton />
        </div>
      </aside>
    </>
  );
};


export default PerfilAdminSidebar;
