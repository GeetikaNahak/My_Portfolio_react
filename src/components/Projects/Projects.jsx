import React from "react";
import Newcard from "../Newcard/Newcard";
import { useEffect } from "react";

import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      rtl: false,
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".owl-prev").css("background-color", "rgb(51,51,51)");
    $(".owl-next").css("background-color", "rgb(51,51,51)");
  }, []);
  return (
    <div id="projects">
      <div className="title">
        <h1>My Projects</h1>
      </div>

      <div className="projects">
        <h1>
          <i class="fa-solid fa-angle-left"></i>
        </h1>
        <div class="owl-carousel owl-theme">
          <div class="item">
            <Newcard
              title="Amazon Clone"
              text="This is a static clone of Amazon website "
              link="./src/assets/amazon.png"
            />
          </div>
          <div class="item">
            <Newcard
              title="Tribute Page"
              text="This is a simple game developed using javascript "
              link="./src/assets/tribute.png"
            />
          </div>
          <div class="item">
            <Newcard
              title="Fuel-Now"
              text="This is an ecommerce website which delivers fuel "
              link="./src/assets/fuelnow.png"
            />
          </div>
          <div class="item">
            <Newcard
              title="Mind Game"
              text="This is a simple game developed using javascript "
              link="./src/assets/mg.png"
            />
          </div>
          <div class="item">
            <Newcard
              title="Tic Tac Toe"
              text="This is a simple game developed using javascript "
              link="./src/assets/tictactoe.png"
            />
          </div>

          <div class="item">
            <Newcard
              title="Rock-Paper-Scissor"
              text="This is a simple game developed using javascript "
              link="./src/assets/rps.png"
            />
          </div>
        </div>

        <h1>
          <i class="fa-solid fa-angle-right"></i>
        </h1>
      </div>
    </div>
  );
};

export default Projects;
