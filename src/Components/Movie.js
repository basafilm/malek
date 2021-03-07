import React from "react";

function Movie() {
  return (
    <div className="movie-countainer">
      <h5>MOVIE PROJECTS:</h5>
      <div className="movie-text">
        <h6>Awards: </h6>
        <ul class="list-group ">
          <li class="list-group-item bg-dark">
            <strong className="strong">Award</strong> of second-best movie from
            Women’s Voices Now Film Festival, USA
          </li>
          <li class="list-group-item bg-dark">
            <strong className="strong">Award</strong> of Excellence from
            Yamagata International Documentary Film Festival, Japan
          </li>
          <li class="list-group-item bg-dark">
            As a filmmaker I worked as director, writer, producer, cameraman and
            did post-productions for about 45 movies independently and with
            international team.
          </li>
        </ul>
        <h5>Some of My Available Public Movies:</h5>
      </div>
      <div className="video-container">
        <iframe
          src="https://player.vimeo.com/video/337973078"
          width="{video_width}"
          height="{video_height}"
          frameborder="0"
          title="{video_title}"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowfullscreen="true"
        >
          Think Rights
        </iframe>

        <iframe
          title="BASA Film Channel"
          src="https://www.youtube.com/embed/Ue7JNx0u6OY"
          width="{video_width}"
          height="{video_height}"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowfullscreen="true"
        ></iframe>
        <iframe
          title="BASA Film Channel"
          src="https://www.youtube.com/embed/__iDPwrvQvE"
          width="{video_width}"
          height="{video_height}"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default Movie;
