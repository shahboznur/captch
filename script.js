const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");

//storing all captcha characters in array
// massivdagi barcha captcha belgilarini saqlash
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){
  for (let i = 0; i < 5; i++) { //getting 5 random characters from the array
                                //massivdan 5 ta tasodifiy belgini olish
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
                                                //captcha innerText ichida 6 ta tasodifiy belgilarni o'tkazish
  }
}
getCaptcha(); //calling getCaptcha when the page open
              //sahifa ochilganda getCaptcha ga qo'ng'iroq qilish

//calling getCaptcha & removeContent on the reload btn click
//qayta yuklashda getCaptcha & removeContent-ga qo'ng'iroq qilish btn tugmasini bosing
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});

checkBtn.addEventListener("click", e =>{
  e.preventDefault(); //preventing button from it's default behaviour
                      //tugmani standart xatti-harakatlaridan himoya qilish
  statusTxt.style.display = "block";
  //adding space after each character of user entered values because I've added spaces while generating captcha
  //foydalanuvchi kiritgan qiymatlardan keyin bo'sh joy qo'shish, chunki men captcha yaratishda bo'sh joylar qo'shdim
  let inputVal = inputField.value.split('').join(' ');
  if(inputVal == captcha.innerText){ //if captcha matched / agar captcha mos kelsa
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice! You don't appear to be a robot.";
    setTimeout(()=>{ //calling removeContent & getCaptcha after 2 seconds
                     //2 soniyadan so'ng removeContent & getCaptcha-ga qo'ng'iroq qilish
      removeContent();
      getCaptcha();
    }, 2000);
  }else{
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Did not match. Please try again!";
  }
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}