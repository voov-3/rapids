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
  imgWrapper: `max-w-md`,
  image: `rounded w-full h-auto`,
  btnContainer: `flex justify-between items-center space-x-8 mt-4`,
  submit: `bg-black text-white text-sm rounded px-4 py-2.5`
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

  return (
    cars && (
      <div className={s.container}>
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
