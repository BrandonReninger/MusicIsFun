export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return /*html*/ `
            <div class="card bg-light mb-3" style="max-width: 18rem;" onclick="app.songsController.previewTrack('${this._id}')">
              <div class="card-body row py-0 px-1">
                <div class="col-4 p-0">
                  <img src="${this.albumArt}" class="img-fluid p-0" alt="">
                </div>
                <div class="col-8">
                  <h5 class="card-title m-0">${this.artist}</h5>
                  <p class="card-text">${this.title}</p>
                </div>
              </div>
            </div>
        `
  }

  get previewTemplate() {
    return /*html*/`
      <div class="card" style="max-height: 90vh">
        <img src="${this.albumArt}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${this.artist} - ${this.title}</p>
          <audio controls>
            <source src="${this.preview}">
            Your browser does not support the audio element.
          </audio>
          <p>$${this.price}</p>
          <button class="btn btn-block btn-success" onclick="app.songsController.addSong()">Add to Playlist</button>
        </div>
      </div>
      `
  }

  get playlistTemplate() {
    return /*html*/ `
            <div class="card bg-light mb-3" style="max-width: 18rem;" onclick="app.songsController.removeSong('${this._id}')">
              <div class="card-body row py-0 px-1">
                <div class="col-4 p-0">
                  <img src="${this.albumArt}" class="img-fluid p-0" alt="">
                </div>
                <div class="col-8">
                  <h5 class="card-title m-0">${this.artist}</h5>
                  <p class="card-text">${this.title}</p>
                </div>
              </div>
            </div>
        `
  }
}
