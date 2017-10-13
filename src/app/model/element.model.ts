export class Element {
  public img;
  public x;
  public y;
  public width;
  public top;
  public left;
  public selected;
  public id;

  constructor(_id, _img, _x, _x2, _y) {
    this.id = _id;
    this.img = _img;
    this.x = _x;
    this.y = _y;
    this.width = (_x2 - _x) + '%';
    this.selected = false;
  }

  public setSelected(newVal) {
    this.selected = newVal;
  }
}
