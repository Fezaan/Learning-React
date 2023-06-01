import React from "react";

const img = "https://picsum.photos/200/300";

function Anime(){
    return(
        <>
        <ul>
        <li>
          One piece<br></br>
          <img
            src="https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg"
            alt="One Pice img"
          />
        </li>
        <li>
          Classroom Of the Elite<br></br>
          <img
            src="https://i0.wp.com/animeindia.in/wp-content/uploads/2022/05/Classroom-of-the-Elite-Season-2.jpg?resize=1024%2C768&ssl=1"
            alt="COTE image"
          />
        </li>
        <li>
          Demon Slayer<br></br>
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-81192,resizemode-75,msid-100223563/news/new-updates/demon-slayer-season-3-episode-6-release-timings-and-where-to-watch.jpg"
            alt="Demon slayer image"
          />
        </li>
        <li>
          <br></br>
          <img src={img + "?grayscale"} alt="grayscale img" />
        </li>
      </ul>
      </>
    )
}

export default Anime;