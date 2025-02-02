/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_ACCESS_TOKEN: string;
    // add more variables as needed...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }