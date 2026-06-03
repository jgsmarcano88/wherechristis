import en from "./entries.js";
import es from "./entries.es.js";

export const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export const entriesByLang = { en, es };

export const ui = {
  en: {
    closing: "Now close this, and go live it.",
    tagline: "Set your mind on things above.",
    share: "Share this as an image",
    preparing: "Preparing...",
  },
  es: {
    closing: "Ahora cierra esto, y ve a vivirlo.",
    tagline: "Poned la mira en las cosas de arriba.",
    share: "Compartir como imagen",
    preparing: "Preparando...",
  },
};