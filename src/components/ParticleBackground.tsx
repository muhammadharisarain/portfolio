'use client'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'
import { useTheme } from './ThemeProvider'

export default function ParticleBackground() {
  const [init, setInit] = useState(false)
  const { theme } = useTheme()

  // Neon green vanishes against a light background, so light mode uses the
  // deep emerald accent and slightly lower opacity to stay unobtrusive.
  const isLight = theme === 'light'
  const particleColor = isLight ? '#047857' : '#00ff88'
  const particleOpacity = isLight ? 0.22 : 0.3
  const linkOpacity = isLight ? 0.1 : 0.15

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
              color: particleColor,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: linkOpacity,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: particleOpacity,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [particleColor, particleOpacity, linkOpacity]
  )

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={options}
    />
  )
}
