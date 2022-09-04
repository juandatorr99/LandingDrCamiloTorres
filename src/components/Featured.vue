<template>
  <div class="py-12 bg-white" id="especialidades">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-dr-blue font-semibold tracking-wide uppercase">Especialidades</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Especialidades del Dr. Camilo Torres</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Conoce las especialidades del Dr. Camilo y <a class="underline" href="http://tel:3155749037">llamanos</a> si tienes cualquier duda</p>
        <span><i class="fas fa-syringe  fa-stack-1x fa-inverse"></i></span>      
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-dr-blue text-white">
                <!-- <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" /> -->
                <font-awesome-icon :icon="feature.icon" class="h-8 w-8" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-700">{{ feature.name }}</p>
            </dt>
            <dd class="mt-1 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { faBookMedical, faFirstAid, faHeartbeat, faNotesMedical, faPhone, faPrescriptionBottleAlt, faShieldVirus, faStethoscope, faSyringe, faUserMd } from '@fortawesome/free-solid-svg-icons';
const features = [
  {
    name: 'Medicina Familiar',
    description:
      'Especialista de la Universidad Del Valle, enfoque preventivo y biopsicosocial de los pacientes, con experiencia de 29 años de ejercicio profesional',
    icon: faUserMd,
  },
  {
    name: 'Medicina Integrativa',
    description:
      'Combina lo mejor de la medicina clásica con lo más avanzado en medicina alternativa, e integra los tratamientos que recibe el paciente con complementos de fitoterapia, homeopatía o medicina ortomolecular, para mejorar la salud integralmente, teniendo en cuenta los aspectos físico, emocional, mental y espiritual.',
    icon: faHeartbeat,
  },
  {
    name: 'Terapía Neural',
    description:
      'Técnica creada en Alemania por los doctores Walter y Ferdinand Huneke que consiste en la aplicación de pequeñas dosis de Procaina (sustancia bipolar, repolarizadora de la membrana basal de las células) para que los impulsos energéticos que viajan a través de los diferentes tejidos y órganos del cuerpo lleven la información adecuada, y no sean bloqueados por cicatrices, granulomas en odontones, fracturas, entre otros.',
    icon: faSyringe,
  },
  {
    name: 'Homeopatía',
    description:
      'La homeopatía es un sistema de medicina alternativa creado en 1796 por Samuel Hahnemann basado en su doctrina de lo similar cura lo similar, que sostiene que una sustancia que causa los síntomas de una enfermedad en personas sanas curará lo similar en personas enfermas. Cada día se realizan investigaciones sobre todo en Europa para validar el efecto de las sustancias utilizadas en esta técnica con dosis infinitesimales.',
    icon: faFirstAid,
  },
  {
    name: 'Medicina Bioenergética',
    description:
      'La medicina bioenergética es un tratamiento que visualiza al cuerpo de manera holística, de esta forma, lo anterior hace referencia a que trabaja de manera conjunta el aspecto físico, mental, emocional y espiritual del cuerpo, teniendo en cuenta el campo de energía alrededor y dentro de nuestro organismo, se recurre a un equilibrio de los centros de energía (chakras). Para ello utiliza filtros de sustancias, láser, visualización y otras múltiples técnicas',
    icon: faNotesMedical,
  },
  {
    name: 'Acupuntura Laser',
    description:
      'La acupuntura es una técnica milenaria que se basa en el estímulo de puntos específicos de nuestro cuerpo a través de agujas muy delgadas o través de luz láser infrarroja, esta última con la ventaja de ser indolora, lo cual permite el equilibrio de nuestra energía (Chi)',
    icon: faPrescriptionBottleAlt,
  },
  {
    name: 'Sueros Ortomoleculares',
    description:
      'Esta disciplina tiene como objetivo prevenir y tratar las enfermedades ayudando al organismo a mantener el equilibrio bioquímico y metabólico de los micronutrientes (vitaminas, minerales, aminoácidos, oligoelementos, antioxidantes, entre otros.)',
    icon: faSyringe,
  },
  {
    name: 'Esencias Florales',
    description:
      'Las esencias florales, también llamadas remedios florales, son infusiones preparadas con la parte floral de una planta. Las personas que utilizan las esencias florales como tratamiento holístico, buscan atender los aspectos mentales, emocionales y hasta los espirituales del bienestar.',
    icon: faPrescriptionBottleAlt,
  },
  {
    name: 'Fitoterapia',
    description:
      'Es una terapia de medicina alternativa, que tiene la posibilidad de curar o aliviar síntomas o enfermedades con plantas medicinales, las plantas usadas en la fitoterapia con principios activos conocidos y medidos, son efectivas para tratar algunas enfermedades.',
    icon: faStethoscope,
  },
  {
    name: 'Vitamina C Endovenosa',
    description:
      'Las dosis endovenosa de vitamina C tiene numerosos efectos en distintas actividades biológicas, quizá más amplios que cualquier otro nutriente. La dosis endovenosa de vitamina C alcanza niveles en sangre mucho más elevados que las dosis orales, Estimula la inmunidad y aumenta las defensas del organismo, reduce el daño oxidativo (tiene efecto antioxidante), mantiene integridad de encías, dientes, huesos, vasos sanguíneos, desintoxica el hígado, entre otros.',
    icon: faShieldVirus,
  },
  {
    name: 'Sueros de Quelación',
    description:
      'La terapia de quelación se ha utilizado durante mucho tiempo como tratamiento para la intoxicación por mercurio y plomo, sin embargo estudios realizados en EEUU demostraron efectos de limpieza vascular sobre todo a nivel periférico y en menor medida a nivel coronario. Es importante resaltar que no sirve para disminuir los niveles de colesterol o triglicéridos en la sangre, para ello se utilizan otras estrategias.',
    icon: faBookMedical,
  },
]
</script>