import React from "react";
import Images1 from "../Images/1.jpg";
import Images2 from "../Images/2.jpg";
import Nature from "../Images/nature.jpg";

function Home() {
  const text1 = "Loading ...";
  const text2 = "A simple act can lead to a big change  &#129409;";
  setTimeout(function () {
    let pTage = document.getElementsByClassName("p-1")[0];
    pTage.innerHTML = text2;
  }, 5000);

  return (
    <div className="main">
      <div className="welcome-text">
        <h2>MALEK SHAFI'I</h2>
      </div>
      <div className="main-image">
        <div className="malek-image">
          <img class="mw-100" src={Images2} alt="gallery images" />
          <p className="photo-cridet">Photo By: Zaki</p>
        </div>
        <div className="main-image-text-container">
          <div className="main-image-text">
            <img className="text-image" src={Nature} alt="gallery images" />
            <h3>
              I am a web developer with experience in making films and I’m
              available for any projects that would combine my passion for web
              development and making films.
            </h3>
          </div>
          <div className="text">
            <p className="p-1">{text1} </p>
          </div>
        </div>
      </div>
      <div class="container d-flex flex-row">
        <div class="w-25 p-3">
          <img class="mw-100" src={Images1} alt="gallery images" />
        </div>
        <div class="w-75 p-3">
          <p class="h5 p-3 mt-5">
            I have about twenty-years of experience in the film industry. As a
            consequence of immigration, I had to start everything from new, for
            example learning new languages and adapting to new environments. The
            latest novel environment encouraged me to decide to learn to
            program, which is a passion I never had the possibility to learn and
            work with in my homeland. During the past year I extensively studied
            full stack web-development at the coding school "Hack Your Future",
            Copenhagen, and had the chance to be part of "Chattie" a messaging
            app.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
