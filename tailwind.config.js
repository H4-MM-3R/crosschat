/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                "2xl": "1360px",
            },
        },
        extend: {
            backgroundImage: {
                contactusBg:
                    "url('https://img.freepik.com/free-vector/hand-drawn-houseplant-collection_23-2148911678.jpg?w=826&t=st=1704484586~exp=1704485186~hmac=81aecbb18c7bfebc1e354987a0083914a4b0a3fd0b9a404002559f55d85dfa6d'), -webkit-linear-gradient(left, #654120, #2c6e31 )",
                maskBg:
                    "https://aloha.com/cdn/shop/files/Mask_Group_035d30ed-871e-424f-bbf3-d66ecba58127.webp?v=1695353925",
                gradBg: "linear-gradient(to right, #654120, #2c6e31)",
                maskImg: "url('https://th.bing.com/th/id/OIG3.iKIcNZNu9sEGifx5Tf9j?w=1024&h=1024&rs=1&pid=ImgDetMain')",
                maskImgNew: "url('https://cdn2.vectorstock.com/i/1000x1000/75/21/outline-drawing-mobile-phone-chat-message-vector-20757521.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
