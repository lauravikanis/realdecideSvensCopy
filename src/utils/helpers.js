export const choosOneRandom = (array) => {
  const randNrInArray = Math.floor(Math.random() * array.length);
  return array[randNrInArray];
};
export const getDate = () => {
  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  return `${day}|${month}|${year}`;
};

export const setLocalStorage = (
  values,
  alreadyChoosen,
  theLuckyOne,
  sets,
  activeSet,
  round
) => {
  localStorage.setItem("values", JSON.stringify(values));
  localStorage.setItem("alreadyChoosen", JSON.stringify(alreadyChoosen));
  localStorage.setItem("theLuckyOne", JSON.stringify(theLuckyOne));
  localStorage.setItem("sets", JSON.stringify(sets));
  localStorage.setItem("activeSet", JSON.stringify(activeSet));
  localStorage.setItem("round", JSON.stringify(round));
};
