export class Element {
  public img;
  public x;
  public y;
  public top;
  public left;
  public selected;

  constructor(_img, _x, _y) {
    this.img = _img;
    this.x = _x;
    this.y = _y;
    this.selected = false;
  }
}
