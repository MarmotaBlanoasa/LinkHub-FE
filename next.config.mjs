import withPWAInit from "@ducanh2912/next-pwa";
// const withPWA = require("@ducanh2912/next-pwa").default({
//     dest: "public",
//     cacheOnFrontEndNav: true,
//     aggressiveFrontEndNavCaching: true,
//     reloadOnOnline: true,
//     swcMinify: true,
//     workboxOptions: {
//         disableDevLogs: true,
//     },
// });



const withPWA = withPWAInit({
    dest: "public",
});

export default withPWA({
});