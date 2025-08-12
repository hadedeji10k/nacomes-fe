import HeroSection from "./HeroSection";
import DotGrid from "./blocks/Backgrounds/DotGrid/DotGrid";
import Particles from "./blocks/Backgrounds/Particles/Particles";

const Header = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 W-full h-full">
        <DotGrid
          dotSize={4}
          gap={12}
          baseColor="#211A2D"
          activeColor="#E53724"
          proximity={60}
          shockRadius={200}
          shockStrength={3}
          resistance={650}
          returnDuration={3}
        />
      </div>

      {/* Particles as background */}
      <div className="absolute inset-0 W-full h-full">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative">
        <HeroSection />
      </div>
    </div>
  );
};

export default Header;
