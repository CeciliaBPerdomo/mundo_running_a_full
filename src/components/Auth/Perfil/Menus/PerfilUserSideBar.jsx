import React from "react";
import LogoutButton from "../LogoutButton"
import { NavLink } from "react-router";

const PerfilUserSidebar = () => {
    const menu = [
        { titulo: "Mis datos", url: "/perfil" },
        { titulo: "Mis favoritos", url: "/" }, ///perfil/favoritos
        { titulo: "Mi carrito", url: "/" }, //perfil/carrito
        { titulo: "Mis compras", url: "/" }, //perfil/compras
    ]

    return (
        <aside className="w-64 bg-[var(--color-background-third)] text-[var(--p-blanco)]  px-8 py-10 sticky top-[60px] h-[calc(100vh-60px)] flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-semibold mb-6 tracking-wide">
                    Mi cuenta
                </h2>

                <nav className="flex flex-col gap-3">
                    {menu.map((item) => (
                        <NavLink
                            key={item.titulo}
                            to={item.url}
                            className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? "bg-[var(--color-titulos)] text-[var(--p-blanco)]" : "hover:bg-[var(--color-titulos)]"}`}>
                            {item.titulo}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div className="pb-1">
                <LogoutButton />
            </div>
        </aside>
    );
};

export default PerfilUserSidebar;
