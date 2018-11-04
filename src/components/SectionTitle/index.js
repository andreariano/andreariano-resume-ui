import React from "react";
import PropTypes from "prop-types";

class SectionTitle extends React.Component {
  render() {
    return (
      <h2 id={this.props.id} class="sectionHead">{this.props.title}</h2>
    );
  }
}

SectionTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SectionTitle;
