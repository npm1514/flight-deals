export default function Button({children, type = "button"}) {
  return (
    <button type={type} className="bg-lightgrey border rounded p-4">
      {children}
    </button>
  );
}
