import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faSyringe, faFirstAid, faNotesMedical,faHeartbeat, faUserMd, faKitMedical, faPrescriptionBottleAlt, faStethoscope, faShieldVirus, faUser, faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

library.add(faPhone, faSyringe, faFirstAid, faNotesMedical,faHeartbeat, faUserMd, faKitMedical, faPrescriptionBottleAlt, faStethoscope, faShieldVirus, faUser, faHeartPulse);