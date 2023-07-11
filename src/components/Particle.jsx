import Particles from 'react-tsparticles';
import { useThemeContext } from "../hooks/themeHook";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const LIGHT_THEME_PARTICLES = {
  number: {
    value: 50,
    density: {
      enable: true,
      value_area: 700,
    },
  },
  color: {
    value: '#0e4429',
  },
  opacity: {
    value: 1,
    random: true,
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.1,
      sync: false,
    },
  },
  size: {
    value: 4,
    random: true,
    anim: {
      enable: true,
      speed: 2,
      size_min: 1,
      sync: false,
    },
  },
  links: {
    enable: true,
    color: '#0e4429',
    distance: 50,
    width: 1,
    consent: false,
  },
  move: {
    enable: true,
    speed: 1,
    direction: 'none',
    random: false,
    straight: false,
    out_mode: 'out',
    bounce: false,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200,
    },
  },
};

export const DARK_THEME_PARTICLES = {
  number: {
    value: 150,
    density: {
      enable: true,
      area: 800,
    },
  },
  move: {
    enable: true,
    direction: 'none',
    speed: 0.3,
  },
  size: {
    value: 1,
  },
  opacity: {
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.05,
    },
  },
};

function Particle() {
  const { dark } = useThemeContext();

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    // await console.log(container);
}, []);


  const particles = dark
    ? DARK_THEME_PARTICLES
    : LIGHT_THEME_PARTICLES;

  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onclick: {
                            enable: true,
                            mode: 'push',
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                particles: particles,
                detectRetina: true,
            }}
        />
  );
}

export default Particle;
