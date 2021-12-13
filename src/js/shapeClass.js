/* eslint-disable func-names */
export function Rectangle(length, breath) {
  this.length = length;
  this.breath = breath;
}

Rectangle.prototype.findArea = function () {
  return this.value1 * this.value2;
};

Rectangle.prototype.changeValue = function (length, breath) {
  this.length = length;
  this.breath = breath;
};

Rectangle.prototype.getLabel = function () {
  return 'Length :, Breath :';
};

Rectangle.prototype.getValue = function () {
  return [this.length, this.breath];
};

Rectangle.prototype.getShape = function () {
  return 'rectangle';
};

export function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.findArea = function () {
  return Math.floor(Math.PI * this.radius * this.radius);
};

Circle.prototype.changeValue = function (radius) {
  this.radius = radius;
};

Circle.prototype.getLabel = function () {
  return 'Radius :';
};

Circle.prototype.getValue = function () {
  return [this.radius];
};

Circle.prototype.getShape = function () {
  return 'circle';
};

export function Square(side) {
  this.side = side;
}

Square.prototype.findArea = function () {
  return this.side * this.side;
};

Square.prototype.changeValue = function (side) {
  this.side = side;
};

Square.prototype.getLabel = function () {
  return 'Side :';
};

Square.prototype.getValue = function () {
  return [this.side];
};

Square.prototype.getShape = function () {
  return 'square';
};

export function Ellipse(radius1, radius2) {
  this.radius1 = radius1;
  this.radius2 = radius2;
}

Ellipse.prototype.findArea = function () {
  return Math.floor(Math.PI * this.radius1 * this.radius2);
};

Ellipse.prototype.changeValue = function (radius1, radius2) {
  this.radius1 = radius1;
  this.radius2 = radius2;
};

Ellipse.prototype.getLabel = function () {
  return 'Axis A :, Axis B :';
};

Ellipse.prototype.getValue = function () {
  return [this.radius1, this.radius2];
};

Ellipse.prototype.getShape = function () {
  return 'ellipse';
};
