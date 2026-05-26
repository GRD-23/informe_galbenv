export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: "#1a365d",   // azul académico
        secondary: "#4a5568", // gris sobrio
        accent: "#c53030",    // rojo académico
        background: "#f7fafc", // fondo claro
      },
    },
  },
  plugins: [],
}
