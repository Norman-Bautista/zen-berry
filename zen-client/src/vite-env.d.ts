/// <reference types="vite/client" />

// Declare CSS modules
declare module '*.css' {
  const css: string
  export default css
}

// For CSS modules (if you're using *.module.css)
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

// For other assets you might use
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'