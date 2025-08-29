function getFullDate() {
  const time = new Date();
  return `${getDate()} ${time.getUTCHours()}:${
    time.getMinutes() <= 9 ? `0${time.getMinutes()}` : time.getMinutes()
  }:${
    time.getUTCSeconds() <= 9
      ? `0${time.getUTCSeconds()}`
      : time.getUTCSeconds()
  }`;
  // return `${time.getHours()}:${time.getUTCMinutes()}:${time.getSeconds()`
}

module.exports = {
  getFullDate,
};
