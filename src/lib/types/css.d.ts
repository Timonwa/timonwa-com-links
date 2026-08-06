// Ambient declarations for style imports.
// Next handles these at build time; this tells TypeScript they're valid modules.

// Side-effect global stylesheet imports, e.g. import "@/styles/globals.css".
declare module "*.css";

// CSS Modules, e.g. import styles from "./foo.module.css".
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
