import { FC, useEffect, useState } from "react"

const s = {
  container: `fit-height flex flex-col justify-around items-center`,
  header: `font-semibold text-3xl text-gray-700 uppercase`,
  content: `text-center`,
  title: `font-medium text-2xl text-gray-700`,
  subtitle: `text-xl text-gray-400 mt-4`,
  timer: `font-semibold text-3xl text-teal-500`
}

const InitialPage: FC = () => {
  const [timeLeft, setTimeLeft] = useState(5)

  useEffect(() => {
    if (timeLeft === 0) return

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  return (
    <div className={s.container}>
      <h2 className={s.header}>Welcome</h2>
      <div className={s.content}>
        <h5 className={s.title}>Let's play a game!</h5>
        <p className={s.subtitle}>
          You need to find the car in the photo and highlight it.
        </p>
      </div>
      <span className={s.timer}>{timeLeft}</span>
    </div>
  )
}

export default InitialPage
