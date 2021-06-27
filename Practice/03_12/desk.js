/*
Creating Classes exercise
*/

class Desk {
  constructor(length, width, height, status, volume, actualVol) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.waterBottle = {
      status: status,
      volume: volume,
      actualVol: actualVol,
    };
  }
  fillWater(addVol) {
    this.waterBottle.actualVol = addVol;
  }
}

export default Desk;
