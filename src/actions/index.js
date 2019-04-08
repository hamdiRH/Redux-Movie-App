export function addFilm(payload) {
  return { type: "ADD_FILM", payload };
}

export function filterByStars(payload) {
  return { type: "FIND_RATING", payload };
}

export function filterByName(payload) {
  return { type: "FIND_Name", payload };
}
