function findMax() {
    let max = arguments[0];
    if (arguments.length < 2) {
      return max;
    }
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
}
