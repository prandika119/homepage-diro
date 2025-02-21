/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
            colors: {
                primary_dark: "#0072FF",
                primary: "#00C6FF",
                gradients: ["#0072FF", "#00C6FF"],
            },
            backgroundImage: {
                gradient: "linear-gradient(to right, #00C6FF, #0072FF)",
            },
            boxShadow: {
                custom: "0 10px 20px rgba(0, 114, 255, 0.25)",
            },
        },
        plugins: [],
    },
};
