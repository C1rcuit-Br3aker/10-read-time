'use strict';

function readTime(perMin, wpm = 1) {
  const oneWord = numWords(perMin);
  const time = oneWord / wpm;
  return Math.ceil(time, 1);

}
