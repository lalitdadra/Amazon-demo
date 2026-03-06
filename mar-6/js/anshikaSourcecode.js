const container = document.getElementById('container')

const menu = [
    {
        label: 'SUMMER 2026 MEN',
        subMenu: [
            {
                name: 'VIEW_ALL',
                innerMenu: ['New Arrival', 'Pants', 'Bermuda Shorts', 'Blazer', 'Suits', 'Jackets', 'Skirts']
            },
            {
                name: 'PANTS',
                innerMenu: ['Chino', 'Cargo', 'Jogger', 'Denim']
            },
            {
                name: 'BERMUDA SHOTS',
                innerMenu: ['Chino', 'Cargo']
            },
            {
                name: 'SHOP BY MODEL',
                innerMenu: ['Chile', 'Milano', 'New York', 'Torino', 'Osaka', 'Boston', 'London', 'Chile Bermuda']
            },
            {
                name: 'SHOP BY FIT',
                innerMenu: ['Extra Slim Fit', 'Slim Fit', 'Regulat Fit', 'Carrot Fit', 'Relaxed Fit']
            },
            {
                name: 'SS26 MASON MEN',
                image: './Images/MENU-mason-menu-ss26men.webp'
            }]
    },
    {
        label: 'SUMMER 2026 WOMEN',
        link: 'E:\WEB DEVELOPMENT\Tailwind\practice6.html',
        subMenu: [
            {
                name: 'VIEW_ALL',
                innerMenu: ['New Arrival', 'Pants', 'Bermuda Shorts', 'Blazer', 'Suits', 'Jackets', 'Skirts']
            },
            {
                name: 'PANTS',
                innerMenu: ['Chino', 'Cargo', 'Jogger', 'Denim']
            },

            {
                name: 'SHOP BY MODEL',
                innerMenu: ['New York', 'New York Carrot', 'Chile']
            },
            {
                name: 'SHOP BY FIT',
                innerMenu: ['Slim Fit', 'Carrot Fit', 'Straight Fit', 'Relaxed Fit', 'Wide Leg']
            },
            {
                name: 'SS26 MASON WOMEN',
                image: './Images/MENU-mason-menu-ss26men.webp'
            },
            {
                name: 'WOMEN SUMMER PANTS',
                image: './Images/MENU-MASON-MENU-SUMMERWOMEN.webp'
            },
        ]
    },
    {
        label: 'WINTER 2026 MEN',
        subMenu: [
            {
                name: 'VIEW_ALL',
                innerMenu: ['New Arrival', 'Pants', 'Bermuda Shorts', 'Blazer', 'Suits', 'Jackets', 'Skirts']
            },
            {
                name: 'PANTS',
                innerMenu: ['Chino', 'Cargo', 'Jogger', 'Denim']
            },

            {
                name: 'PRESTIGE',
                innerMenu: ['Prestige']
            },
            {
                name: 'FW25 MASONS MEN',
                image: './Images/MENU-FW25.webp'
            }
            ,
            {
                name: 'SS26 MASON MEN',
                image: './Images/MENU-MEN.webp'
            },
            {
                name: 'WOMEN SUMMER PANTS',
                image: './Images/MENU-PRESTIGE_1.webp'
            },
        ]
    },
    {
        label: 'WINTER 2026 WOMEN',
        subMenu: [
            {
                name: 'VIEW_ALL',
                innerMenu: ['New Arrival', 'Pants', 'Bermuda Shorts', 'Blazer', 'Suits', 'Jackets', 'Skirts']
            },
            {
                name: 'PANTS',
                innerMenu: ['Chino', 'Cargo', 'Jogger', 'Denim']
            },

            {
                name: 'PRESTIGE',
                innerMenu: ['Prestige']
            },
            {
                name: 'FW25 MASONS MEN',
                image: './Images/MENU-FW25WOMEN.webp'
            },
            {
                name: 'SS26 MASON MEN',
                image: './Images/MENU-WOMEN-WINTER-PANTS.webp'
            },
            {
                name: 'WOMEN SUMMER PANTS',
                image: './Images/MENU-PRESTIGE-WOMEN.webp'
            },
        ]
    },
    {
        label: 'ACCESORIES',
    },
    {
        label: 'OUR STORY',
    },
    {
        label: 'BLOG',
    },

]




