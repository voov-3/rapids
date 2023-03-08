import { FC } from "react"

const s = {
  container: `fit-height flex justify-center items-center`,
  text: `font-semibold text-3xl text-gray-700 text-center`
}

const ThanksPage: FC = () => (
  <div className={s.container}>
    <p className={s.text}>Thanks for playing!</p>
  </div>
)

export default ThanksPage
