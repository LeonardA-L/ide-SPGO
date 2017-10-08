export class Element {
  public img;
  public x;
  public y;
  public top;
  public left;
  public selected;
  public id;

  constructor(_id, _img, _x, _y) {
    this.id = _id;
    this.img = _img;
    this.x = _x;
    this.y = _y;
    this.selected = false;
  }

  public setSelected(newVal) {
    this.selected = newVal;
  }
}
