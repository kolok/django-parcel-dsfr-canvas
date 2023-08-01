/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["jinja2/**/*html", "static/to_compile/**/*{j,t}s"],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {},
        fontFamily: {
            default: ["Graphik", "sans-serif"],
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
    },
    plugins: [],
}
