module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html"],
    darkMode: "media", // false or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "gold": "#D2AC4A",
                "gold-light": "#FFD700",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
