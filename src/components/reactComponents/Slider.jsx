import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import slide1 from '/src/images/slide1.png'
import slide2 from '/src/images/slide2.png'
import { Navigation } from "swiper/modules";

function Slider() {
  return (
    <div className="sliderContainer">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
            <div className="bodySlide">
                <div className="bodyText">
                    <h3>Nuestra Misión</h3>
                    <p>
                    Diseñamos soluciones de construcción innovadoras y de alta calidad, priorizando tecnología avanzada, eficiencia y sostenibilidad para generar un impacto positivo en la sociedad.
                    </p>
                </div>
                <img src={slide1.src}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bodySlide">
                <div className="bodyText">
                    <h3>Nuestra Visión</h3>
                    <p>
                    Ser la constructora líder y referente del sector, reconocida por excelencia, innovación y compromiso con la sostenibilidad, que promueven desarrollo responsable.
                    </p>
                </div>
                <img src={slide2.src}/>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
