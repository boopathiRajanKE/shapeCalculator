import { data } from './content';

/* Helper functions */
const helperFunctions = {
  updateCalcAppDom(selector, text) {
    document.querySelector(selector).innerHTML = text;
  },
  updateButton(step) {
    const buttonText = (data && data[step - 1] && data[step - 1].buttonText) || 'N/A';

    helperFunctions.updateCalcAppDom('.calc-next-button', buttonText);
  },
  updateTitle(step) {
    const title = (data && data[step - 1] && data[step - 1].title) || 'N/A';
    helperFunctions.updateCalcAppDom('.calc-title', title);
  },
  updateDescription(step, shape) {
    let desc = (data && data[step - 1] && data[step - 1].desc) || 'N/A';

    desc = desc.replace('<<shape>>', shape.getShape());
    desc = desc.replace('<<value>>', shape.findArea());
    helperFunctions.updateCalcAppDom('.calc-desc', desc);
  },
  updateAppContent: (step) => {
    document
      .querySelectorAll('.calc-body')
      .forEach((calcBody) => {
        // eslint-disable-next-line no-param-reassign
        calcBody.style.display = 'none';
      });

    document.querySelector(`.calc-body.page${step}`).style.display = 'block';
  },

  hideCancelButton: (step) => {
    if (step !== 2) {
      document.querySelector('.calc-cancel-block').style.display = 'none';
    } else {
      document.querySelector('.calc-cancel-block').style.display = 'block';
    }
  },
  renderAnswer: (step, shape) => {
    if (step === 3) {
      document.querySelector('.calc-answer').innerText = shape.findArea();
    }
  },
};

export default helperFunctions;
export { helperFunctions };
