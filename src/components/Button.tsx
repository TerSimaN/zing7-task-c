const Button = ({label = ""}) => {
  return (
    <button className="px-3.5 py-3 border-2 border-black rounded-lg">
        {label}
    </button>
  )
}

export default Button