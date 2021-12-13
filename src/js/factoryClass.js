/* eslint-disable func-names */
import {
  Rectangle, Square, Circle, Ellipse,
} from './shapeClass';

/*
 *  factory pattern having the calculator logics.
 */

function ShapeCollections() {}

// eslint-disable func-names
ShapeCollections.prototype.createShape = function (shape) {
  switch (shape) {
    case 'rectangle':
      return new Rectangle(0, 0);
    case 'circle':
      return new Circle(0);
    case 'square':
      return new Square(0);
    case 'ellipse':
      return new Ellipse(0, 0);
    default:
      return new Rectangle(0, 0);
  }
};

ShapeCollections.prototype.updateTextOnInputContent = function (step, shape) {
  if (step === 2) {
    const [label1, label2] = shape.getLabel().split(',');

    document.querySelector('.input-1-text').innerText = label1;
    if (label2) document.querySelector('.input-2-text').innerText = label2;

    document
      .querySelectorAll('.calc-input')
      .forEach((inputDom) => {
        // eslint-disable-next-line no-param-reassign
        inputDom.value = '';
      });
  }
};

ShapeCollections.prototype.showHideInputContents = function (step, shape) {
  const currentShape = shape.getShape();

  if (currentShape === 'square' || currentShape === 'circle') {
    document.querySelector('.calc-input-wrapper.input-2').style.display = 'none';
  } else {
    document
      .querySelectorAll('.calc-input-wrapper')
      .forEach((inputDom) => {
        // eslint-disable-next-line no-param-reassign
        inputDom.style.display = 'block';
      });
  }
};

export default ShapeCollections;
export { ShapeCollections };
