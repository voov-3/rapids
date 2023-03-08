import { FC, useEffect, useState } from "react"
import { ICar, IArea } from "./../../types"
import API from "../../api"
import BoundingBox from "../BoundingBox"

const s = {
  container: `fit-height flex flex-col justify-start items-center py-8`,
  imgWrapper: `max-w-md`,
  image: `rounded w-full h-auto`
}

const SolvingPage: FC = () => {
  const [cars, setCars] = useState<ICar[]>([])
  const [areas, setAreas] = useState<IArea[]>([])

  useEffect(() => {
    API.cars.getCars().then((data) => setCars(data))
  }, [])

  const onChangeHandler = (areas: IArea[]) => {
    setAreas(areas)
  }

  return (
    cars && (
      <div className={s.container}>
        <div className={s.imgWrapper}>
          <BoundingBox areas={areas} onChange={onChangeHandler}>
            <img
              src={`cars/${cars[1]?.fileName}`}
              alt="Car"
              className={s.image}
            />
          </BoundingBox>
        </div>
      </div>
    )
  )
}

export default SolvingPage
