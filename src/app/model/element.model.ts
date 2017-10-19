export class Element {
  public img;
  public x;
  public y;
  public width;
  public top;
  public left;
  public selected;
  public id;
  public clickThrough = false;
  public good = false;
  public hidden = false;

  constructor(_id, _img, _x, _x2, _y, _good?, _clickThrough?, _hidden?) {
    this.id = _id;
    this.img = _img;
    this.x = _x;
    this.y = _y;
    this.width = (_x2 - _x) + '%';
    this.selected = false;
    this.clickThrough = _clickThrough;
    this.good = _good;
    this.hidden = _hidden;
  }

  public setSelected(newVal) {
    this.selected = newVal;
  }
}