function loadMenu() {

    let element = "";

    menu.forEach((item) => {

        // 🔥 CASE 1: NO SUBMENU → simple nav item
        if (!item.subMenu) {

            element += `
            <div class="group text-[13px] px-2 cursor-pointer flex py-4 h-full hover:underline hover:decoration-red-500">
            ${item.label}
            </div>
            `;
        }

        // 🔥 CASE 2: HAS SUBMENU → mega dropdown
        else {

            let submenuColumns = "";

            item.subMenu.forEach((sub) => {

                if (sub.image) {
                    submenuColumns += `
                    <div class="flex-[1.5] pl-4">
                    <h3 class="text-[13px] font-bold tracking-wider text-black mb-6">
                    ${sub.name}
                    </h3>
                    <div class="w-full overflow-hidden">
                    <img src="${sub.image}"
                    class="w-full h-[300px] object-cover rounded-md">
                    </div>
                    </div>
                    `;
                }

                else {
                    submenuColumns += `
                    <div class="flex-1 border-r border-gray-100">
              <h3 class="text-[13px] font-bold tracking-wider text-black mb-6">
              ${sub.name}
              </h3>
              <ul class="flex flex-col gap-3 text-[14px] text-gray-800">
              ${sub.innerMenu.map(link => `
                <li class="hover:underline cursor-pointer">${link}</li>
                `).join("")}
                </ul>
                </div>
                `;
                }

            });

            element += `
        <div class="group  text-[13px] px-1 cursor-pointer flex py-4 h-full  hover:underline hover:decoration-red-500">
        ${item.label}
       
        <div class="absolute left-0 top-full flex w-screen h-[450px]
        bg-white border-b border-gray-200 px-12 py-8 gap-8 shadow-xl
        invisible opacity-0 group-hover:visible group-hover:opacity-100
        transition duration-300 z-50">
       
        ${submenuColumns}
       
        </div>
        </div>
      `;
        }

    });

    container.innerHTML = element;
}

loadMenu();

const sliderImagesMen = document.getElementById('sliderImagesMen')

const imagesMen = [
    {
        img: './Images/MEN-Field-2.jpeg',
        link: 'cart.html',
        name1: 'FIELD',
        tagline: 'Field mens Jacket M74 in oxford canvas ①',
        price: '$545.00'
    },
    {
        img: './Images/MEN-TORONTOCITY-1.webp',
        link: 'cart.html',
        name1: 'TORONTO CITY',
        tagline: 'Torino City mens chino pants prince of Wales print slim fit',
        price: '$365.00'
    },
    {
        img: './Images/MEN-FIELD-1.webp',
        link: 'cart.html',
        name1: 'FIELD',
        tagline: 'Field  Jacket M74 mens jacket in oxford canvas ①',
        price: '$545.00'
    },
    {
        img: './Images/MEN-CHILE-1.webp',
        link: 'cart.html',
        name1: 'CHILE',
        tagline: 'Chile mens cargo pants in stretch gabardine regular fit',
        price: '$315.00'
    },
    {
        img: './Images/MEN-PINCES-1.webp',
        link: 'cart.html',
        name1: 'PINCES',
        tagline: 'Field mens Jacket M74 in oxford canvas ①',
        price: '$315.00'
    },
    {
        img: './Images/MEN-JOHN-1.jpeg',
        link: 'cart.html',
        name1: 'JOHN COOLKHINOS',
        tagline: 'Field mens Jacket M74 in oxford canvas ①',
        price: '$315.00'
    },
    {
        img: './Images/MEN-MILANO-1.webp',
        link: 'cart.html',
        name1: 'MILANO',
        tagline: 'Milano mens chino pants in denim extra slim',
        price: '$315.00'
    },
    {
        img: './Images/MEN-HARRY-1.webp',
        link: 'cart.html',
        name1: 'HARRIS',
        tagline: 'Harris mens 5-pocket pants in light wash denim Hawaii print slim fit',
        price: '$315.00'
    },
    {
        img: './Images/MEN-NEWYORK-1.webp',
        link: 'cart.html',
        name1: 'NEW YORK',
        tagline: 'Field mens Jacket M74 in oxford canvas ①',
        price: '$315.00'
    },
    {
        img: './Images/MEN-OSAKA-1.webp',
        link: 'cart.html',
        name1: 'OSAKA',
        tagline: 'Osaka mens chino pants in pinstripe carrot fit',
        price: '$315.00'
    },
]
function loadImagesMen() {
    let image = ''
    imagesMen.forEach((item) => {
        image += `
       
      <div class="flex-shrink-0 flex flex-col w-[250px]">
 
      <div class="h-[400px] w-[250px] overflow-hidden">
                <a href="${item.link}">
                    <img src="${item.img}" class="w-full h-full object-cover" alt="">
                </a>
            </div>
 
            <a href="${item.link}" class="text-[15px] font-semibold mt-2">
                ${item.name1}
            </a>
 
 
       
        <div class="text-[15px]"></div>
        <div class="text-[10px]">${item.tagline} </div>
        <div class="text-[10px]">${item.price}</div>
       
      </div>`
    })
    sliderImagesMen.innerHTML = image
}
loadImagesMen()






