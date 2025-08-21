
let access = [];

function changeText(id) {
				let elem = document.getElementById(id);
				elem.innerText = "BECAUSE I AM COLORFUL OR RESPONSIVE WHEN CLICKED";
}

function check(value) {
				if (value.trim().length < 3) return document.getElementById("error").innerHTML = '<span class="wrong">Less Characters</span>';
		//		document.getElementById("input").style.backgroundColor = 'aliceblue';
			//	alert(value);
				 let word = [];
				for (let char of value.trim().toLowerCase().split('')) {
								let index = `${char}`.codePointAt();
								if (index > 96 && index < 123 || index == 32 ) {
												word.push(true);
								}else word.push(false);
				}
				
				if (word.includes(false)) {
								access[0] = '';
								return document.getElementById("error").innerHTML = '<span class="wrong">Invalid Name</span>';
				}
				else {
								access[0] = value;
								return document.getElementById("error").innerHTML = '<span class="crt">Name is Available</span>';
				}
}

function checkEmail(value) {
				if (value.trim().length < 13) return document.getElementById("errorEmail").innerHTML = '<span class="wrong">Less Characters</span>';

				if (value.trim().endsWith('@gmail.com')) {
								access[1] = value;
								return document.getElementById("errorEmail").innerHTML = '<span class="crt">Your Email Is Correct.</span>';
				}
				else {
								access[1] = '';
								return document.getElementById("errorEmail").innerHTML = '<span class="wrong">Must be a valid personal Email "@gmail.com"</span>';
				}
				
}

function checkCont(value) {
				if (value.trim().length < 13 || value.trim().startsWith('+') == false) 	return document.getElementById("errorCont").innerHTML = '<span class="wrong">Must be with atleast "13" digits with country code "+254"</span>';
				
				let word = [];
				for (let char of value.trim().toLowerCase().split('')) {
								let index = `${char}`.codePointAt();
								if (index > 47 && index < 58 || index == 32 || index == 40 || index == 41 || index == 45 || index == 43) {
												word.push(true);
								}else word.push(false);
				}
				
				if (word.includes(false)) {
								access[2] = '';
								return document.getElementById("errorCont").innerHTML = '<span class="wrong">Contact Contains Only Digits</span>';
				}
				else {
								access[2] = value;
								return document.getElementById("errorCont").innerHTML = '<span class="crt">Contact is Available</span>';
				}
}

function moreOptions() {
				let busns = ["Prefer Not Say","Painting", "Electricals", "Mall", "Laundry", "Clothing", "Carpentry", "BarberShop", "Photoshop", "Hardware", "Normal Shop", "Supermarket", "Agrovet", "Farming", "Schooling", "Sporting", "None of the listed"];
				let edit = '';
				for (let v of busns) {
								edit += `<option onclick="alert(this.value)" value="${v}">${v}</option>`;
					//			document.getElementById('selects').innerHTML = <
				}
				document.getElementById('selects').innerHTML = edit;
				document.getElementById('save').innerHTML = `<button class="btn unhide" onclick="option(selects.value);">Submit</button>`;
				
}

function option(value) {
				alert(access)
}

function sendWhatsApp() {
  let phone = "254789925270"; // international format without +
  let message = "Hello *Derick!* ";

  let encodedMsg = encodeURIComponent(message);
  let link = `https://wa.me/${phone}?text=${encodedMsg}`;

  window.open(link, "_blank");
}

function makeCall() {
  let phone = "+254789925270"; 
  let link = `tel:${phone}`;

  window.open(link);
}

function sendSMS() {
  let phone = "+254789925270";
  let message = "Hello Derick!";

  let encodedMsg = encodeURIComponent(message);
  let link = `sms:${phone}?body=${encodedMsg}`;

  window.open(link);
}

function sendTelegram() {
  let username = "taid_myk_J_1611"; // without @
  let message = "Hello Derick!";

  let encodedMsg = encodeURIComponent(message);
  let link = `https://t.me/${username}?text=${encodedMsg}`;

  window.open(link, "_blank");
}

 function sendGmail() {
      let to = "repred048@gmail.com";
      let subject = "Greetings!";
      let body = "Hello Derick!";

      // Encode text
      let encodedTo = encodeURIComponent(to);
      let encodedSubject = encodeURIComponent(subject);
      let encodedBody = encodeURIComponent(body);

      // Gmail compose link
      let link = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;

      // open Gmail compose in new tab
      window.open(link, "_blank");
    }