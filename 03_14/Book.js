class Book {
  constructor(name, volume, color, numOfPages, cover, readStatus) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.numOfPages = numOfPages;
    this.cover = cover;
    this.readStatus = readStatus;
  }

  hardCover(coverStatus) {
    this.cover = coverStatus;
  }
  read(bookRead) {
    this.readStatus = bookRead;
  }
}

export default Book;
