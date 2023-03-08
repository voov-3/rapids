import { FC, useEffect, useState } from "react"
import { ICar, IArea, Page } from "./../../types"
import { getRandomInteger } from "./../../utils/helpers"
import API from "../../api"
import { Button } from "../ui"
import BoundingBox from "../BoundingBox"

interface ISolvingPage {
  onChangePage: (page: Page) => void
}

const s = {
  container: `fit-height flex flex-col justify-start items-center py-8`,
  title: `inline-block font-medium text-lg text-gray-700 tracking-wider animate-pulse`,
  imgWrapper: `max-w-md mt-8`,
  image: `rounded w-full h-auto`,
  btnContainer: `flex justify-between items-center space-x-4 mt-4`,
  submit: `bg-black text-white text-sm rounded py-2.5 w-24`,
  remove: `bg-teal-500 text-white text-sm rounded py-2.5 w-24`
}

const SolvingPage: FC<ISolvingPage> = ({ onChangePage }) => {
  const [cars, setCars] = useState<ICar[]>([])
  const [carIndex, setCarIndex] = useState(0)
  const [areas, setAreas] = useState<IArea[]>([])

  useEffect(() => {
    API.cars.getCars().then((data) => setCars(data))

    setCarIndex(getRandomInteger(0, 4))
  }, [])

  const onChangeHandler = (areas: IArea[]) => {
    setAreas(areas)
  }

  const handleSubmit = () => {
    console.log({
      id: cars[carIndex]?.id,
      boundingBox: {
        ...areas
      }
    })

    onChangePage("thanks")
  }

  const handleRemove = () => {
    setAreas([])
  }

  return (
    cars && (
      <div className={s.container}>
        <span className={s.title}>
          {areas.length > 0 ? "Submit!" : "Highlight the car!"}
        </span>
        <div className={s.imgWrapper}>
          <BoundingBox areas={areas} onChange={onChangeHandler}>
            <img
              src={`cars/${cars[carIndex]?.fileName}`}
              alt="Car"
              className={s.image}
            />
          </BoundingBox>
        </div>
        <div className={s.btnContainer}>
          <Button
            className={s.remove}
            disabled={areas.length === 0}
            onClick={handleRemove}
          >
            Clear
          </Button>
          <Button
            className={s.submit}
            disabled={areas.length === 0}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    )
  )
}

export default SolvingPage
