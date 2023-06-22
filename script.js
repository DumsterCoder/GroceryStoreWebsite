const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");
const restOfPage = document.getElementById("main");
const languageBtn = document.getElementById("lang-toggle");
const potBtn = document.getElementById("pot-btn");
const tomBtn = document.getElementById("tom-btn");
const garBtn = document.getElementById("gar-btn");
const oniBtn = document.getElementById("oni-btn");
const cilBtn = document.getElementById("cil-btn");
const corBtn = document.getElementById("cor-btn");
const carBtn = document.getElementById("car-btn");
const aspBtn = document.getElementById("asp-btn");
const radBtn = document.getElementById("rad-btn");
const cucBtn = document.getElementById("cuc-btn");
const pepBtn = document.getElementById("pep-btn");
const eggBtn = document.getElementById("egg-btn");
const popUp = document.getElementById('pop-up');
const depart = document.getElementById('depart');

const tomato = {
  image:
    "https://bioweed.com.au/wp-content/uploads/Eight-tomato-types-grown-in-australia.png",
  title: "Brandyine Tomatoes",
  decription: "nightshade family native to South America that is red",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true
};
const potato = {
  image:
    "https://cdn-prod.medicalnewstoday.com/content/images/articles/280/280579/potatoes-can-be-healthful.jpg",
  title: "Russet Potatoes",
  decription: "8lb per bag",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const garlic = {
  image:
    "https://oliooliveoil.com/wp-content/uploads/2013/10/garlic-182553-1.jpg",
  title: "Garlic Cloves",
  decription: "$5 for a bag of 8",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const onion = {
  image:
    "https://www.thespruce.com/thmb/9sCTW3me2_CbsrHfgpusH2KwV68=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-onions-1403447-01-38d480a2d16d4ea0b0dd174f42785e1d.jpg",
  title: "Green Onions",
  decription: "$7 for a dozen",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const cilantro = {
  image:
    "https://cdn-prod.medicalnewstoday.com/content/images/articles/277/277627/bunch-of-fresh-coriander-or-cilantro-on-a-wooden-table.jpg",
  title: "Cilantro",
  decription: "$4 a bundle",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const corn = {
  image:
    "https://hosstools.com/wp-content/uploads/2020/10/bodacious-sweet-corn.jpg",
  title: "Bodacious Sweet Corn",
  decription: "$6 a dozen",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const carrots = {
  image:
    "https://www.cheryls.com/blog/wp-content/uploads/2022/03/4512807-Carrots-basket.jpg",
  title: "carrots",
  decription: "$5 for a bag of 12",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const asparagus = {
  image:
    "https://i0.wp.com/fountainavenuekitchen.com/wp-content/uploads/2021/04/2021_FAK_AsparagusCobbSalad_018.jpeg?fit=1800%2C1200&ssl=1",
  title: "Asparagus",
  decription: "$5 for a bundle",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const radish = {
  image: "https://chefsmandala.com/wp-content/uploads/2018/03/Red-Radish.jpg",
  title: "Radishes",
  decription: "$5 for a bundle",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const cucumber = {
  image:
    "https://www.allaboutgardening.com/wp-content/uploads/2021/11/Cucumber-Varieties-1200x667.jpg",
  title: "Cucumber",
  decription: "$0.50 a cucumber",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const pepper = {
  image:
    "https://post.healthline.com/wp-content/uploads/2020/08/chili-peppers-732x549-thumbnail.jpg",
  title: "Jalapeno Peppers",
  decription: "$5 for a bag of 15",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};
const eggplant = {
  image:
    "https://s3g2u3k4.rocketcdn.me/wp-content/uploads/sites/4/2018/10/eggplant.jpg",
  title: "Egglplant",
  decription: "$0.75 per eggplant",
  details:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptatem tempora non error? Laborum libero quisquam exercitationem, illo pariatur dignissimos molestiae odit placeat sunt alias vel. Similique doloremque excepturi officiis.",
  stocked: true,
};



function determineVeggie(e) {
  switch(e.target.classList.value) {
    case 'pota':
      createPopUp(potato);
      break;
    case 'toma':
      createPopUp(tomato);
      break;
    case 'garl':
      createPopUp(garlic);
      break;
    case 'onio':
      createPopUp(onion);
      break;
    case 'cila':
      createPopUp(cilantro);
      break;
    case 'corn':
      createPopUp(corn);
      break;
    case 'carr':
      createPopUp(carrots);
      break;
    case 'aspa':
      createPopUp(asparagus);
      break;
    case 'radi':
      createPopUp(radish);
      break;
    case 'cucu':
      createPopUp(cucumber);
      break;
    case 'pepp':
      createPopUp(pepper);
      break;
    case 'eggp':
      createPopUp(eggplant);
      break;
    default:
      console.log('Oops dinna work ma dude');
}
}



function createPopUp(veg) {
  popUp.classList.remove('away')
  let icon;
  if(veg.stocked) {
    icon = '<i class="fa-solid fa-check"></i>'
  } else {
    icon = '<i class="fa-solid fa-xmark"></i>'
  }
  const div = document.createElement('div');
  div.classList.add('veg-focus');
  div.innerHTML = `
        <div class="veg-focus__img">
          <img src="${veg.image}" alt="">
        </div>
        <div class="veg-focus__text">
          <div class="close">
            <h5 id="depart" >x</h5>
          </div>
          <h2>${veg.title}</h2>
          <h4>${veg.decription}</h4>
          <p>${veg.details}</p>
          <div class="veg-focus__info">
            <p>In Stock: &nbsp;&nbsp; ${icon}</p>
            <a href="#">Buy Today</a>
          </div>
        </div>`;
  popUp.appendChild(div);
}

function hamburgerBtn() {
  menuList.classList.toggle("hidden");
}

function dismissList() {
  if (menuList.classList.contains("hidden")) {
    return;
  } else {
    menuList.classList.add("hidden");
  }
}

potBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
tomBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
garBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
oniBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
cilBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
corBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
carBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
aspBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
radBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
cucBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
pepBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
eggBtn.addEventListener("click", (e) => {
  determineVeggie(e)
});
menuToggle.addEventListener("click", hamburgerBtn);
restOfPage.addEventListener("click", dismissList);
document.addEventListener("click", function(e){
  const target = e.target.closest("#depart");

  if(target){
    popUp.innerHTML = '';
    popUp.classList.toggle('away')
  }
});