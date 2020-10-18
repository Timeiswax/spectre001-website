const withVideos = require('next-videos')
module.exports = withVideos()

const withImages = require('next-images')
module.exports = withImages()

// module.exports = {
//     async redirects() {
//       return [
//         {
//           source: '/about/:slug',
//           destination: '/about/',
//           permanent: true,
//         },
//       ]
//     },
//   }