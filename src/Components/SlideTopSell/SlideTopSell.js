import React from 'react'
import "./SlideTopSell.scss"
import Carousel, {consts} from "@itseasy21/react-elastic-carousel";
import arrowleft from "../../resources/svg/ArrowLeft.svg"
import arrowright from "../../resources/svg/ArrowRight.svg"
import Card from '../CardComponent/Card';
const SlideTopSell = ({title}) => {
  console.log(title)
  const breakPoints = [
    {width: 510, itemsToShow: 2, pagination: true},
    {width: 820, itemsToShow: 3, pagination: true},
    {width: 1220, itemsToShow: 4},
  ]
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src={arrowleft} alt='arrowLeft'/> : <img src={arrowright} alt='arrowRight' />
      return (
        <div className='slide_buttons' onClick={onClick} disabled={isEdge}>
          {pointer}
        </div>
      )
  }

  return (
    <div id='slide_topSell'>
      <div className='container_slide'>
        <p className='sell_text'>{title}</p>
        <Carousel itemsToShow={4} breakPoints={breakPoints} renderArrow={myArrow} pagination={false}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Carousel>
      </div>
    </div>
  )
}

export default SlideTopSell
