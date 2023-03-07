import { ICar } from "./../types"

const cars = [
  {
    id: "12863e47-8565-4c0d-ac39-5c3b69762fee",
    fileName: "car1.jpg",
    target: "car"
  },
  {
    id: "22863e47-8565-4c0d-ac39-5c3b69762fee",
    fileName: "car2.jpg",
    target: "car"
  },
  {
    id: "32863e47-8565-4c0d-ac39-5c3b69762fee",
    fileName: "car3.jpg",
    target: "car"
  },
  {
    id: "42863e47-8565-4c0d-ac39-5c3b69762fee",
    fileName: "car4.jpg",
    target: "car"
  },
  {
    id: "52863e47-8565-4c0d-ac39-5c3b69762fee",
    fileName: "car5.jpg",
    target: "car"
  }
]

async function getCars(): Promise<ICar[]> {
  return new Promise<ICar[]>((resolve) => {
    setTimeout(() => resolve(cars), 300)
  })
}

export default {
  getCars
}
