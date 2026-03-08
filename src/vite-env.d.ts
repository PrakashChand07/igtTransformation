/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BREVO_API_KEY: string;
    readonly VITE_CONTACT_EMAIL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
