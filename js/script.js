// Function replace name
function replaceName(){
    let name = prompt("Siapakah nama anda?","");
    document.getElementById("name").innerHTML=name
    }
    
    replaceName();

// Function Automatic Slide banner
let indexSlide = 1;
showBanner();

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('img-content');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('index' + (indexSlide - 1) + 'Adalah Index Image Yang d i tampilkan');
}

setInterval(() => nextSlide(1), 3000);

// function Validate Form

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender =  document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}