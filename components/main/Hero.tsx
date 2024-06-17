import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-screen w-screen" id="home">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-0 h-screen w-screen left-0 z-[1] object-cover"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;
