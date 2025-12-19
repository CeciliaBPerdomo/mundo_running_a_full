import Loader from '../Loader/Loader';

const SubmitButton = ({ loading, children }) => (
    <button type="submit" disabled={loading} className="w-full bg-[var(--botones-rojos)] text-[var(--p-blanco)] font-semibold py-3 rounded-md hover:bg-[var(--botones-rojos-hover)] transition-all disabled:opacity-70" >
        {loading ? <Loader /> : children}
    </button>
);

export default SubmitButton;
