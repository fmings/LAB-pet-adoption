console.log("test test")
const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2021/03/05/22/44/dinosaur-6072475_640.png",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://pics.craiyon.com/2023-11-22/Tw2-fzqOS56g7RBqbn_gsA.webp"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://pics.craiyon.com/2023-10-25/22a3dd0d0c1044bf89741ee941b1e2c0.webp"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2015_15/480881/2d274908120980-chester7-blocks_desktop_large.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://www.svgheart.com/wp-content/uploads/2021/11/triceratops-dino-silhouette-dinosaur-free-svg-file-SVGHEART.COM.png"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://t3.ftcdn.net/jpg/01/79/88/20/360_F_179882080_Zga46fOuCNnZlF9o2IC6gYgHVQFDVKMv.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.svgheart.com/wp-content/uploads/2021/11/triceratops-dino-silhouette-dinosaur-free-svg-file-SVGHEART.COM.png"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://www.shutterstock.com/image-vector/dog-silhouette-breed-labrador-vector-600nw-2288456187.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://t3.ftcdn.net/jpg/01/79/88/20/360_F_179882080_Zga46fOuCNnZlF9o2IC6gYgHVQFDVKMv.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://www.svgheart.com/wp-content/uploads/2021/11/triceratops-dino-silhouette-dinosaur-free-svg-file-SVGHEART.COM.png"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://t3.ftcdn.net/jpg/01/79/88/20/360_F_179882080_Zga46fOuCNnZlF9o2IC6gYgHVQFDVKMv.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://www.shutterstock.com/image-vector/dog-silhouette-breed-labrador-vector-600nw-2288456187.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://t3.ftcdn.net/jpg/01/79/88/20/360_F_179882080_Zga46fOuCNnZlF9o2IC6gYgHVQFDVKMv.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://www.svgheart.com/wp-content/uploads/2021/11/triceratops-dino-silhouette-dinosaur-free-svg-file-SVGHEART.COM.png"
    }
  ];
  const renderToDom = (divId, htmltoRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmltoRender
  }

  //const petCard = document.querySelector(".card");
  const cardsOnDom = (array) => {
    let domString = "";
    for (const member of array) {
        domString += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <img src="${member.imageUrl}" class="card-img-top" alt="...">
          <p class="color">${member.color}</p>
          <p class="card-text">${member.specialSkill}</p>
          <p class="type">${member.type}</p>
        </div>
      </div>`
    };
    renderToDom("#app",domString)

  }


  //petCard.innerHTML = domString;

  const filter = (array, animalType) => {
    const animalArray = [];
    for (const member of array) {
      if (member.type === animalType) {
        animalArray.push(member)
      }
    }
    return animalArray
  }

  const catButtonEl = document.querySelector(".cats-button");
  const dogButtonEl = document.querySelector(".dogs-button");
  const dinoButtonEl = document.querySelector(".dinos-button");
  const allButtonEl = document.querySelector(".all-pets-button")

  
  allButtonEl.addEventListener("click", () => {
    cardsOnDom(pets);
  })
  catButtonEl.addEventListener("click", () => {
    const catAnimals = filter(pets, "cat");
    cardsOnDom(catAnimals);
  })
  dogButtonEl.addEventListener("click", () => {
    const dogAnimals = filter(pets, "dog");
    cardsOnDom(dogAnimals)
  })
  dinoButtonEl.addEventListener("click", () => {
    const dinoAnimals = filter(pets, "dino");
    cardsOnDom(dinoAnimals)
  })

  const form = document.querySelector("form");

  const createPet = (e) => {
    e.preventDefault();

    const newPetObj = {
      id: pets.length + 1,
      name: document.querySelector("#pet-name").value,
      color: document.querySelector("#pet-color").value,
      specialSkill: document.querySelector("#pet-description").value,
      type: document.querySelector("#pet-type").value,
      imageUrl: document.querySelector("#pet-image").value
    };
    pets.push(newPetObj);
    form.reset();
    cardsOnDom(pets);
  }

 form.addEventListener("submit", createPet)
