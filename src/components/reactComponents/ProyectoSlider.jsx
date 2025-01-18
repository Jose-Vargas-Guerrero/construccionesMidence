import "./ProyectoSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slide1 from "/src/images/hero.jpg";

function ProyectoSlider({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
}) {
  return (
    <div>
      <div className="sliderContainer">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={2}
          navigation
        >
          {!image1 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image1} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image2 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image2} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image3 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image3} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image4 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image4} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image5 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image5} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image6 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image6} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image7 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image7} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image8 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image8} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image9 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image9} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
          {!image10 ? null : (
            <SwiperSlide>
              <div className="bodySlide">
                <img src={image10} className="proyectoSlide" />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default ProyectoSlider;
