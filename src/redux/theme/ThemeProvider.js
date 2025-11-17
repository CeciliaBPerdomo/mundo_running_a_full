import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./themeSlice";
import { themeColors } from "../../styles/Theme";

const ThemeProvider = ({ children }) => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);

    // Carga el tema guardado en localStorage al iniciar
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" || savedTheme === "light") {
            dispatch(setTheme(savedTheme));
        } else {
            dispatch(setTheme("light")); // fallback
        }
    }, [dispatch]);

    // Aplica el tema al cambiar el modo
    useEffect(() => {
        const currentTheme = mode || "light";
        const colors = themeColors[currentTheme];

        // 🚨 Si por algún motivo no hay colores, no aplicar nada
        if (!colors) return;

        const root = document.documentElement;

        // Setear las variables CSS en :root
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        // Guardar modo actual
        localStorage.setItem("theme", currentTheme);

        // También puede servir para selectores tipo [data-theme="dark"]
        root.setAttribute("data-theme", currentTheme);
    }, [mode]);

    return children;
};

export default ThemeProvider;