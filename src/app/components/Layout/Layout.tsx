import { FC, ReactNode } from "react"
import logoWithName from "../../assets/logo/logoWithName.svg"

interface ILayout {
  children: ReactNode
}

const s = {
  wrapper: `px-4`,
  logo: `flex justify-center items-center border-b h-20`,
  container: `fit-height max-w-6xl mx-auto`
}

const Layout: FC<ILayout> = ({ children }) => (
  <div className={s.wrapper}>
    <div className={s.logo}>
      <img src={logoWithName} alt="Logo" width={180} />
    </div>
    <main className={s.container}>{children}</main>
  </div>
)

export default Layout
