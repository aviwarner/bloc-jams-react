import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library container'>
        <div className="card-deck">
          {
            this.state.albums.map( (album, index) =>
              <div className="card album-card">
                <Link to={`/album/${album.slug}`} key={index}>
                  <img src={album.albumCover} alt={album.title} className="card-img-top"/>
                  <div className="card-body text-light library-text font-weight-light">
                    <h5 className="card-title">{album.title}</h5>
                    <p className="card-text">{album.artist}</p>
                    <p className="card-text">{album.songs.length} Songs</p>
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </section>
    );
  }
}

export default Library;
