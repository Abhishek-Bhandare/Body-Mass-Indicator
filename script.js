const myForm = document.querySelector("form");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const conclusion = document.querySelector("#conclusion");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML=bmi
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      conclusion.innerHTML = "Nice ! You are under Weight";
      conclusion.style.color = "green"
    }else if (bmi > 18.6 && bmi < 24.9) {
      conclusion.innerHTML = "Good ! You are in Normal Range";
      conclusion.style.color = "white"
    } else {
      conclusion.innerHTML = "Bad ! You are Over Weight";
      conclusion.style.color = "red"
    }
  }
});
