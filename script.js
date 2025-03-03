const menu = [
  {
    id: 1,
    title: "Spicy Chicken",
    category: "CHICKEN",
    price: 19.00,
    img:
     "https://images.pexels.com/photos/16845335/pexels-photo-16845335/free-photo-of-ready-to-eat-meat-and-lettuce-on-a-black-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Chicken wings, white wine, South indian masala, red chile, olive oil. `,
  },
  {
    id: 2,
    title: "Mutton Biriyani",
    category: "MUTTON",
    price: 16.00,
    img:
      "https://images.pexels.com/photos/9609863/pexels-photo-9609863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Mutton , spices, rice with butter `,
  },
  {
    id: 3,
    title: "Fish fry",
    category: "SEAFOOD",
    price: 17.50,
    img:
      "https://images.pexels.com/photos/30325818/pexels-photo-30325818/free-photo-of-grilled-fish-with-lemon-and-sides-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Fish,spices,butter,lemon,with french fries `,
  },
  {
    id: 4,
    title: "chicken Biriyani",
    category: "CHICKEN",
    price: 14.00,
    img:
      "https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Fresh chicken,rice,ghee,spices `,
  },
  {
    id: 5,
    title: "Mutton chukka",
    category: "MUTTON",
    price: 38.00,
    img:
      "https://images.pexels.com/photos/29685045/pexels-photo-29685045/free-photo-of-spicy-indian-lamb-curry-in-brass-handi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Fresh mutton,pepper,south masalas `,
  },
  
 
 
  {
    id: 8,
    title: "Maryland Crab Cake Dinner",
    category: "SEAFOOD",
    price: 16.00,
    img:
      "https://happilyunprocessed.com/wp-content/uploads/2019/01/killer-maryland-crab-cakes.jpg",
    desc: `Old bay seasoning, lump crab meat, dijon mustard. `,
  },
  {
    id: 9,
    title: "Whole Lobster",
    category: "SEAFOOD",
    price: 19.00,
    img:
      "https://www.foodrepublic.com/wp-content/uploads/2012/05/Grilled_Lobster.jpg",
    desc: `Live maine lobster, butter, sea salt, lemon. `,
  },
 
  {
    id: 12,
    title: "Caprese Salad",
    category: "SALADS",
    price: 10.50,
    img:
      "https://www.thespruceeats.com/thmb/2pjgFA7_nbZtlXr68BECvf6fO48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-salad-tomato-salad-2217097-hero-03-75a0b89b30aa4a52b10fe4fdd9abfeb5.jpg",
    desc: `An Italian salad, made of sliced fresh mozzarella, tomatoes, and sweet basil, seasoned with salt, and olive oil. `,
  },
  {
    id: 13,
    title: "Apple Crisp",
    category: "DESSERTS",
    price: 8.50,
    img:
      "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17651-cinnamon-apple-crisp-760x580.jpg?ext=.jpg",
    desc: `Warm apple cinnamon filling topped with a crunchy oat crumble, vanilla ice cream and caramel sauce. `,
  },
  {
    id: 14,
    title: "Twin Cannoli",
    category: "DESSERTS",
    price: 7.00,
    img:
      "https://www.mystoryinrecipes.com/uploads/4/4/9/3/44938739/5321015_orig.jpg",
    desc: `Two crisp cannoli shells filled with our house made chocolate chip ricotta cannoli cream. `,
  },
];
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
(values, item) => {
  if (!values.includes(item.category)) {
    values.push(item.category);
  }
  return values;
},
["ALL"]
);

const categoryList = () => {
const categoryBtns = categories
  .map((category) => {
    return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
  })
  .join("");

btnContainer.innerHTML = categoryBtns;
const filterBtns = document.querySelectorAll(".btn-item");


filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    console.log(category);
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "ALL") {
      menuList(menu);
    } else {
      menuList(menuCategory);
    }
  });
});
};

const menuList = (menuItems) => {
let displayMenu = menuItems.map((item) => {
  return `<div class="menu-items col-lg-6 col-sm-12">
          <img
            src=${item.img}
            alt=${item.title}
            class="photo"
          />
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
          </div>
        </div>
  `;
});
displayMenu = displayMenu.join("");
section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();