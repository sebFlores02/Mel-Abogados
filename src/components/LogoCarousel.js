"use client";

const images = [
  "/LOGO.png",
  "/app.png",
  "/test.png",
  "/LOGO.png",
  "/LOGO.png",
  "/app.png",
  "/test.png",
  "/LOGO.png",
];

const LogoCarousel = () => {
  return (
    <>
      <div className="logos">
        <h1 className="mt-10 text-[32px] text-center">Nuestro Portafolio</h1>
        <p className="text-center text-sm pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          convallis.
        </p>
        <div className="logos-wrapper">
          {images.concat(images).map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-350px * ${images.length}));
          }
        }
        .logos {
          margin: auto;
          overflow: hidden;
          position: relative;
          width: auto;
        }

        .logos .logos-wrapper {
          display: flex;
          gap: 60px;
          width: calc(350px * ${images.length * 2});
          animation: scroll 30s linear infinite;
          padding: 100px 0;
        }

        .logos .slide {
          height: 100px;
          width: 350px;
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

        .logos:hover .logos-wrapper {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default LogoCarousel;
