// Google Material Symbols Outlined icon component
export default function Icon({ name, size = 20, className = '' }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{ fontSize: size, lineHeight: 1 }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
