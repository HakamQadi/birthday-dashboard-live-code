let profiles = [
  {
    username: "eva",
    gender: "female",
    age: 24,
    birthday: "04 February 1993",
  },
  {
    username: "Mohammad",
    gender: "Male",
    age: 24,
    birthday: "05 May 1995",
  },
  {
    username: "Majd",
    gender: "Female",
    age: 24,
    birthday: "05 May 1990",
  },
  {
    username: "Rawan",
    gender: "Female",
    age: 24,
    birthday: "05 May 2000",
  },
];

let birthdayCard = document.getElementById("birthday__card");
let counter = 0;
let heading = document.getElementById("heading");
// let age;
let profilesContainer = document.getElementById("birthday__profile-container");
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.toLocaleString("default", { month: "long" });
let day = currentDate.getDay();
// console.log(year);
// console.log(day);
// console.log(month);
// console.log(currentDate);
let img;
for (let profile of profiles) {
  let birthday = profile.birthday.split(" ");

  // change profile image
  if (profile.gender == "Male") {
    img = "assets/img/male.png";
  } else {
    img = "assets/img/female.png";
  }

  if (birthday[1] === month && birthday[0] == day) {
    // calculate age
    let age = year - birthday[2];
    //Way 1 : The easy way
    profilesContainer.innerHTML += ` <div class="birthday__profile">
        <img src="${img}" alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p> ${age}</p>
        </div>
    </div>`;

    counter++;

    //Way 2 : The hard way
    //  let profileCard =  document.createElement('div')
    // profileCard.className='birthday__profile';
    // profilesContainer.appendChild(profileCard)
    // let profileImg = document.createElement('img')
    // profileImg.setAttribute('src','assets/img/female.png')
    // profileCard.appendChild(profileImg);
    // let birthdayInfo = document.createElement('div')
    // birthdayInfo.className = 'birthday__info'
    // profileCard.appendChild(birthdayInfo)
    // let username = document.createElement('p')
    //username.appendChild(document.createTextNode(profile.username))
    //birthdayInfo.appendChild(username)
    //let age = document.createElement('p')
    //age.appendChild(document.createTextNode(profile.age))
    //birthdayInfo.appendChild(age)
    //console.log(profile)
  }
}
//counter
birthdayCard = `<p id="birthday_counter">${counter} birthdays today </p>`;
heading.insertAdjacentHTML("afterend", birthdayCard);

// clear button
document.getElementById("btn__clear").onclick = function () {
  profilesContainer.innerHTML = "";
};