function slideRightMEN() {
    sliderImagesMen.scrollBy({
        left: sliderImagesMen.clientWidth,
        behavior: "smooth"
    });
}

function slideLeftMEN() {
    sliderImagesMen.scrollBy({
        left: -sliderImagesMen.clientWidth,
        behavior: "smooth"
    });
}







const sliderImagesWomen = document.getElementById('sliderImagesWomen')

const imagesWomen = [
    {
        img: './Images/WOMEN-FRANCES-1.webp',
        name1: 'FRANCES',
        tagline: 'Francis womens cargo pants in twill wide leg',
        price: '$435.00'
    },
    {
        img: './Images/WOMEN-FATIQUE-JOGGER-1.webp',
        name1: 'FATIQUE JOGGERS',
        tagline: 'Fatique Jogger womens cargo pants in twill relaxed fit',
        price: '$305.00'
    },
    {
        img: './Images/WOMEN-VIVENNE-WORK-1.webp',
        name1: 'VIVIENNE WORK',
        tagline: 'Vivienne Work womens cargo pants in a mat weave balloon fit',
        price: '$365.00'
    },
    {
        img: './Images/WOMEN-DALLAS-1.webp',
        name1: 'DALLAS',
        tagline: 'Dallas womens cargo bermuda in slub cotton relaxed fit',
        price: '$265.00'
    },
    {
        img: './Images/WOMEN-BALITIMORA-1.webp',
        name1: 'BALTIMORA',
        tagline: 'Baltimora womens cargo bermuda in slub panama relaxed fit',
        price: '$289.00'
    },
    {
        img: './Images/WOMEN-EASY-STRAIGHT-ELAX-1.webp',
        name1: 'EASY STRAIGHT ELAX',
        tagline: 'Easy Straight Elax womens chino jogger pants in lurex knit straight fit',
        price: '$325.00'
    },
    {
        img: './Images/WOMEN-KARINA-1.webp',
        name1: 'KARINA',
        tagline: 'Karina womens sleeveless shirt in lightweight knit',
        price: '$165.00'
    },
    {
        img: './Images/WOMEN-EASY-STRAIGHT-1.webp',
        name1: 'EASY STRAIGHT',
        tagline: 'Easy Straight womens chino jogger pants in knit straight fit',
        price: '$305.00'
    },
    {
        img: './Images/WOMEN-NEW-YORK-TRUMPET-1.webp',
        name1: 'NEW YORK TRUMPET',
        tagline: 'New York Trumpet womens chino pants in basketweave slim fit',
        price: '$325.00'
    },
    {
        img: './Images/WOMEN-NEW-YORK-CARROT-1.webp',
        name1: 'NEW YORK CARROT',
        tagline: 'New York Carrot womens chino pants in cotton and linen twill carrot fit',
        price: '$339.00'
    },
    {
        img: './Images/WOMEN-CARROT-1.webp',
        name1: 'NEW YORK CARROT',
        tagline: 'New York Carrot womens chino pants in cotton and linen twill carrot fit',
        price: '$325.00'
    },
    {
        img: './Images/WOMEN-NEW-YORK-COZY-1.webp',
        name1: 'NEW YORK COZY STRAIGHT',
        tagline: 'New York Cozy Straight womens chino jogger pants in ramage print muslin relaxed fit',
        price: '$325.00'
    },
]
function loadImagesWomen() {
    let image = ''
    imagesWomen.forEach((item) => {
        image += `
       
      <div class="flex-shrink-0 flex flex-col w-[250px]">
        <div class="h-[400px] w-[250px] object-cover"><img src="${item.img}" alt=""></div>
        <div class="text-[15px]">${item.name1}</div>
        <div class="text-[10px]">${item.tagline} </div>
        <div class="text-[10px]">${item.price}</div>
      </div>`
    })
    sliderImagesWomen.innerHTML = image
}
loadImagesWomen()






function slideRightWOMEN() {
    sliderImagesWomen.scrollBy({
        left: sliderImagesWomen.clientWidth,
        behavior: "smooth"
    });
}

function slideLeftWOMEN() {
    sliderImagesWomen.scrollBy({
        left: -sliderImagesWomen.clientWidth,
        behavior: "smooth"
    });
}