import React, { useState } from "react";

function Meme() {
  const [memesData, setMemesArray] = useState([]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImg: "https://i.imgflip.com/1ur9b0.jpg",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesArray(data.data.memes));
  }, []);

  function getNewMeme() {
    const randomNumber = Math.floor(Math.random() * memesData.length);
    const randomMeme = memesData[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImg: randomMeme,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="container">
      <div className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form__input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>

      <button onClick={getNewMeme} className="form__btn">
        Get a new meme image 🖼
      </button>

      <div className="meme">
        <h2 className="meme__text meme__top-text">{meme.topText}</h2>
        <h2 className="meme__text meme__bottom-text">{meme.bottomText}</h2>
        <img className="meme__img" src={meme.memeImg} alt="" />
      </div>
    </main>
  );
}

export default Meme;
