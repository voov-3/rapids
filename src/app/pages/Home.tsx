import { useEffect, useState } from "react"
import InitialPage from "../components/InitialPage"
import SolvingPage from "../components/SolvingPage"

const Home = () => {
  const [page, setPage] = useState("initial")
  const [timeLeft, setTimeLeft] = useState(5)

  useEffect(() => {
    if (timeLeft === 0) {
      setPage("solving")
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, page])

  const handleSkipTimer = () => {
    setTimeLeft(0)
    setPage("solving")
  }

  return (
    <>
      {page === "initial" && (
        <InitialPage timeLeft={timeLeft} onSkip={handleSkipTimer} />
      )}
      {page === "solving" && <SolvingPage />}
    </>
  )
}

export default Home
