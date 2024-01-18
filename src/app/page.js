import Image from 'next/image'

export default function Home() {
  var email = 'johndoe@fakeemail.com'
  return (
    <main className=''>
      <header className='bg-[#636363] pt-0 h-[58rem]'>
        <section className='flex justify-between items-center mx-20 pt-8'>
          <Image
          src='/LOGO.png'
          width={200}
          height={200}
          alt='Logo Mel Abogados'
          />
          <ul className='flex gap-10 font-semibold text-white'>
            <li><a href='#1'>Nuestros Socios</a></li>
            <li><a href='#2'>Servicios</a></li>
            <li><a href='#3'>Nuestra Historia</a></li>
            <li><a href='#4'>Unete al Equipo</a></li>
            <li><a href='#5'>Contacto</a></li>
          </ul>
        </section>
        <section className='flex justify-center mt-[110px] items-center'>
          <section className='basis-3/6'>
            <h1 className='font-bold text-white text-[40px] w-[90%]'><span className='text-[#7D0101]'>Somos líderes</span> Mejorando tiempos y procesos de cobranza judicial en Mexico.</h1>
            <h3 className='text-[#C1C1C1] text-[24px] pt-8 pb-10 w-[70%]'>'No estamos centrados en alcanzar o lograr una meta, sino en superarla'</h3>
            <button className='border border-white text-white rounded-[40px] px-16 py-4'><a href='#5'>CONTÁCTANOS</a></button>
          </section>
          <Image
          src='/Lawllustration.svg'
          width={567}
          height={567}
          alt='Logo Mel Abogados'
          className=''
          />
        </section>
      </header>

      {/* Nuestros Socios */}

      <section id='1' className='py-20'>
        <h2 className='text-[32px] text-center'>Nuestros Socios</h2>
        <p className='text-center text-sm pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis.</p>
        <section className='flex justify-center'>
          <article>
            <section className='flex'>

            </section>
          </article>
        </section>
      </section>

      {/* Nuestros Servicios */}

      <section id='2' className='bg-[#D9D9D9] py-20'>
        <h2 className='text-[32px] text-center'>Nuestros Servicios</h2>
        <p className='text-center text-sm pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis.</p>


      <div className='grid grid-cols-6 grid-rows-5 gap-4 pt-10 px-60'>
          <div className='col-span-2 row-span-2 bg-[#919191] rounded-[20px]'>
            <h2 className='text-center text-[20px] font-semibold pt-6 pb-4'>SEGURO Y FINANZAS</h2>
              <ul className='ml-16 leading-9 list-disc'>
                <li>Constitución</li>
                <li>Juicios de recuperación</li>
                <li>Especial de finanzas</li>
              </ul>
          </div>
          <div className='col-span-2 row-span-2 col-start-1 row-start-3 bg-[#919191] rounded-[20px]'>
            <h2 className='text-center text-[20px] font-semibold py-8'>CARTERA <br /> HIPOTECARIA</h2>
              <ul className='ml-16 leading-9 list-disc'>
                <li>Media Residencial</li>
              </ul>
          </div>
          <div className='col-span-2 col-start-1 row-start-5 bg-[#919191] rounded-[20px]'>
            <h2 className='text-center text-[20px] font-semibold py-8'>COBRANZA JUDICIAL</h2>
          </div>
          <div className='col-span-2 row-span-3 col-start-3 row-start-1 bg-[#919191] rounded-[20px]'>
            <h2 className='text-center text-[20px] font-semibold py-8'>FACTORAJE <br /> FINANCIERO</h2>
              <ul className='ml-16 leading-9 list-disc'>
                <li>Con recurso</li>
                <li>Sin recurso</li>
                <li>A provedores</li>
                <li>Con mandato de cobranza</li>
              </ul>
          </div>
          <div className='col-span-2 row-span-2 col-start-3 row-start-4 bg-[#919191] rounded-[20px]'>
            <h2 className='text-center text-[20px] font-semibold pt-6 pb-4'>ARRENDAMIENTO FINANCIERO</h2>
              <ul className='ml-16 leading-9 list-disc'>
                <li>Plantas Industriales</li>
                <li>Maquinaria y Equipo</li>
                <li>Inmuebles Puro</li>
              </ul>
          </div>
          <div className='col-span-2 row-span-3 col-start-5 row-start-1 bg-[#919191] rounded-[20px]'>
            <h2 className='text-center text-[20px] font-semibold py-8'>CREDITOS EMPRESARIALES</h2>
              <ul className='ml-16 leading-9 list-disc'>
                <li>Moneda nacional</li>
                <li>Dolares Finanfiamiento en Línea</li>
                <li>Agro</li>
                <li>Con mandato de cobranza</li>
                <li>Negocios</li>
              </ul>
          </div>
          <div className='col-span-2 row-span-2 col-start-5 row-start-4 bg-[#919191] rounded-[20px]'>
            <h2 className='text-center text-[20px] font-semibold py-8'>CREDITOS <br /> PYME</h2>
              <ul className='ml-16 leading-9 list-disc'>
                <li>Fondeo NAFIN</li>
              </ul>
          </div>
      </div>
      </section>

      {/* Portafolio */}

      <section className='py-20'>
        <h2 className='text-[32px] text-center'>Nuestro Portafolio</h2>
        <p className='text-center text-sm pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis.</p>
        <section className='flex justify-center py-24 gap-20'>
          <Image
            src='/LOGO.png'
            width={330}
            height={330}
            alt='Logo Mel Abogados'
            className=''
            />
          <Image
            src='/LOGO.png'
            width={330}
            height={330}
            alt='Logo Mel Abogados'
            className=''
            />
          <Image
            src='/LOGO.png'
            width={330}
            height={330}
            alt='Logo Mel Abogados'
            className=''
            />
          <Image
            src='/LOGO.png'
            width={330}
            height={330}
            alt='Logo Mel Abogados'
            className=''
            />
        </section>
      </section>

      {/* Sobre Nosotros */}

      <section id='3' className='py-20 bg-[#D9D9D9] px-20'>
        <article className='bg-white rounded-[20px] flex justify-between items-center p-20 gap-4'>
          <h2 className='font-semibold text-[32px] text-center mr-10 basis-2/6'>Conoce Más <br /> Sobre Nosotros</h2>
          <p className='basis-4/6 text-justify leading-8'>Desde 1998, MEL Abogados se especializa en la recuperación de créditos y la cobranza judicial de cartera vencida. Mejoramos tiempos y procesos no asignados por nuestros clientes, planificando estrategias y agilizando juicios de recuperación. Con años de experiencia, desarrollamos lineamientos, manuales y sistemas jurídicos, capacitando a nuestro personal antes de su ingreso. Nuestro know-how, implementado en procesos y software, convierte a nuestros abogados en expertos, logrando resultados inmediatos, con metas de recuperación superadas y juicios sin fallos.</p>
        </article>

        <section className='py-14'>
          <h2 className='text-[32px] text-center'>Nuestra Misión y Visión</h2>
          <p className='text-center text-sm pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis.</p>

          <section className='flex justify-center pt-12 gap-6'>
            <article className='bg-white rounded-[20px] p-14'>
              <section className='flex justify-between items-center pb-8'>
                <h3 className='text-[28px] font-medium'>Misión</h3>
                <Image
                  src='/Mission.png'
                  width={80}
                  height={80}
                  alt='Logo Mel Abogados'
                  className=''
                />
              </section>
              <p className='text-justify leading-8'>Dar solución a cada planteamiento jurídico, de manera eficaz, segura, confiable y expedita, garantizando a nuestros clientes resultados que se reflejen en el crecimiento y fortaleza de su empresa y persona.</p>
            </article>
            <article className='bg-white rounded-[20px] p-14'>
              <section className='flex justify-between items-center pb-8'>
                <h3 className='text-[28px] font-medium'>Misión</h3>
                <Image
                  src='/Mission.png'
                  width={80}
                  height={80}
                  alt='Logo Mel Abogados'
                  className=''
                />
              </section>
              <p className='text-justify leading-8'>Dar solución a cada planteamiento jurídico, de manera eficaz, segura, confiable y expedita, garantizando a nuestros clientes resultados que se reflejen en el crecimiento y fortaleza de su empresa y persona.</p>
            </article>
            <article className='bg-white rounded-[20px] p-14'>
              <section className='flex justify-between items-center pb-8'>
                <h3 className='text-[28px] font-medium'>Misión</h3>
                <Image
                  src='/Mission.png'
                  width={80}
                  height={80}
                  alt='Logo Mel Abogados'
                  className=''
                />
              </section>
              <p className='text-justify leading-8'>Dar solución a cada planteamiento jurídico, de manera eficaz, segura, confiable y expedita, garantizando a nuestros clientes resultados que se reflejen en el crecimiento y fortaleza de su empresa y persona.</p>
            </article>

          </section>

        </section>
      </section>

      {/* Carreras en MEL */}

      <section id='4' className='py-20'>
        <h2 className='text-[32px] text-center'>Carreras En Mel Abogados</h2>
        <p className='text-center text-sm pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis.</p>
        <section className='flex justify-center mt-12 gap-9'>
          <article className='bg-[#7d0101] rounded-[20px] p-8 max-w-[460px] max-h-[700px]'>
            <h3 className='text-white text-[28px] font-medium'>Pasante de Derecho</h3>
            <p className='text-white text-justify py-5 leading-8'>Bajo un riguroso sistema de pasantías, los estudiantes de derecho que formen parte del mel abogados desarollan bajo la supervision de nuestros abogados litigantes una solida base en todo lo que comprende el litigio civil y mercantil.</p>
            <section className='bg-white rounded-20px border border-black] p-6 rounded-[20px]'>
              <h4 className='font-semibold text-[22px]'>Requisitos</h4>
              <ul className='py-5 list-disc pl-4 leading-8'>
                <li>Tienes disponibilidad para trabajar presencialmente.</li>
                <li>Te encuentras entre 3er y ultimo semestre de la carrera de derecho.</li>
                <li>Tienes las dispocisión.</li>
              </ul>
              <p className='font-semibold text-[#7d0101]'>Si cumples con lo anterior ponte en contacto con nosotros.</p>
              <section className='mt-5 flex gap-3'>
                <div className='bg-[#7D0101] rounded-[10px] p-3'>
                  <Image
                    src='/phone-call.png'
                    width={20}
                    height={20}
                    alt='Logo Mel Abogados'
                  />
                </div>
                <a href={`mailto:${email}`}>
                  <div className='bg-[#7D0101] rounded-[10px] p-3'>
                    <Image
                      src='/email.png'
                      width={20}
                      height={20}
                      alt='Logo Mel Abogados'
                    />
                  </div>
                </a>
              </section>
            </section>
          </article>

          <article className='bg-[#D9D9D9] rounded-[20px] p-8 max-w-[460px]'>
            <h3 className='text-black text-[28px] font-medium'>Pasante de Derecho</h3>
            <p className='text-black text-justify py-5 leading-8'>Bajo un riguroso sistema de pasantías, los estudiantes de derecho que formen parte del mel abogados desarollan bajo la supervision de nuestros abogados litigantes una solida base en todo lo que comprende el litigio civil y mercantil.</p>
            <section className='bg-white rounded-20px border border-black] p-6 rounded-[20px]'>
              <h4 className='font-semibold text-[22px]'>Requisitos</h4>
              <ul className='py-5 list-disc pl-4 leading-8'>
                <li>Tienes disponibilidad para trabajar presencialmente.</li>
                <li>Te encuentras entre 3er y ultimo semestre de la carrera de derecho.</li>
                <li>Tienes las dispocisión.</li>
              </ul>
              <p className='font-semibold text-[#7d0101]'>Si cumples con lo anterior ponte en contacto con nosotros.</p>
              <section className='mt-5 flex gap-3'>
                <div className='bg-[#7D0101] rounded-[10px] p-3'>
                  <Image
                    src='/phone-call.png'
                    width={20}
                    height={20}
                    alt='Logo Mel Abogados'
                  />
                </div>
                <a href={`mailto:${email}`}>
                  <div className='bg-[#7D0101] rounded-[10px] p-3'>
                    <Image
                      src='/email.png'
                      width={20}
                      height={20}
                      alt='Logo Mel Abogados'
                    />
                  </div>
                </a>
              </section>
            </section>
          </article>
        </section>
      </section>

      {/* Contacto */}

      <section id='5' className='py-20 bg-[#D9D9D9] px-20'>
          <h2 className='text-[32px] text-center'>Ponte en Contacto con Nosotros</h2>
          <p className='text-center text-sm pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis.</p>

          <section className='mt-14 bg-white rounded-[20px] border border-black border-b-4 border-r-4 p-12 flex justify-between gap-8'>

            <section className='bg-[#D9D9D9] border border-black rounded-[20px] px-8 py-7 basis-2/5'>
              <h3 className='text-[24px] font-semibold mb-6'>Información De Contacto</h3>
              <div className='flex gap-5 mb-5'>
                <Image
                  src='/phoneWine.png'
                  width={25}
                  height={25}
                  alt='Logo Mel Abogados'
                />
                <p>55-555-5366750</p>
              </div>
              <div className='flex gap-5'>
                <Image
                  src='/emailWine.png'
                  width={25}
                  height={25}
                  alt='Logo Mel Abogados'
                />
                <p>contacto@melabogadosmel.com.mx</p>
              </div>
            </section>

            <form className='basis-3/5'>
              <section className='flex justify-between gap-10'>
                <section className='basis-1/2'>
                  <label className='font-semibold'>Nombre</label>
                  <input placeholder='Ingresa tu nombre...' className='outline-none border-b border-black pb-2 w-full mt-3' />
                </section>
                <section className='basis-1/2'>
                  <label className='font-semibold'>Apellido</label>
                  <input placeholder='Ingresa tu nombre...' className='outline-none border-b border-black pb-2 w-full mt-3' />
                </section>
              </section>

              <section className='flex justify-between gap-10 mt-10'>
                <section className='basis-1/2'>
                  <label className='font-semibold'>Correo</label>
                  <input type='email' placeholder='Ingresa tu nombre...' className='outline-none border-b border-black pb-2 w-full mt-3' />
                </section>
                <section className='basis-1/2 mb-6'>
                  <label className='font-semibold'>Teléfono</label>
                  <input type='number' placeholder='Ingresa tu nombre...' className='outline-none border-b border-black pb-2 w-full mt-3' />
                </section>
              </section>

              <label className='font-semibold'>Mensaje</label>
              <textarea placeholder='Tu mensaje...' className='outline-none border border-black pb-2 rounded-[20px] w-full py-6 px-6 h-[200px] max-h-[220px] my-4' />

              <section className='bg-[#D9D9D9] px-8 py-3 rounded-[10px] border border-black flex gap-4 justify-end w-fit float-right'>
                <Image
                    src='/send.png'
                    width={25}
                    height={25}
                    alt='Logo Mel Abogados'
                  />
                <input className='pr-4' type='submit' value='Enviar Mensaje' />
              </section>
            </form>

          </section>

        </section>

      {/* Footer */}

      <section className='py-12 flex justify-center items-center gap-40'>
        <div className='basis-1/3 flex justify-center'>
          <Image
            src='/LOGO.png'
            width={200}
            height={200}
            alt='Logo Mel Abogados'
          />
        </div>
        <p className='basis-1/3 text-center'>© 2024 All rights res red. <span className='text-[#7D0101] font-semibold'>MEL Abogados</span></p>
        <section className='flex justify-center basis-1/3 gap-4'>
          <div className='bg-[#7D0101] rounded-full p-3'>
            <a href={`mailto:${email}`}>
              <Image
                src='/email.png'
                width={25}
                height={25}
                alt='Logo Mel Abogados'
              />
            </a>
          </div>
          <div className='bg-[#7D0101] rounded-full p-3'>
            <Image
              src='/phone-call.png'
              width={25}
              height={25}
              alt='Logo Mel Abogados'
            />
          </div>
        </section>
      </section>

    </main>
  )
}

