const input = document.getElementById("input");
const output = document.getElementById("output");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  let initialAge = input.value;
  console.log(initialAge);
  let age;
  if (initialAge < 0) {
    age = 0;
    output.innerHTML = "Age is not valid, setting age to 0.";
    console.log("Age is not valid, setting age to 0.");
  } else {
    age = initialAge;
    amIOld(age);
  }  
});

function amIOld(ele) {
  // Do some computations in here and print out the correct statement to the console
  if (ele < 13) {
    output.innerHTML = "You are Young!";
    console.log("You are Young!");
  } else if (ele > 12 && ele < 18) {
    output.innerHTML = "You are a teenager!";
    console.log("you are a teenager!");
  } else {
    output.innerHTML = "You are old!";
    console.log("You are old!");
  }
}
