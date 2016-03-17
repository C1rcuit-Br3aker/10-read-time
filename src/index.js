'use strict';
/* globals numWords, readTime */

const bodyEl = document.querySelector(`body`);
const nav = document.createElement(`nav`);
bodyEl.appendChild(nav);



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

  const title = timer.querySelector(`.entry__title`);
  const link = document.createElement(`a`);
  link.setAttribute(`href`, `#${timer.id}`);
  link.innerText = title.innerText;
  nav.appendChild(link);
}
