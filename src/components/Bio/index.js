import React from "react";

class Bio extends React.Component {
  render() {
    return (
      <div>
        <div id="bio">
          <h2>Technical Leader and Developer</h2>

          <div id="socialIcons">
            <a
              class="socialIcon"
              target="_blank"
              id="facebookIcon"
              href="http://themolitor.com/facebook"
            >
              {" "}
            </a>
            <a
              class="socialIcon"
              target="_blank"
              id="twitterIcon"
              href="http://themolitor.com/twitter"
            >
              {" "}
            </a>
            <a
              class="socialIcon"
              target="_blank"
              id="youTubeIcon"
              href="http://youtube.com/themolitor"
            >
              {" "}
            </a>
            <a
              class="socialIcon"
              target="_blank"
              id="gplusIcon"
              href="http://themolitor.com/gplus"
            >
              {" "}
            </a>
            <a
              class="socialIcon"
              target="_blank"
              id="dribbbleIcon"
              href="http://dribbble.com/themolitor"
            >
              {" "}
            </a>
          </div>
          <p>
            Known as "THE MOLITOR", I'm a web designer and WordPress theme
            developer living in the outskirts of Seattle with my wife and two
            kids. I'm an active author on ThemeForest where I enjoy spending my
            day in Photoshop converting custom designs into fancy-pants{" "}
          </p>
        </div>
        <div class="clear" />
      </div>
    );
  }
}

export default Bio;
