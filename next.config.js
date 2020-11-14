const withVideos = require('next-videos')
module.exports = withVideos()

const withImages = require('next-images')
module.exports = withImages()


module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./utils/generateSiteMap')
      }
  
      return config
    }
  }