import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      hoveredSong: null,
      currentSong: album.songs[0],
      currentTime: 0,
      volume: 0.8,
      duration: album.songs[0].duration,
      isPlaying: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (isSameSong && this.state.isPlaying) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex( song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex( song => this.state.currentSong === song);
    let newIndex = currentIndex + 1;
    if (newIndex === this.state.album.songs.length) { newIndex = 0 }
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }

  formatTime(time) {
    const sec = Math.round(time % 60);
    const min = Math.floor(time / 60);
    if (Number.isNaN(sec) || Number.isNaN(min)) {
      return "-:--"
    } else if (sec < 10) {
      return min + ":0" + sec
    } else {
      return min + ":" + sec
    }
  }

  songNumber(song, index) {
    if ((song === this.state.currentSong && !this.state.isPlaying) || (song === this.state.hoveredSong && song !== this.state.currentSong)) {
      return(<span className="icon ion-play text-light"></span>);
    } else if (song === this.state.currentSong && this.state.isPlaying) {
      return(<span className="icon ion-pause text-light"></span>);
    } else {
      return(index + 1);
    }
  }

  songMouseEnter(song) {
    this.setState({ hoveredSong: song });
  }

  songMouseLeave(song) {
    this.setState({ hoveredSong: null });
  }

  render() {
    return (
      <section className="album container">
        <section id="album-info container">
          <div className="row px-3 mb-4">
            <div className="container col-4">
              <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title + " cover image"} className="img-fluid rounded mw-100"/>
            </div>
            <div className="album-details float-right col-8 text-light font-weight-light">
              <h1 id="album-title">{this.state.album.title}</h1>
              <h2 className="artist">{this.state.album.artist}</h2>
              <div id="release-info">{this.state.album.releaseInfo}</div>
            </div>
          </div>
        </section>
        <section className="container">
          <table id="song-list" className="table text-light table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th className="text-left">Title</th>
                <th className="text-right">Duration</th>
              </tr>
            </thead>
            <tbody>
              { this.state.album.songs.map( (song, index) =>
                <tr key = {index} className="song" onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.songMouseEnter(song, index)} onMouseLeave={() => this.songMouseLeave(song, index)}>
                  <td id="song-number">{ this.songNumber(song, index) }</td>
                  <td id="song-title" className="text-left">{song.title}</td>
                  <td id="song-duration" className="text-right">{this.formatTime(song.duration)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.audioElement.currentTime}
          duration={this.audioElement.duration}
          volume={this.state.volume}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          handleVolumeChange={(e) => this.handleVolumeChange(e)}
          formatTime={(t) => this.formatTime(t)}
        />
      </section>
    );
  }
}

export default Album;
