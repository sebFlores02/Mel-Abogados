"use client";

import Image from "next/image";

const LogoCarousel = () => {
  return (
    <>
      <div className="logos">
        <div className="logos-slide">
          <img src={"/home.png"} />
          <img src={"/emailWine.png"} />
          <img src={"/phoneWine.png"} />
          <img src={"/send.png"} />
          <img src={"/icons/close.png"} />
          <img src={"/icons/menu.png"} />
          <img src={"/icons/next.png"} />
          <img src={"/LOGO.png"} />
        </div>
        <div className="logos-slide">
          <img src={"/home.png"} />
          <img src={"/emailWine.png"} />
          <img src={"/phoneWine.png"} />
          <img src={"/send.png"} />
          <img src={"/icons/close.png"} />
          <img src={"/icons/menu.png"} />
          <img src={"/icons/next.png"} />
          <img src={"/LOGO.png"} />
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .logos {
          overflow: hidden;
          padding: 60px 0;
          background: white;
          white-space: nowrap;
          position: relative;
          display: flex;
          gap: 20px;
        }

        .logos:before,
        .logos:after {
          position: absolute;
          top: 0;
          width: 250px;
          height: 100%;
          content: "";
          z-index: 2;
        }

        .logos:before {
          left: 0;
          background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
        }

        .logos:after {
          right: 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
        }

        .logos:hover .logos-slide {
          animation-play-state: paused;
        }

        .logos-slide {
          display: inline-block;
          animation: 5s slide infinite linear;
          display: flex;
          gap: 50px;
        }

        .logos-slide img {
          height: 50px;
          margin: 0 40px;
        }
      `}</style>
    </>
  );
};

export default LogoCarousel;
