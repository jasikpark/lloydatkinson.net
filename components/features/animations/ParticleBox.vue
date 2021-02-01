<template>
    <div class="particle-container">
        <div id="tsparticles" />
        <div class="">
            <slot />
        </div>
    </div>
</template>

<script>
import { tsParticles } from 'tsparticles';

export default {
    
    mounted () {  
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 6,
                    density: {
                        enable: false,
                        value_area: 800
                    }
                },
                color: {
                    // value: "#DC2626"
                    value: [
                        '#3B82F6',
                        '#DC2626',
                        '#FBBF24',
                        '#10B981',
                        '#DB2777',
                    ]
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: "#000"
                    },
                    polygon: {
                        nb_sides: 6
                    },
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.3,
                        sync: false
                    }
                },
                size: {
                    value: 50,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 8,
                        size_min: 40,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 200,
                    color: "#ffffff",
                    opacity: 1,
                    width: 2
                },
            },
            retina_detect: true
        });

    },
};
</script>

<style>
.particle-container {
  position: relative;
}

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
}

</style>