const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "/src/main.js",

  module: {
    rules: [
      // AQUI SE DEFINEN LOADERS
      /**
       * SINTAXIS
       * {
       *  test: REGEX - para que busque archivos o extensiones
       *  use: INSTRUCCIONES de que va a hacer con esos archivos
       * }
       */
      {
        test: /\.html/, // va a buscar todos los .html
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        // El orden de los loaders es importante
        test: /\.css/,
        use: [
          "style-loader", // PROCESA estilos en linea
          "css-loader", // PROCESA estilos en archivos CSS ],
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCSSExtractPlugin(),
  ],
};

/**
 * LOADERS: reglas o instrucciones que nos ayudan a procesar archivos para generar nuestra salida
 *
 * PLUGINS: agregan funcionalidad extra, TODO plugin depende de un loader
 */
