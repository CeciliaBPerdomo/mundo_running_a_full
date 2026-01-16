import { Field, ErrorMessage } from "formik"

const Campo = ({ label, name, type = "text" }) => (
    <div className="flex flex-col gap-1">
        <label className="text-sm text-[var(--text-gray-500)]">
            {label}
        </label>

        <Field
            name={name}
            type={type}
            className="h-10 px-3 rounded-md border border-[var(--border-gray-300)] bg-[var(--color-background-secondary)] text-[var(--p-negro)] focus:outline-none focus:ring-2 focus:ring-[var(--botones-rojos)]"
        />

        <ErrorMessage
            name={name}
            component="p"
            className="text-sm text-[var(--text-errors)]"
        />
    </div>
);

export default Campo