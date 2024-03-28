import React from "react";
import portf from "../assets/portfolio/portfolios.png";
import socialMediaApp from "../assets/portfolio/socialMediaApp.png";
import cryptotracker from "../assets/portfolio/crypto tracker.png";
import podcast from "../assets/portfolio/podcast.png";
import shoppingCart from "../assets/portfolio/shoppingCart.png";
import ticTacToe from "../assets/portfolio/ticTacToe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portf,
      demo: 'https://symphonious-capybara-b4b963.netlify.app/',
      code: "https://github.com/vickychandra357/portfolio",
    },
    {
      id: 2,
      src: cryptotracker,
      demo: 'https://crypto-tracker-pi-three.vercel.app/',
      code: "https://github.com/vickychandra357/crypto-tracker",
    },
    {
      id: 3,
      src: podcast,
      demo: 'https://podcast-apps.netlify.app/',
      code: "https://github.com/vickychandra357/podcast-app",
    },
    {
      id: 4,
      src: shoppingCart,
      demo: 'https://vickychandra357.github.io/',
      code: "https://github.com/vickychandra357/shoppingcart",
    },
    {
      id: 5,
      src: socialMediaApp,
      demo: 'https://multi-page-reactapp.netlify.app/',
      code: "https://github.com/vickychandra357/multi-page-app",
    },
    {
      id: 6,
      src: ticTacToe,
      demo: 'https://vickychandra357.github.io/tic-tac-toe/',
      code: "https://github.com/vickychandra357/tic-tac-toe",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}
                  target="_blank"
                  rel="noreferrer"
                  >Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={code}
                target="_blank"
                rel="noreferrer"
                  >Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
