import React from "react";
import "./slideshow.css";
export default class SlideShow extends React.Component {
  state = {
    current: 0
  };

  prevImage = () => {
    const { images } = this.props;
    const { current } = this.state;

    if (current === 0) {
      this.setState({
        current: images.length - 1
      });
    } else {
      this.setState({
        current: current - 1
      });
    }
  };

  nextImage = () => {
    const { images } = this.props;
    const { current } = this.state;

    if (current >= images.length - 1) {
      this.setState({
        current: 0
      });
    } else {
      this.setState({
        current: this.state.current + 1
      });
    }
  };

  render() {
    const { images } = this.props;
    const { current } = this.state;

    return (
      <div className="container">
        <div
          className="imageContainer"
          style={{
            backgroundImage: `url(${images[current]})`
          }}
        >
          <div className="controls">
            <button className="controls__button" onClick={this.prevImage}>
              <i className="fa fa-chevron-left" />
            </button>
            <button className="controls__button" onClick={this.nextImage}>
              <i className="fa fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
