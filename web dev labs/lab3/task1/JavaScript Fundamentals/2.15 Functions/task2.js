//1
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
//2
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }