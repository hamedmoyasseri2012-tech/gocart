import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MySwiper() {
  return (
    <Swiper
      className="flex justify-center items-center text-center gap-3 p-2 text-xs transition-all active: duration-300 "
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="border w-24 h-18 text-[#62748e] bg-[#f1f4f9]">
        Headphones
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Speakers
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Watch
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Earbuds
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Mouse
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Decoration
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Headphones
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Speakers
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Watch
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Earbuds
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Mouse
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Decoration
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Headphones
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Speakers
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Watch
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Earbuds
      </SwiperSlide>
      <SwiperSlide className="border w-10 text-center pl-1 h-10 text-[#62748e] bg-[#f1f4f9]">
        Mouse
      </SwiperSlide>
    </Swiper>
  );
}
