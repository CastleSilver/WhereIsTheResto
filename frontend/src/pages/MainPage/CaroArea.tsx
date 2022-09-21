import React from "react"
import Carousel from "better-react-carousel"
import RstInfo from "../../components/RstInfo"

export default function CaroArea() {
  return (
    <>
      <p className="text-blue-1">여기도 참 맛있는데</p>
      <Carousel loop={true}>
        <Carousel.Item>
          <RstInfo />
        </Carousel.Item>
        <Carousel.Item>
          <RstInfo />
        </Carousel.Item>
        <Carousel.Item>
          <RstInfo />
        </Carousel.Item>
        <Carousel.Item>
          <RstInfo />
        </Carousel.Item>
      </Carousel>
    </>
  )
}
