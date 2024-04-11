import { navbar } from "./src/components/navbar/navbar.js";
import { header } from "./src/components/section/header.js";
import { ourServices } from "./src/components/section/ourServices.js";
import { missionValue } from "./src/components/section/missionValue.js";
import { aboutUs } from "./src/components/section/aboutUs.js";
import {
  gallery,
  galleryEventListener,
} from "./src/components/section/gallery.js";
import { contact } from "./src/components/section/contact.js";
import { footer } from "./src/components/footer/footer.js";
import { ourTeam } from "./src/components/section/ourTeam.js";
import { injectSpeedInsights } from '@vercel/speed-insights';
const showSectionSeparator = false;

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML += navbar(showSectionSeparator); // navbar
  document.body.innerHTML += header(showSectionSeparator); // hero page
  document.body.innerHTML += aboutUs(showSectionSeparator); // about us
  document.body.innerHTML += missionValue(showSectionSeparator); // mission vision and value
  document.body.innerHTML += ourTeam(showSectionSeparator); // our team
  document.body.innerHTML += ourServices(showSectionSeparator); // services
  document.body.innerHTML += gallery(showSectionSeparator); // gallery -- carousel nao funciona
  document.body.innerHTML += contact(showSectionSeparator); // contact
  document.body.innerHTML += footer(showSectionSeparator); // footer
  galleryEventListener();
  injectSpeedInsights();


});

