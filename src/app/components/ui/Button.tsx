import { FC, ButtonHTMLAttributes } from "react"
import cn from "clsx"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "naked"
  loading?: boolean
}

const s = {
  basic: `inline-flex justify-center items-center font-semibold tracking-wide
  uppercase focus:ring-0 transition ease-in-out duration-150`,
  default: `bg-black text-white text-sm w-full py-2.5 rounded hover:opacity-75`,
  disabled: `opacity-75 cursor-not-allowed`
}

const Button: FC<IButton> = ({
  type = "button",
  variant = "default",
  loading = false,
  disabled = false,
  className,
  children,
  ...rest
}) => {
  const rootClassName = cn(s.basic, className, {
    [s.default]: variant === "default" && !className,
    [s.disabled]: disabled || loading
  })

  return (
    <button
      type={type}
      className={rootClassName}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
