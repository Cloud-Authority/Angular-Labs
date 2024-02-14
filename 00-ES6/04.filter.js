var values = [1, 60, 34, 30, 20, 5];

function lessThan20(val) {
  if (val < 20) {
    return true;
  } else {
    return false;
  }
}

var valuesLessThan20 = values.filter(lessThan20);

console.log(valuesLessThan20);

values.filter((val) => {
  if (val < 20)
    return true;
  else
    return false;
})

values.filter((val) => val < 20)


