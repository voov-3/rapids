import { FC, ButtonHTMLAttributes } from "react"
import cn from "clsx"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

const s = {
  basic: `inline-flex justify-center items-center font-semibold tracking-wide
  uppercase focus:ring-0 transition ease-in-out duration-150`,
  disabled: `opacity-75 cursor-not-allowed`
}

const Button: FC<IButton> = ({
  type = "button",
  loading = false,
  disabled = false,
  className,
  children,
  ...rest
}) => {
  const rootClassName = cn(s.basic, className, {
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
