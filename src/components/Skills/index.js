import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div>
        <ul id="skills" class="ready">
          <li id="skill1" class="s90">
            <span>WordPress Development</span>
          </li>
          <li id="skill2" class="s70">
            <span>PHP</span>
          </li>
          <li id="skill3" class="s100">
            <span>HTML + CSS</span>
          </li>
          <li id="skill4" class="s100">
            <span>jQuery</span>
          </li>
          <li id="skill5" class="s100">
            <span>Photoshop</span>
          </li>
          <li id="skill6" class="s90">
            <span>SEO</span>
          </li>
          <li id="skill7" class="s90">
            <span>User Interface Design</span>
          </li>
          <li id="skill8" class="s80">
            <span>Marketing</span>
          </li>
          <li id="skill9" class="s40">
            <span>
              <del>Underwater Basket Weaving</del>
            </span>
          </li>
        </ul>

        <div class="clear" />
      </div>
    );
  }
}

export default Skills;