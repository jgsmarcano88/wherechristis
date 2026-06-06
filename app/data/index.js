import en from "./entries.js";
import es from "./entries.es.js";
import fr from "./entries.fr.js";

export const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];

export const entriesByLang = { en, es, fr };

export const ui = {
  en: {
    closing: "Now close this, and go live it.",
    tagline: "Set your mind on things above.",
    share: "Share this as an image",
    preparing: "Preparing...",
    send: "Send this to someone",
  },
  es: {
    closing: "Ahora cierra esto, y ve a vivirlo.",
    tagline: "Poned la mira en las cosas de arriba.",
    share: "Compartir como imagen",
    preparing: "Preparando...",
    send: "Enviar a alguien",
  },
  fr: {
    closing: "Maintenant ferme ceci, et va le vivre.",
    tagline: "Affectionnez-vous aux choses d\u2019en haut.",
    share: "Partager en image",
    preparing: "Préparation...",
    send: "Envoyer à quelqu'un",
  },
};