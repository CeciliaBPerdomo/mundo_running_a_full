const Campo = ({ label, value }) => (
    <div className="flex flex-col gap-1">

        <label className="text-sm text-[var(--text-gray-500)]">
            {label}
        </label>

        <input
            type="text"
            value={value}
            readOnly
            className="h-10 px-3 rounded-md border border-[var(--border-gray-300)] bg-[var(--color-background-secondary)] text-[var(--p-negro)]"
        />
        
    </div>
);

export default Campo