const characters = [
  {
    name: "Abdul Ali",
    image:
      "https://s.yimg.com/ny/api/res/1.2/KlWnEhtq8qf235HCJTuhkw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/SeHIO4rz_boAnqjdSnN8.A--~B/aD00NTA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/aniin.com/f09bac9039e0b14e75849250305f4fce",
  },
  {
    name: "Seong Gi-Hun",
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Park-Hae-soo-----------as-Cho-Sang-woo.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
  },
  {
    name: "Cho Sang-Woo",
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Park-Hae-soo-----------as-Cho-Sang-woo.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
  },
  {
    name: "Kang Sae-Byeok",
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Jung-Ho-yeon-----------as-Kang-Sae-byeok.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
  },
  {
    name: "Oh Il-Nam",
    image:
      "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Oh-Young-soo-----------as-Oh-Il-nam.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
  },
  {
    name: "Hwang Jun-Ho",
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Wi-Ha-joon-----------as-Hwang-Jun-ho.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
  },
  {
    name: "Jang Deok-Su",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Heo-Sung-tae-as-Jang-Deok-su.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
  },
  {
    name: "Han Mi-Nyeo",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Kim-Joo-ryung-----------as-Han-Mi-nyeo.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
  },
  {
    name: " In-Ho AKA Front Man",
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/09/Squid-Game-Lee-Byung-hun-as-In-ho-aka-Front-Man.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
  },
  {
    name: "Doll",
    image:
      "https://koreadispatch.cdnser.be/wp-content/uploads/2021/09/2021-09-27_08-16-40-800x444.png",
  },
  {
    name: " Pink Soldier",
    image:
      "https://media.thetab.com/blogs.dir/90/files/2021/09/squidtheory-1024x536.jpg",
  },
];
const button = document.getElementById("button");
var sound = new Audio("squid-game.mp3");
setTimeout(() => {}, 100);

button.addEventListener("click", (e) => {
  sound.currentTime = 0;
  sound.play();

  e.preventDefault();
  const user_name = document.getElementById("user_name").value;
  if (user_name === "") {
    alert(
      "Tuz naav lihi ki... as ks tuz nav n lihita tula sangu ki tu konta character aahes te...as kuth ast vhyay...!!"
    );
  } else {
    document.getElementById("spinner").classList.remove("d-none");
    setTimeout(() => {
      const randomNumber = Math.ceil(Math.random() * 10);
      let char = characters[randomNumber].name;
      let img = characters[randomNumber].image;
      document.getElementById("spinner").classList.add("d-none");
      document.getElementById("box").classList.remove("d-none");
      
      const image = document.getElementById("image");
      const charName = document.getElementById("name");
      image.src = img;
      charName.innerHTML = char;
      button.classList.add("d-none");
    }, 2000);
  }
});
