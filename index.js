const toggleCheckbox = document.querySelector('[data-js="switch-checkbox"]');
const toggle = document.querySelector('[data-js="switch"]');
const icon = document.querySelector('[data-js="icon"');
const buttonDark = document.querySelector('[data-js="button-dark"]');
const buttonLight = document.querySelector('[data-js="button-light"]');
const body = document.body;

// function declaration
function toggleDarkMode() {
  body.classList.toggle("dark");
  updateToggle();
}

function updateToggle() {
  const isDark = body.classList.contains("dark"); // returns a boolean (true if class exists)

  if (isDark) {
    toggle.classList.add("switch--active");
    icon.textContent = "🌒";
  } else {
    toggle.classList.remove("switch--active");
    icon.textContent = "☀️";
  }
}

function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");
    updateToggle();
  } else {
    body.classList.remove("dark");
    updateToggle();
  }
}

toggleCheckbox.addEventListener("input", () => {
  toggleDarkMode(); // function call
});

buttonDark.addEventListener("click", () => {
  setTheme("dark");
});

buttonLight.addEventListener("click", () => {
  setTheme("light");
});

toggleDarkMode();

// ===
console.clear();

function greet(platzhalter1) {
  console.log(`Hello ${platzhalter1}!`);
}

greet("Stephie");
greet("Felix");
greet(42);
greet(true);
greet("this doesn't make any sense");

// function declaration

function add2Numbers(platzhalter1, platzhalter2) {
  const sum = platzhalter1 + platzhalter2;
  console.log(`The sum is ${sum}.`);
  console.log("The sum is " + sum + ".");
}

// function call
add2Numbers(36, 6);

// console.log(sum); doesn't work, sum only exists inside of our function, out outside of it.

// scope of sum is the code block
{
  const sum = 23;
}

{
  const sum = 42;
}
