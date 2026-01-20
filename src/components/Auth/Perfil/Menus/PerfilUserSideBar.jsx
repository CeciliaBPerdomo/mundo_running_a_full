import React from "react";
import LogoutButton from "../LogoutButton"
import { NavLink } from "react-router";
import menuUser from "../../../../data/menu-user.json"

const PerfilUserSidebar = ({ setVista, vista }) => {

    return (
        <aside className="w-64 bg-[var(--color-background-third)] text-[var(--p-blanco)]  px-8 py-10 sticky top-[60px] h-[calc(100vh-60px)] flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-semibold mb-6 tracking-wide">
                    Mi cuenta
                </h2>

                <nav className="flex flex-col gap-3">
                    {menuUser.map((item) => {
                        const activo = vista === item.key

                        return (
                            <button
                                key={item.key}
                                onClick={() => setVista(item.key)}
                                className={`text-left px-3 py-2 rounded-md transition ${activo ? "bg-[var(--color-titulos)] font-semibold" : "hover:bg-[var(--color-titulos)]"}`} >
                                {item.titulo}
                            </button>
                        )
                    })}
                </nav>
            </div>
            <div className="pb-1">
                <LogoutButton />
            </div>
        </aside>
    );
};

export default PerfilUserSidebar;
