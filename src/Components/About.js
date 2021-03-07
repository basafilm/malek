import React from "react";

function About() {
  return (
    <div class="container">
      <div>
        <h1>EDUCATION:</h1>
        <ul class="list-group ">
          <li class="list-group-item bg-dark">
            2019 -2020 Full stack web development, Hack Your Future, Copenhagen
          </li>
          <li class="list-group-item bg-dark">
            2012 CEC Art Links residency Program / Center for Documentary
            Studies of Duke University, USA
          </li>
          <li class="list-group-item bg-dark">
            2008-2011 BBA, Sociology, Kateb University, Kabul
          </li>
        </ul>
      </div>
      <div>
        <h1>WORK EXPERIENCE:</h1>
        <ul class="list-group ">
          <li class="list-group-item bg-dark">
            2019 IFFS jury for Don Quixote award, Tromsø International Film
            Festival, Norway
          </li>
          <li class="list-group-item bg-dark">
            2001- 2019 produced and collaborated to more than 45 movies.
          </li>
          <li class="list-group-item bg-dark">
            2017 jury at the Movies that Matter Festival, Netherland.
          </li>
          <li class="list-group-item bg-dark">
            {" "}
            2010 – 2017, Founder/ Director of Afghanistan International Human
            Right Film Festival
          </li>
          <li class="list-group-item bg-dark">
            2011 Line Producer, UNAMA, Kabul, Afghanistan
          </li>
        </ul>
      </div>

      <div>
        <h1>COMMUNITY INVOLVEMENT:</h1>
        <ul class="list-group ">
          <li class="list-group-item bg-dark">
            2019 – present/ videos/ website Think Rights, Danish Forum for Human
            Rights
          </li>
          <li class="list-group-item bg-dark">
            2017- present / member of ImmArt, Copenhagen, Denmark
          </li>
          <li class="list-group-item bg-dark">
            2013 – 2016 / Burnaby Art Council, Board of Directors, Burnaby, BC,
            Canada{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
