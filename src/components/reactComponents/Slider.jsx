import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import slide1 from '/src/images/mision.jpg'
import slide2 from '/src/images/vision.jpg'
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
                    <h3>Misión</h3>
                    <p>
                    Diseñamos soluciones de construcción innovadoras y de alta calidad, priorizando tecnología avanzada, eficiencia y sostenibilidad para generar un impacto positivo en la sociedad.
                    </p>
                </div>
                <img src={slide1.src} alt="imagen de nuestra Misión"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bodySlide">
                <div className="bodyText">
                    <h3>Visión</h3>
                    <p>
                    Ser la constructora líder y referente del sector, reconocida por excelencia, innovación y compromiso con la sostenibilidad, que promueven desarrollo responsable.
                    </p>
                </div>
                <img src={slide2.src} alt="imagen de nuestra Visión"/>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
