/* eslint-disable no-use-before-define */
import { ShapeCollections } from './factoryClass';
import { helperFunctions } from './helpers';

const shapesList = new ShapeCollections();

let shape = shapesList.createShape('rectangle');

/*
    Revealing Module Pattern for Changing the steps in the calculator Exercise
*/
const stepsPreserver = (function A() {
  let privateStep = 1;

  function publicNextStep() {
    privateStep += 1;
    shapeCalculatorSubject.fire();
  }

  function publicPrevStep() {
    privateStep -= 1;
    shapeCalculatorSubject.fire();
  }
  function getStep() {
    return privateStep;
  }

  function reset() {
    privateStep = 1;
    shapeCalculatorSubject.fire();
  }

  return {
    nextStep: publicNextStep,
    prevStep: publicPrevStep,
    getStep,
    reset,
  };
}());

/*
    Observer patter to make the content changes whenever
    the user the interact with the shape calculator application.
*/

function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe(fn) {
    this.observers.push(fn);
  },
  unsubscribe(fnToRemove) {
    this.observers = this.observers.filter((fn) => fn !== fnToRemove);
  },
  fire() {
    this.observers.forEach((fn) => {
      // eslint-disable-next-line no-use-before-define
      const currentStep = stepsPreserver.getStep();
      fn(currentStep, shape);
    });
  },
};

const shapeCalculatorSubject = new Subject();

shapeCalculatorSubject.subscribe(helperFunctions.updateButton);
shapeCalculatorSubject.subscribe(helperFunctions.updateTitle);
shapeCalculatorSubject.subscribe(helperFunctions.updateDescription);
shapeCalculatorSubject.subscribe(helperFunctions.updateAppContent);
shapeCalculatorSubject.subscribe(helperFunctions.hideCancelButton);
shapeCalculatorSubject.subscribe(helperFunctions.renderAnswer);
shapeCalculatorSubject.subscribe(shapesList.showHideInputContents);
shapeCalculatorSubject.subscribe(shapesList.updateTextOnInputContent);
shapeCalculatorSubject.fire();

/* Events */

document.querySelectorAll('.input-radio').forEach((input) => {
  input.addEventListener('click', (event) => {
    shape = shapesList.createShape(event.target.value);
  });
});

function onNextButton() {
  if (stepsPreserver.getStep() === 3) {
    stepsPreserver.reset();
  } else {
    stepsPreserver.nextStep();
  }
}
document
  .querySelector('.calc-next-button')
  .addEventListener('click', onNextButton);

function onCancelButton() {
  stepsPreserver.prevStep();
}

document
  .querySelector('.calc-cancel-button')
  .addEventListener('click', onCancelButton);

function getInputValue(value, id) {
  const [value1, value2] = shape.getValue();
  if (id === 'calc-input-1') {
    shape.changeValue(value, value2);
  } else {
    shape.changeValue(value1, value);
  }
}

document.querySelectorAll('.calc-input').forEach((input) => input.addEventListener('keyup', (event) => {
  getInputValue(event.target.value, event.target.id);
}));
