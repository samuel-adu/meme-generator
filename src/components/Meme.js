import React, { useState } from "react";
import memesData from "../data";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImg: "https://i.imgflip.com/1ur9b0.jpg",
  });

  function getNewMeme() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const randomMeme = memeArray[randomNumber];
    const imgUrl = randomMeme.url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImg: imgUrl,
      name: randomMeme.name,
    }));
  }

  return (
    <main className="">
      <div className="form">
        <input className="form__input" type="text" placeholder="Top text" />
        <input className="form__input" type="text" placeholder="Bottom text" />
      </div>
      <button onClick={getNewMeme} className="form__btn">
        Get a new meme image 🖼
      </button>

      <div className="meme">
        <h2 className="meme__text meme__top-text">{meme.topText}</h2>
        <h2 className="meme__text meme__bottom-text">{meme.bottomText}</h2>

        <div className="meme__img">
          <img src={meme.memeImg} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Meme;
