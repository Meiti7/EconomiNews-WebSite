// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    // Add the file-loader rule for mp4 files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          outputPath: "static/videos/", // Specify the output path for the processed videos
          publicPath: isServer ? "static/videos/" : "/_next/static/videos/",
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};
