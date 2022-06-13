export function localNumberFormat(value, fixedDigits = false) {
  if (!Number.isNaN(value)) {
    const numberArr = value.toString().split('.');

    let fractialDigits = '';
    if (numberArr[1]) {
      if (fixedDigits) {
        fractialDigits = numberArr[1].slice(0, 2);
      } else {
        fractialDigits = numberArr[1].slice(0, 2)[1] === 0
          ? numberArr[1][0]
          : numberArr[1].slice(0, 2);
      }
    }
    const mainDigitsResult = [];
    const mainDigits = numberArr[0].split('').reverse();
    for (let i = 1; i <= mainDigits.length; i += 1) {
      mainDigitsResult.push(mainDigits[i - 1]);
      if (i % 3 === 0) {
        mainDigitsResult.push(' ');
      }
    }
    if (fractialDigits.length > 0) {
      return `${mainDigitsResult.reverse().join('').trim()}.${fractialDigits}`;
    }

    return mainDigitsResult.reverse().join('').trim();
  }

  return value;
}

export function localDateFormat(value) {
  const arrayDate = value.split('-');
  arrayDate[1] -= 1;
  const date = new Date(arrayDate[0], arrayDate[1], arrayDate[2]);
  if (
    (date.getFullYear() === Number(arrayDate[0]))
    && (date.getMonth() === Number(arrayDate[1]))
    && (date.getDate() === Number(arrayDate[2]))
  ) {
    return date.toLocaleDateString();
  }

  return `Incorrect date (${value})`;
}
