`use strict`

import * as React from "react";
import {useRef, useEffect}  from "react";
import { HEADER_TITLE } from "../../../shared/style";
import Portal from "./Portal";

interface IBanner {
  scrollContainer: React.RefObject<HTMLDivElement>;
}

const Banner:React.FC<IBanner> = ({scrollContainer}) => {
  const sectionHeight='330vh', sectionOneHeight='100vh';
  const backgroundRef = useRef<HTMLDivElement>(null);
  const leftForegroundRef = useRef<HTMLDivElement>(null);
  const rightForegroundRef = useRef<HTMLDivElement>(null);
  const centerForegroundRef = useRef<HTMLDivElement>(null);
  const centerpieceDescRef = useRef<HTMLDivElement>(null);
  const parallaxDisplayContainerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  var parallaxDisplayContainerHeightSize = 0,
    parallaxDisplayContainerWidthSize = 0;
  const allowedDescToKickstart = 0.4;
  const allowedBackgroundScaledDistance = 5;
  const firstPartCompletionDistance = 360;
  const action = `${(window as any).safari || navigator.userAgent.match(/(iPod|iPhone|iPad)/)?"rotate":"rotateY"}`
  const [showPortal, setShowPortal] = React.useState(false);

  const parallaxScrollForeground = (e:any) => {
    const _pos = e.target.scrollTop;
    const pos = _pos - firstPartCompletionDistance;
    const targetHeight = e.target.offsetHeight;
    const opacityPercentage = (pos + (targetHeight / 2)) / parallaxDisplayContainerHeightSize;
    const adjustedPos = pos > parallaxDisplayContainerWidthSize ? parallaxDisplayContainerWidthSize:pos;
    var scaledPos = adjustedPos / 200;
    var translatePos = adjustedPos * 2;

    if(_pos < firstPartCompletionDistance) {
      if(centerForegroundRef.current !== null) {
        if(centerForegroundRef.current.style.display === 'none') {
          centerForegroundRef.current.style.display = ``;
          if(leftForegroundRef.current !== null && rightForegroundRef.current !== null) {
            (leftForegroundRef.current.children[0] as HTMLDivElement).style.display = 'none';
            (rightForegroundRef.current.children[0] as HTMLDivElement).style.display = 'none';
            leftForegroundRef.current.style.transform = 'scale(1.0)';
            rightForegroundRef.current.style.transform = 'scale(1.0)';
            leftForegroundRef.current.style.borderRight = 'none';
            rightForegroundRef.current.style.borderLeft = 'none';
          }
        }
        centerForegroundRef.current.style.transform = `${action}(${_pos}deg)`;
        (centerForegroundRef.current.children[1] as HTMLDivElement).style.transform = `${action}(${_pos * 2}deg)`;
      }
      return;
    }
    else {
      if(centerForegroundRef.current !== null) {
        if(centerForegroundRef.current.style.display !== 'none') {
          centerForegroundRef.current.style.display = 'none';
          if(leftForegroundRef.current !== null && rightForegroundRef.current !== null) {
            (leftForegroundRef.current.children[0] as HTMLDivElement).style.display = 'flex';
            (rightForegroundRef.current.children[0] as HTMLDivElement).style.display = 'flex';
            leftForegroundRef.current.style.borderRight = '1px solid #000';
            rightForegroundRef.current.style.borderLeft = '1px solid #000';
          }
        }
      }
    }

    if(leftForegroundRef.current !== null && rightForegroundRef.current !== null) {
      leftForegroundRef.current.style.transform = `scale(${1.0 + (scaledPos)}) translateX(-${translatePos}px)`;
      rightForegroundRef.current.style.transform = `scale(${1.0 + (scaledPos)}) translateX(${translatePos}px)`;
      // leftForegroundRef.current.style.filter = `blur(${blurPos}px)`;
      // rightForegroundRef.current.style.filter = `blur(${blurPos}px)`;
    }
    if(backgroundRef.current !== null) {
      backgroundRef.current.style.transform = `scale(${1.0 + (scaledPos/allowedBackgroundScaledDistance)})`
    }

    if(centerpieceDescRef.current !== null) {
      centerpieceDescRef.current.style.opacity = `${opacityPercentage - allowedDescToKickstart}`;
    }
    if(lineRef.current !== null) {
      lineRef.current.style.width = `${100 * opacityPercentage}px`;
    }
  }

  const refreshContainer = () => {
    if(parallaxDisplayContainerRef.current !== null) {
      parallaxDisplayContainerHeightSize = (parallaxDisplayContainerRef.current.clientHeight / 2);
      parallaxDisplayContainerWidthSize = (parallaxDisplayContainerRef.current.clientWidth / 3);
    }
  }

  // const text2Binary = (str:string) => {
  //   return str.split('').map(function (char) {
  //       return char.charCodeAt(0).toString(2);
  //   }).join('');
  // }

  const _generateHorizontalTouchSensor = () => {
    var touchStartEvent, touchEndEvent;
    let touchSlideStart:number;
    touchStartEvent = (event:any) => {
      touchSlideStart = event.touches[0].clientX;
    };
    touchEndEvent = (event:any) => {
       var touchSlideEnd = event.changedTouches[0].clientX;
       if(Math.abs(touchSlideStart - touchSlideEnd) > 125){
          setShowPortal(true);
       }
    };
    return [touchStartEvent, touchEndEvent];
  }

  useEffect(() => {
    const [touchStartEvent, touchEndEvent] = _generateHorizontalTouchSensor();

    if(scrollContainer.current !== null) {
      scrollContainer.current.addEventListener('scroll', parallaxScrollForeground);
    }
    if(parallaxDisplayContainerRef.current !== null) {
      parallaxDisplayContainerRef.current.addEventListener('touchstart', touchStartEvent, {passive: true});
      parallaxDisplayContainerRef.current.addEventListener('touchend', touchEndEvent, {passive: true});
    }

    refreshContainer();
    window.addEventListener('resize', refreshContainer);
    return () => {
      window.removeEventListener('resize', refreshContainer);
      if(parallaxDisplayContainerRef.current !== null) {
        parallaxDisplayContainerRef.current.removeEventListener('touchstart', touchStartEvent);
        parallaxDisplayContainerRef.current.removeEventListener('touchend', touchEndEvent);
      }
    }

    return () => {
      if(scrollContainer.current !== null) {
        scrollContainer.current.removeEventListener('scroll', parallaxScrollForeground);
      }
    }
  }, []);

  return (
    <div className="banner-container" ref={parallaxDisplayContainerRef}>
      {showPortal &&
        <Portal
          closeCallback={() => {setShowPortal(false)}}
          />}
      <div className="parallax-container">
        <div className="background" ref={backgroundRef}></div>
        <div className="centerpiece inverse" ref={centerpieceDescRef}>
          <div  className="title">Our motive</div>
          <div className="horizontalbar" ref={lineRef}></div>
          <p className="info">
          Walcron is a by-product of a couple's journey in IT industry.
          </p>
          <p className="info">
          The Walcron website was created for experimentation in optimizing and prototyping new Web technologies.
          Ocassionally this is being re-contributed back into the open-source community.
          </p>
        </div>
        <div className="foreground-left" ref={leftForegroundRef}>
          <div className="foreground-center left">
            <div>Walcron</div>
            <div className="before"/>
          </div>
        </div>
        <div className="foreground-right" ref={rightForegroundRef}>
          <div className="foreground-center right">
            <div>Walcron</div>
            <div className="before"/>
          </div>
        </div>
        <div className="foreground-center" ref={centerForegroundRef}>
          <div>Walcron</div>
          <div className="before"/>
        </div>
      </div>
      <style jsx>{`
        .banner-container {
          width: 100%;
          height: ${sectionHeight};
        }
        .parallax-container {
          position: sticky;
          height: ${sectionOneHeight};
          top: 0;
          display: flex;
          overflow: hidden;
        }
        .foreground-left {
          will-change: transform;
          transform: scale(1.0);
          transition: transform 200ms linear;
          width: 50%;
          height: 100%;
          background-image: url('/img/welcome/fg-left.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right bottom;
          background-color: black;
          overflow: hidden;
        }
        .foreground-right {
          will-change: transform;
          transform: scale(1.0);
          transition: transform 200ms linear;
          width: 50%;
          height: 100%;
          background-image: url('/img/welcome/fg-left.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: left bottom;
          background-color: black;
          overflow: hidden;
        }
        .foreground-center {
          will-change: transform;
          position: absolute;
          transition: transform 200ms linear;
          left: calc(50% - 10rem);
          top: calc(50% - 10rem);
          width: 20rem;
          height: 20rem;
          border: 1rem solid rgba(51,153,67);
          border-radius: 20rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${HEADER_TITLE.FOREGROUND};
          font-size: 4rem;
        }
        .foreground-center > .before {
          content: '';
          will-change: transform;
          transition: transform 200ms linear;
          border: 5px solid rgba(51,153,67, 0.9);
          position: absolute;
          width: 17rem;
          height: 17rem;
          border-radius: 17rem;
        }
        .foreground-center.left {
          display: none;
          left: unset;
          right: 0;
          transform: translateX(12rem);
        }
        .foreground-center.right {
          display: none;
          left: 0;
          transform: translateX(-12rem);
        }
        .foreground-text {
          top: 50%;
          position: absolute;
          color: ${HEADER_TITLE.FOREGROUND};
          font-size: 5rem;
        }
        .foreground-text.left {
          right: 0;
        }
        .title {
          color: ${HEADER_TITLE.FOREGROUND};
        }
        .info {
          font-size: 1rem;
          color: #FFF;
          max-width: 480px;
        }
        .background {
          will-change: transform;
          position: absolute;
          transition: transform 200ms linear;
          height: 100%;
          width: 100%;
          background: #000 url(/img/welcome/walcron-authors.jpg) no-repeat center center;
          background-size: cover;
        }
        .centerpiece {
          font-size: 2rem;
          will-change: opacity, transform;
          transition: opacity 200ms linear;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgb(51,153,67);
          padding: 2rem;
        }
        .centerpiece.inverse {
          top: 60%;
          opacity: 0;
          color: #FFF;
          min-width: 320px;
          background: rgba(20,20,20,0.8);
          border: 2px solid #000;
          filter: unset;
        }
        .horizontalbar {
          will-change: width;
          padding: 1rem 0;
          border-top: 2px dotted ${HEADER_TITLE.FOREGROUND};
          width: 30px;
        }
      `}</style>
    </div>
  )
}

export default Banner;
