export default class ActiveSong {
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
    return /*html*/`
          <div class="card" style="">
        <img src="${this.albumArt}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${this.artist} - ${this.title}</p>
          <audio controls>
            <source src="${this.preview}">
            Your browser does not support the audio element.
          </audio>
          <p>$${this.price}</p>
        </div>
      </div>
      `
  }

}