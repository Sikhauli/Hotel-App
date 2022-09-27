import { useAsync } from "ax-react-lib";
import { useEffect, useRef, useState } from "react";
import { Slideshow, SlideshowItem } from "./slideFun";
import "../css/slideStyle.css";
import slide1 from '../slideIMG/1.jpg'
import slide2 from '../slideIMG/2.jpg'
import slide3 from '../slideIMG/3.jpg'
import slide4 from '../slideIMG/4.jpg'



export default function SlideShow() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Slideshow width={100} height={100}>
        <SlideshowItem>
          <img src={slide1} alt="Slide" />
        </SlideshowItem>
        <SlideshowItem>
          <img src={slide2} alt="Slide" />
        </SlideshowItem>
        <SlideshowItem>
          <img src={slide3} alt="Slide" />
        </SlideshowItem>
        <SlideshowItem>
        <img src={slide4} alt="Slide" />
      </SlideshowItem>
      </Slideshow>
    </div>
  );
}

