import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar container-responsive pt-3 fixed-bottom">
        <div className="row">
          <section id="buttons" className="col-3 btn-group h-50 pl-5" role="group">
            <button id="previous" onClick={this.props.handlePrevClick} className="btn btn-secondary">
              <span className="ion-skip-backward"></span>
            </button>
            <button id="play-pause" onClick={this.props.handleSongClick} className="btn btn-secondary">
              <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play' } ></span>
            </button>
            <button id="next" onClick={this.props.handleNextClick} className="btn btn-secondary">
              <span className="ion-skip-forward"></span>
            </button>
          </section>
          <section id="time-control" className="col-6 my-auto">
            <div className="row">
              <p className="current-time text-light col-2 my-auto">{this.props.formatTime(this.props.currentTime)}</p>
              <input
                type="range"
                className="seek-bar slider col-8 my-auto px-0"
                value={(this.props.currentTime / this.props.duration) || 0}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleTimeChange}
              />
              <p className="total-time text-light col-2 my-auto">{this.props.formatTime(this.props.duration)}</p>
            </div>
          </section>
          <section id="volume-control" className="col-3 my-auto">
            <div className="row">
              <span className="icon ion-volume-low col-1 text-light px-0 my-auto"></span>
              <span className="col-8 px-1 my-auto">
                <input
                  type="range"
                  className="seek-bar slider"
                  value={this.props.volume}
                  max="1"
                  min="0"
                  step="0.05"
                  onChange={this.props.handleVolumeChange}
                />
              </span>
              <span className="icon ion-volume-high col-1 text-light px-0 my-auto"></span>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default PlayerBar;
