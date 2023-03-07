import { FC, useEffect, useState } from "react"
import { ICar } from "./../../types"
import API from "../../api"

const s = {
  container: `fit-height flex flex-col justify-start items-center py-8`,
  imgWrapper: `max-w-md`,
  image: `rounded w-full h-auto`
}

const SolvingPage: FC = () => {
  const [cars, setCars] = useState<ICar[]>([])

  useEffect(() => {
    API.cars.getCars().then((data) => setCars(data))
  }, [])

  return (
    cars && (
      <div className={s.container}>
        <div className={s.imgWrapper}>
          <img
            src={`cars/${cars[1]?.fileName}`}
            alt="Car"
            className={s.image}
          />
        </div>
      </div>
    )
  )
}

export default SolvingPage
