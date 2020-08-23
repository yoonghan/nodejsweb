`use strict`

import * as React from "react";
import {useRef, useEffect, useState}  from "react";
import { HEADER_TITLE } from "../../../shared/style";

interface IBanner {
  scrollContainer: React.RefObject<HTMLDivElement>;
}

const Banner:React.FC<IBanner> = ({scrollContainer}) => {
  const sectionHeight='330vh', sectionOneHeight='100vh', sectionTwoHeight='230vh';
  const backgroundRef = useRef<HTMLDivElement>(null);
  const leftForegroundRef = useRef<HTMLDivElement>(null);
  const rightForegroundRef = useRef<HTMLDivElement>(null);
  const centerpieceTitleRef = useRef<HTMLDivElement>(null);
  const centerpieceDescRef = useRef<HTMLDivElement>(null);
  const parallaxDisplayContainerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [scrollLen, setScrollLen] = useState(2020);
  var parallaxDisplayContainerHeightSize = 0,
    parallaxDisplayContainerWidthSize = 0,
    parallaxClientHeight= 0;
  const allowedDescToKickstart = 0.4;
  const allowedBackgroundScaledDistance = 5;

  const parallaxScrollForeground = (e:any) => {
    const pos = e.target.scrollTop;
    const targetHeight = e.target.offsetHeight;
    const opacityPercentage = (pos + (targetHeight / 2)) / parallaxDisplayContainerHeightSize;
    const adjustedPos = pos > parallaxDisplayContainerWidthSize ? parallaxDisplayContainerWidthSize:pos;
    var scaledPos = adjustedPos / 200;
    var translatePos = adjustedPos * 2;

    if(dividerRef !== null && pos < parallaxClientHeight) {
      dividerRef.current.style.width=`${(1-(pos / parallaxClientHeight)) * 100}%`;
    }

    setScrollLen(Math.floor(pos));
    //var blurPos = adjustedPos / 10;

    if(leftForegroundRef.current !== null && rightForegroundRef.current !== null) {
      leftForegroundRef.current.style.transform = `scale(${1.0 + (scaledPos)}) translateX(-${translatePos}px)`;
      rightForegroundRef.current.style.transform = `scale(${1.0 + (scaledPos)}) translateX(${translatePos}px)`;
      // leftForegroundRef.current.style.filter = `blur(${blurPos}px)`;
      // rightForegroundRef.current.style.filter = `blur(${blurPos}px)`;
    }
    if(backgroundRef.current !== null) {
      backgroundRef.current.style.transform = `scale(${1.0 + (scaledPos/allowedBackgroundScaledDistance)})`
    }

    if(centerpieceTitleRef.current !== null) {
      centerpieceTitleRef.current.style.opacity = `${1 - opacityPercentage}`;
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
      parallaxClientHeight = parallaxDisplayContainerRef.current.clientHeight;
    }
  }

  const text2Binary = (str:string) => {
    return str.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
  }

  useEffect(() => {
    if(scrollContainer.current !== null) {
      scrollContainer.current.addEventListener('scroll', parallaxScrollForeground);
    }

    refreshContainer();
    window.addEventListener('resize', refreshContainer);
    return () => {
      window.removeEventListener('resize', refreshContainer);
    }

    return () => {
      if(scrollContainer.current !== null) {
        scrollContainer.current.removeEventListener('scroll', parallaxScrollForeground);
      }
    }
  }, []);

  return (
    <div className="banner-container" ref={parallaxDisplayContainerRef}>
      <div className="parallax-container">
        <div className="background" ref={backgroundRef}></div>
        <div className="centerpiece" ref={centerpieceTitleRef}>
          {text2Binary(scrollLen.toString())}
        </div>
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
          <div className="foreground-text left">Wal</div>
        </div>
        <div className="foreground-right" ref={rightForegroundRef}>
          <div className="foreground-text">cron</div>
        </div>
      </div>
      <div className="divider" ref={dividerRef}></div>
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
        .divider {
          height: ${sectionTwoHeight};
          display: flex;
          align-items: flex-end;
          will-change: width;
          width: 50%;
          border-bottom: 1px solid;
          margin: 0 auto;
        }
        .foreground-left {
          will-change: transform;
          transform: scale(1.0);
          width: 50%;
          height: 100%;
          background-image: url('/img/welcome/fg-left.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: left bottom;
          background-color: black;
        }
        .foreground-right {
          will-change: transform;
          transform: scale(1.0);
          width: 50%;
          height: 100%;
          background-image: url('/img/welcome/fg-right.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right bottom;
          background-color: black;
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
          height: 100%;
          width: 100%;
        }
        .centerpiece {
          font-size: 2rem;
          will-change: opacity;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          color: ${HEADER_TITLE.BACKGROUND};
        }
        .centerpiece.inverse {
          opacity: 0;
          color: #FFF;
        }
        .horizontalbar {
          will-change: width;
          padding: 1rem 0;
          border-top: 2px solid ${HEADER_TITLE.FOREGROUND};
          width: 30px;
        }
      `}</style>
    </div>
  )
}

export default Banner;
