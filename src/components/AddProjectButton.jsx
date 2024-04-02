export default function AddProjectButton({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-50 hover:bg-stone-500 hover:text-stone-900"
      {...props}
    >
      {children}
    </button>
  );
}
