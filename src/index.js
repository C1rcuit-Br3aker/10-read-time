'use strict';
/* globals numWords, readTime */

 // loop through the .entry__info lists and add a new class for readtime
const entries = document.querySelectorAll(`.entry__info`);
const entry = document.querySelectorAll(`.entry`);

for (let i = 0; i < entry.length; i++) {
  const singleEntry = entries[i];
  const newEntry = document.createElement(`li`);
  newEntry.classList.add(`read-time`);
  singleEntry.appendChild(newEntry);

  const timer = entry[i];
  const articleText = timer.querySelector(`.entry__content`).innerText;
  newEntry.innerText = `${readTime(articleText, 200)} mins`;
}
