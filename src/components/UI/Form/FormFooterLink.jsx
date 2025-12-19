import { Link } from "react-router";

const FormFooterLink = ({ text, linkText, to }) => {
  return (
    <p className="text-center mt-6 text-sm text-[var(--p-negro)]">
      {text}{" "}
      <Link
        to={to}
        className="text-[var(--color-titulos)] font-semibold hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
};

export default FormFooterLink;
