import { Field, ErrorMessage } from "formik";

const LoginFields = () => {
  return (
    <>
      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
          Email
        </label>
        <Field
          type="email"
          name="email"
          placeholder="Ingresá tu email"
          className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
        />
        <ErrorMessage
          name="email"
          component="p"
          className="text-[var(--text-errors)] text-sm mt-1"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
          Contraseña
        </label>
        <Field
          type="password"
          name="password"
          placeholder="••••••••"
          className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
        />
        <ErrorMessage
          name="password"
          component="p"
          className="text-[var(--text-errors)] text-sm mt-1"
        />
      </div>
    </>
  );
};

export default LoginFields;
