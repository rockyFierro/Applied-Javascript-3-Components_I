/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
    </div>
    The function takes an array as its only argument.*/

const menuMaker = (args) => {//args is any array of strings you want to use as a list for the menu
  const make = (tag) => document.createElement(tag);//shortens repeating syntax
  /*  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
      Add those items to the <ul>*/
  const newMenu = make("div");
  const newContent = make("ul");
  const students = make("li");
  const faculty = make("li");
  const whatsNew = make("li");
  const techTrends = make("li");
  const music = make("li");
  const logout = make("li");

  newMenu.classList.add("menu");  

  newMenu.append(newContent);
  newContent.append(
    students,
    faculty,
    whatsNew,
    techTrends,
    music,
    logout
    );
    
    students.textContent = args[0];
    faculty.textContent = args[1];
    whatsNew.textContent = args[2];
    techTrends.textContent = args[3];
    music.textContent = args[4];
    logout.textContent = args[5];
    //Step 3: Using a DOM selector, select the menu button(the element with a class of 'menu-button') currently on the DOM.

    const domMenuObj = document.querySelector(".menu-button");
    domMenuObj.addEventListener("click", ()=>{
      newMenu.classList.toggle("menu--open");
    });

    return newMenu;
  };


//  Step 4: add a click event listener to the menu button.When clicked it should toggle the class 'menu--open' on the menu(your div with a 'menu' class).

//Step 5: return the menu component.

//  Step 6: add the menu component to the DOM.

const newMenu = menuMaker(menuItems);
document.querySelector(".header").append(newMenu);
