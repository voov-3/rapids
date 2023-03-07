import { FC } from "react"
import { Button } from "./../ui"

interface IInitialPage {
  timeLeft: number
  onSkip: () => void
}

const s = {
  container: `fit-height flex flex-col justify-around items-center`,
  header: `font-semibold text-3xl text-gray-700 uppercase`,
  content: `text-center`,
  title: `font-medium text-2xl text-gray-700`,
  subtitle: `text-xl text-gray-400 mt-4`,
  button: `bg-teal-500 text-xl text-white rounded over:opacity-75 px-8 py-2.5`,
  timer: `w-8 pl-2`
}

const InitialPage: FC<IInitialPage> = ({ timeLeft, onSkip }) => (
  <div className={s.container}>
    <h2 className={s.header}>Welcome</h2>
    <div className={s.content}>
      <h5 className={s.title}>Let's play a game!</h5>
      <p className={s.subtitle}>
        You need to find the car in the photo and highlight it.
      </p>
    </div>
    <Button className={s.button} onClick={onSkip}>
      Let's go! <span className={s.timer}>{`(${timeLeft})`}</span>
    </Button>
  </div>
)

export default InitialPage
