/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const desk = {
  length: 60,
  width: 25,
  height: 40,
  waterBottle: {
    status: "empty",
    volume: 700,
    actualVol: 0,
  },
  fillWater: function (addVol) {
    this.waterBottle.actualVol = addVol;
    // if (addVol < this.desk.waterBottle.volume) {
    //   this.waterBottle.status = "Not full, not empty";
    // } else if (addVol > this.desk.waterBottle.volume) {
    //   this.waterBottle.status = "Over flowing";
    // } else {
    //   this.waterBottle.status = "FULL";
    // }
  },
};
