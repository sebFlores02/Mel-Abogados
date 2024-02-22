import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  var email = "johndoe@fakeemail.com";
  return (
    <main>
      {/* Hero */}

      <header className="bg-third pt-0 min-h-[100vh] flex flex-col justify-between pb-10 ">
        <Header />
        <section className="flex flex-col-reverse lg:flex-row  items-center px-16 xl:px-40 gap-7">
          <section className="basis-3/6 flex flex-col items-center lg:items-start">
            <h2 className="text-center text-white lg:text-left font-bold text-primario text-[20px] sm:text-[32px] lg:text-[42px]">
              <span className="text-primary">Somos líderes</span> Mejorando
              tiempos y procesos de cobranza judicial en Mexico.
            </h2>
            <h3 className="text-[#C1C1C1] text-center lg:text-justify text-base md:text-[18px] pt-8 pb-10 w-[100%] leading-9">
              'No estamos centrados en alcanzar o lograr una meta, sino en
              superarla'
            </h3>
            <button className="bg-primary text-white rounded-[40px] px-16 py-4">
              <a href="#4">CONTÁCTANOS</a>
            </button>
          </section>
          <section className="py-6 lg:py-0 w-full sm:w-1/2 lg:basis-3/6">
            <Image
              src="/Lawllustration.svg"
              width={667}
              height={667}
              alt="Hero Illustration"
            />
          </section>
        </section>
        <section className="md:px-20 xl:px-40 py-10 lg:py-0 flex justify-center lg:justify-start gap-7">
          <a href={`mailto:hola@mxsostenible.com`}>
            <Image
              src="/emailWine.png"
              width={24}
              height={24}
              alt="Logo Twitter"
            />
          </a>
          <a href="https://www.linkedin.com/in/beverlyvel/" target="_blank">
            <Image
              src="/phoneWine.png"
              width={24}
              height={24}
              alt="Logo Twitter"
            />
          </a>
        </section>
      </header>
      {/* <Image
        src="/wave.svg"
        width={330}
        height={330}
        alt="Logo Mel Abogados"
        className="w-full mt-[-10px] md:mt-[-45px] lg:mt-[-80px]"
      /> */}

      {/* Nuestros Socios */}

      <section id="1" className="py-20">
        <h2 className="text-[32px] text-center">Nuestros Socios</h2>
        <p className="text-center text-sm pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          convallis.
        </p>
        <section className="flex justify-center gap-20">
          <section className="bg-[#333333] text-center w-full max-w-[550px] max-h-[370px] rounded-2xl px-10 pb-12 mt-32">
            <section className="bg-[#c9c7c7] rounded-full w-[200px] h-[200px] flex flex-col items-center justify-center mx-auto mt-[-100px] hover:cursor-pointer">
              <Image
                quality={60}
                src={"/ErnestoFoto.jpeg"}
                alt="Kit"
                width={50}
                height={50}
                className={"w-full rounded-full h-full"}
              />
            </section>
            <h3 className="font-medium text-2xl py-6 text-white ">
              Lic. Mónica Yolanda López Garcías
            </h3>
            <p className="leading-9 text-[#8a8a8a] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis imperdiet tortor. Maecenas quis leo consectetur,
              vehicula augue ut, placerat purus.
            </p>
          </section>
          <section className="bg-[#333333] text-center w-full max-w-[550px] max-h-[370px] rounded-2xl px-10 pb-12 mt-32">
            <section className="bg-[#c9c7c7] rounded-full w-[200px] h-[200px] flex flex-col items-center justify-center mx-auto mt-[-100px] hover:cursor-pointer">
              <Image
                quality={60}
                src={"/ErnestoFoto.jpeg"}
                alt="Kit"
                width={50}
                height={50}
                className={"w-full rounded-full h-full"}
              />
            </section>
            <h3 className="font-medium text-2xl py-6 text-white ">
              Lic. Mónica Yolanda López Garcías
            </h3>
            <p className="leading-9 text-[#8a8a8a] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis imperdiet tortor. Maecenas quis leo consectetur,
              vehicula augue ut, placerat purus.
            </p>
          </section>
        </section>
        <section className="flex justify-center gap-20">
          <section className="bg-[#333333] text-center w-full max-w-[550px] rounded-2xl px-10 pb-12 mt-32">
            <section className="bg-[#c9c7c7] rounded-full w-[200px] h-[200px] flex flex-col items-center justify-center mx-auto mt-[40px] hover:cursor-pointer">
              <Image
                quality={60}
                src={"/ErnestoFoto.jpeg"}
                alt="Kit"
                width={50}
                height={50}
                className={"w-full rounded-full h-full"}
              />
            </section>
            <h3 className="font-medium text-2xl py-6 text-white ">
              Lic. Ernesto López García
            </h3>
            <p className="leading-9 text-[#8a8a8a] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis imperdiet tortor. Maecenas quis leo consectetur,
              vehicula augue ut, placerat purus.
            </p>
          </section>
          <section className="bg-[#333333] text-center w-full max-w-[550px] rounded-2xl px-10 pb-12 mt-32">
            <section className="bg-[#c9c7c7] rounded-full w-[200px] h-[200px] flex flex-col items-center justify-center mx-auto mt-[40px] hover:cursor-pointer">
              <Image
                quality={60}
                src={"/ErnestoFoto.jpeg"}
                alt="Kit"
                width={50}
                height={50}
                className={"w-full rounded-full h-full"}
              />
            </section>
            <h3 className="font-medium text-2xl py-6 text-white ">
              Lic. Ernesto López García
            </h3>
            <p className="leading-9 text-[#8a8a8a] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis imperdiet tortor. Maecenas quis leo consectetur,
              vehicula augue ut, placerat purus.
            </p>
          </section>
        </section>
        <section className="flex justify-center gap-20">
          <section className="text-center w-full max-w-[550px] rounded-2xl px-10 pb-12 mt-32">
            <section className="bg-[#c9c7c7] rounded-full w-[200px] h-[200px] flex flex-col items-center justify-center mx-auto mt-[40px] hover:cursor-pointer">
              <Image
                quality={60}
                src={"/ErnestoFoto.jpeg"}
                alt="Kit"
                width={50}
                height={50}
                className={"w-full rounded-full h-full"}
              />
            </section>
            <h3 className="font-medium text-2xl py-6">
              Lic. Mónica Yolanda López Garcías
            </h3>
            <div className="hidden md:block border border-primary w-1/2 mx-auto h-[1px] mt-6" />
            <p className="leading-9 text-[#8a8a8a] my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis imperdiet tortor. Maecenas quis leo consectetur,
              vehicula augue ut, placerat purus.
            </p>
            <div className="hidden md:block border border-primary w-1/2 mx-auto h-[1px] mt-6" />
          </section>
          <section className="text-center w-full max-w-[550px] rounded-2xl px-10 pb-12 mt-32">
            <section className="bg-[#c9c7c7] rounded-full w-[200px] h-[200px] flex flex-col items-center justify-center mx-auto mt-[40px] hover:cursor-pointer">
              <Image
                quality={60}
                src={"/ErnestoFoto.jpeg"}
                alt="Kit"
                width={50}
                height={50}
                className={"w-full rounded-full h-full"}
              />
            </section>
            <h3 className="font-medium text-2xl py-6">
              Lic. Ernesto López García
            </h3>
            <div className="hidden md:block border border-primary w-1/2 mx-auto h-[1px] mt-6" />
            <p className="leading-9 text-[#8a8a8a] my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis imperdiet tortor. Maecenas quis leo consectetur,
              vehicula augue ut, placerat purus.
            </p>
            <div className="hidden md:block border border-primary w-1/2 mx-auto h-[1px] mt-6" />
          </section>
        </section>
      </section>

      {/* Nuestros Servicios */}

      <section id="2" className="bg-secondary py-20">
        <h2 className="text-[32px] text-center">Nuestros Servicios</h2>
        <p className="text-center text-sm pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          convallis.
        </p>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-6 md:grid-rows-5 md:gap-4 pt-10 px-6 lg:px-10 xl:px-40 2xl:px-60">
          <div className="py-8 col-span-2 row-span-2 bg-third rounded-[20px]">
            <h2 className="text-center text-[20px] font-semibold pb-4">
              SEGURO Y FINANZAS
            </h2>
            <ul className="flex flex-col items-center leading-10 list-disc">
              <li>Constitución</li>
              <li>Juicios de recuperación</li>
              <li>Especial de finanzas</li>
            </ul>
          </div>

          <div className="py-8 md:px-2 col-span-2 row-span-2 col-start-1 row-start-3 bg-third rounded-[20px]">
            <h2 className="text-center text-[20px] font-semibold pb-4">
              CARTERA <br /> HIPOTECARIA
            </h2>
            <ul className="flex flex-col items-center leading-10 list-disc">
              <li>Media Residencial</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center py-8 px-4 md:px-2 col-span-2 col-start-1 row-start-5 bg-third rounded-[20px]">
            <h2 className="text-center text-[20px] font-semibold">
              COBRANZA JUDICIAL
            </h2>
          </div>
          <div className="py-8 md:px-2 col-span-2 row-span-3 col-start-3 row-start-1 bg-[#919191] rounded-[20px]">
            <h2 className="text-center text-[20px] font-semibold pb-4">
              FACTORAJE <br /> FINANCIERO
            </h2>
            <ul className="flex flex-col items-center leading-10 list-disc">
              <li>Con recurso</li>
              <li>Sin recurso</li>
              <li>A provedores</li>
              <li>Con mandato de cobranza</li>
            </ul>
          </div>
          <div className="py-8 px-4 md:px-2 col-span-2 row-span-2 col-start-3 row-start-4 bg-[#919191] rounded-[20px]">
            <h2 className="text-center text-[20px] font-semibold pb-4">
              ARRENDAMIENTO FINANCIERO
            </h2>
            <ul className="flex flex-col items-center leading-10 list-disc">
              <li>Plantas Industriales</li>
              <li>Maquinaria y Equipo</li>
              <li>Inmuebles Puro</li>
            </ul>
          </div>
          <div className="py-8 px-4 md:px-2 col-span-2 row-span-3 col-start-5 row-start-1 bg-[#919191] rounded-[20px]">
            <h2 className="text-center text-[20px] font-semibold pb-4">
              CREDITOS EMPRESARIALES
            </h2>
            <ul className="flex flex-col items-center leading-10 list-disc">
              <li>Moneda nacional</li>
              <li>Dolares Finanfiamiento en Línea</li>
              <li>Agro</li>
              <li>Con mandato de cobranza</li>
              <li>Negocios</li>
            </ul>
          </div>
          <div className="py-8 px-4 md:px-2 col-span-2 row-span-2 col-start-5 row-start-4 bg-[#919191] rounded-[20px]">
            <h2 className="text-center text-[20px] font-semibold pb-4">
              CREDITOS <br /> PYME
            </h2>
            <ul className="flex flex-col items-center leading-10 list-disc">
              <li>Fondeo NAFIN</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portafolio */}

      {/* <section className="py-20">
        <h2 className="text-[32px] text-center">Nuestro Portafolio</h2>
        <p className="text-center text-sm pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          convallis.
        </p>
        <section className="flex justify-center py-24 gap-20">
          <Image
            src="/LOGO.png"
            width={330}
            height={330}
            alt="Logo Mel Abogados"
          />
          <Image
            src="/LOGO.png"
            width={330}
            height={330}
            alt="Logo Mel Abogados"
          />
          <Image
            src="/LOGO.png"
            width={330}
            height={330}
            alt="Logo Mel Abogados"
          />
          <Image
            src="/LOGO.png"
            width={330}
            height={330}
            alt="Logo Mel Abogados"
          />
        </section>
      </section> */}

      {/* Sobre Nosotros */}

      <section id="3" className="py-20 bg-secondary px-5 sm:px-10 xl:px-20 ">
        <article className="bg-white rounded-[20px] flex flex-col lg:flex-row justify-between items-center p-8 sm:p-12 md:p-20 gap-4 border border-black border-b-4 border-r-4 ">
          <h2 className="font-semibold text-[32px] text-center lg:mr-10 basis-2/6">
            Conoce Más <br /> Sobre Nosotros
          </h2>
          <p className="basis-4/6 text-justify leading-8 mt-8 lg:mt-0">
            Desde 1998, MEL Abogados se especializa en la recuperación de
            créditos y la cobranza judicial de cartera vencida. Mejoramos
            tiempos y procesos no asignados por nuestros clientes, planificando
            estrategias y agilizando juicios de recuperación. Con años de
            experiencia, desarrollamos lineamientos, manuales y sistemas
            jurídicos, capacitando a nuestro personal antes de su ingreso.
            Nuestro know-how, implementado en procesos y software, convierte a
            nuestros abogados en expertos, logrando resultados inmediatos, con
            metas de recuperación superadas y juicios sin fallos.
          </p>
        </article>

        <section className="py-14">
          <h2 className="text-[32px] text-center">Nuestra Misión y Visión</h2>
          <p className="text-center text-sm pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            convallis.
          </p>

          <section className="flex flex-col md:flex-row justify-center items-center pt-12 gap-6">
            <article className="bg-white border border-black border-b-4 border-r-4 text-center rounded-[20px] p-8 lg:p-14 flex flex-col items-center gap-5">
              <Image
                src="/Mission.png"
                width={80}
                height={80}
                alt="Logo Mel Abogados"
                className=""
              />
              <h3 className="text-[28px] font-medium">Misión</h3>
              <p className="leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                convallis.
              </p>
            </article>
            {/* <div className="hidden md:block border border-primary w-[1px] h-[150px] mt-6" /> */}
            <article className="bg-white border border-black border-b-4 border-r-4 text-center rounded-[20px] p-8 lg:p-14 flex flex-col items-center gap-5">
              <Image
                src="/Mission.png"
                width={80}
                height={80}
                alt="Logo Mel Abogados"
                className=""
              />
              <h3 className="text-[28px] font-medium">Misión</h3>
              <p className="leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                convallis.
              </p>
            </article>
            {/* <div className="hidden md:block border border-primary w-[1px] h-[150px] mt-6" /> */}
            <article className="bg-white border border-black border-b-4 border-r-4 text-center rounded-[20px] p-8 lg:p-14 flex flex-col items-center gap-5">
              <Image
                src="/Mission.png"
                width={80}
                height={80}
                alt="Logo Mel Abogados"
                className=""
              />
              <h3 className="text-[28px] font-medium">Misión</h3>
              <p className="leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                convallis.
              </p>
            </article>
          </section>
        </section>
      </section>

      {/* Carreras en MEL */}

      <section id="4" className="py-20">
        <h2 className="text-[32px] text-center">Carreras En Mel Abogados</h2>
        <p className="text-center text-sm pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          convallis.
        </p>
        <section className="flex flex-col items-center md:flex-row justify-center mt-12 gap-5 xl:gap-9 px-5 sm:px-24 md:px-10 md:px-18 2xl:px-80">
          <article className="bg-primary rounded-[20px] p-6 md:p-8 basis-1/2">
            <h3 className="text-white text-[28px] font-medium">
              Pasante de Derecho
            </h3>
            <p className="text-white text-justify py-5 leading-8">
              Bajo un riguroso sistema de pasantías, los estudiantes de derecho
              que formen parte del mel abogados desarollan bajo la supervision
              de nuestros abogados litigantes una solida base en todo lo que
              comprende el litigio civil y mercantil.
            </p>
            <section className="bg-white rounded-20px border border-black p-6 rounded-[20px]">
              <h4 className="font-semibold text-[22px]">Requisitos</h4>
              <ul className="py-5 list-disc pl-4 leading-8">
                <li>Tienes disponibilidad para trabajar presencialmente.</li>
                <li>
                  Te encuentras entre 3er y ultimo semestre de la carrera de
                  derecho.
                </li>
                <li>Tienes las dispocisión.</li>
              </ul>
              <p className="font-semibold text-primary">
                Si cumples con lo anterior ponte en contacto con nosotros.
              </p>
              <section className="mt-5 flex gap-3">
                <div className="bg-primary rounded-[10px] p-3">
                  <Image
                    src="/phone-call.png"
                    width={20}
                    height={20}
                    alt="Logo Mel Abogados"
                  />
                </div>
                <a href={`mailto:${email}`}>
                  <div className="bg-primary rounded-[10px] p-3">
                    <Image
                      src="/email.png"
                      width={20}
                      height={20}
                      alt="Logo Mel Abogados"
                    />
                  </div>
                </a>
              </section>
            </section>
          </article>

          <article className="bg-secondary rounded-[20px] p-8 basis-1/2">
            <h3 className="text-black text-[28px] font-medium">
              Pasante de Derecho
            </h3>
            <p className="text-black text-justify py-5 leading-8">
              Bajo un riguroso sistema de pasantías, los estudiantes de derecho
              que formen parte del mel abogados desarollan bajo la supervision
              de nuestros abogados litigantes una solida base en todo lo que
              comprende el litigio civil y mercantil.
            </p>
            <section className="bg-white rounded-20px border border-black] p-6 rounded-[20px]">
              <h4 className="font-semibold text-[22px]">Requisitos</h4>
              <ul className="py-5 list-disc pl-4 leading-8">
                <li>Tienes disponibilidad para trabajar presencialmente.</li>
                <li>
                  Te encuentras entre 3er y ultimo semestre de la carrera de
                  derecho.
                </li>
                <li>Tienes las dispocisión.</li>
              </ul>
              <p className="font-semibold text-primary">
                Si cumples con lo anterior ponte en contacto con nosotros.
              </p>
              <section className="mt-5 flex gap-3">
                <div className="bg-primary rounded-[10px] p-3">
                  <Image
                    src="/phone-call.png"
                    width={20}
                    height={20}
                    alt="Logo Mel Abogados"
                  />
                </div>
                <a href={`mailto:${email}`}>
                  <div className="bg-primary rounded-[10px] p-3">
                    <Image
                      src="/email.png"
                      width={20}
                      height={20}
                      alt="Logo Mel Abogados"
                    />
                  </div>
                </a>
              </section>
            </section>
          </article>
        </section>
      </section>

      {/* Contacto */}

      <section id="5" className="py-20 bg-secondary px-5 sm:px-10 xl:px-40">
        <h2 className="text-[32px] text-center">
          Ponte en Contacto con Nosotros
        </h2>
        <p className="text-center text-sm pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          convallis.
        </p>

        <section className="mt-14 bg-white rounded-[20px] border border-black border-b-4 border-r-4 p-6 lg:p-12 flex flex-col md:flex-row justify-between gap-8">
          <section className="bg-secondary border border-black rounded-[20px] px-6 py-7 basis-2/5  flex flex-col items-center md:items-start">
            <h3 className="text-md md:text-[24px] font-semibold mb-6">
              Información De Contacto
            </h3>
            <div className="flex gap-3 mb-5">
              <Image
                src="/phoneWine.png"
                width={25}
                height={25}
                alt="Logo Mel Abogados"
              />
              <p className="text-sm lg:text-base">55-555-5366750</p>
            </div>
            <div className="flex gap-5">
              <Image
                src="/emailWine.png"
                width={25}
                height={25}
                alt="Logo Mel Abogados"
                className="h-[25px] w-[25px]"
              />
              <p className="text-sm lg:text-base">
                contacto@ melabogadosmel.com.mx
              </p>
            </div>
          </section>

          <form className="basis-3/5">
            <section className="flex flex-col sm:flex-row justify-between gap-10 md:gap-5 lg:gap-10">
              <section className="basis-1/2">
                <label className="font-semibold">Nombre</label>
                <input
                  placeholder="Ingresa tu nombre..."
                  className="outline-none border-b border-black pb-2 w-full mt-3"
                />
              </section>
              <section className="basis-1/2">
                <label className="font-semibold">Apellido</label>
                <input
                  placeholder="Ingresa tu nombre..."
                  className="outline-none border-b border-black pb-2 w-full mt-3"
                />
              </section>
            </section>

            <section className="flex flex-col sm:flex-row justify-between gap-10 md:gap-5 lg:gap-10 mt-10">
              <section className="basis-1/2">
                <label className="font-semibold">Correo</label>
                <input
                  type="email"
                  placeholder="Ingresa tu nombre..."
                  className="outline-none border-b border-black pb-2 w-full mt-3"
                />
              </section>
              <section className="basis-1/2 mb-6">
                <label className="font-semibold">Teléfono</label>
                <input
                  type="number"
                  placeholder="Ingresa tu nombre..."
                  className="outline-none border-b border-black pb-2 w-full mt-3"
                />
              </section>
            </section>

            <label className="font-semibold">Mensaje</label>
            <textarea
              placeholder="Tu mensaje..."
              className="outline-none border border-black pb-2 rounded-[20px] w-full py-6 px-6 h-[200px] max-h-[220px] my-4"
            />

            <section className="bg-secondary px-8 py-3 w-full sm:w-fit rounded-[10px] border border-black flex gap-4 justify-center sm:justify-end float-right">
              <Image
                src="/send.png"
                width={25}
                height={25}
                alt="Logo Mel Abogados"
              />
              <input className="pr-4" type="submit" value="Enviar Mensaje" />
            </section>
          </form>
        </section>
      </section>

      {/* Footer */}
      <section className="py-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap:40 bg-primario px-10 md:px-20">
        <section className="basis-1/3">
          <Image
            src="/LOGO.png"
            width={200}
            height={200}
            alt="Logo MX Sostenible"
          />
        </section>
        <p className="basis-1/3 text-center text-xs">
          © 2024 All rights res red.
          <span className="text-primary font-semibold">MEL Abogados</span>
        </p>
        <section className="flex gap-7 basis-1/3 justify-end">
          {/* <div className="bg-primary rounded-full p-3"> */}
          <a href={`mailto:${email}`}>
            <Image
              src="/emailWine.png"
              width={25}
              height={25}
              alt="Logo Mel Abogados"
            />
          </a>
          {/* </div> */}
          {/* <div className="bg-primary rounded-full p-3"> */}
          <Image
            src="/phoneWine.png"
            width={25}
            height={25}
            alt="Logo Mel Abogados"
          />
          {/* </div> */}
        </section>
      </section>
    </main>
  );
}
