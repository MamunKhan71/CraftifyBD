import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Hero from './Hero';

const Banner = () => {
    return (
        <div className='h-[650px] relative my-12'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper h-full rounded-2xl shadow-xl"
            >
                <SwiperSlide><img className='object-cover' src="/images/banner-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover' src="/images/banner-2.jpg" alt="" /></SwiperSlide>
            </Swiper>
            <div className='p-12 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex gap-6 items-center justify-center flex-col'>
                <Hero/>
            </div>
        </div>
    );
};

export default Banner;