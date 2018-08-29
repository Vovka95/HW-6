let form = document.forms.namedItem("user");
let users = [];
let tBody = document.createElement('tbody');
let count = 0;


form.addEventListener('submit', function(e) {
	e.preventDefault();


	

	let user = {
		name: document.getElementById("name").value,
		sex: document.getElementById("sex").value,
		date: document.getElementById("birthdate").value,
		address: document.getElementById("address").value,
		phone: document.getElementById("phone").value,
		email: document.getElementById("email").value
	}

	
	let userData = new User(user.name, user.sex, user.date, user.address, user.phone, user.email);

	users.push(userData);
	

	userData.render(user, count);

	count++;

})



class SuperUser {
	constructor(name, sex, date, address, phone, email) {
		this.name = name;
		this.sex = sex;
		this.date = date;
		this.address = address;
		this.phone = phone;
		this.email = email;
	}

	render(user, count) {
	
		let tr = document.createElement('tr');
		let table = document.querySelector('table');
		tr.setAttribute('user-index',count);
		

		tBody.appendChild(tr);

		for (let key in users[count]) {
			
			let td = document.createElement('td');
			
	      td.textContent = users[count][key];
	      tr.appendChild(td);  
		}

		
		createEventClick(tr);
		table.appendChild(tBody);
		}
}


class User extends SuperUser {
	constructor(name, sex, date, address, phone, email){
		super(name, sex, date, address, phone, email)
	}
	
	changeDataVisibility(tag) {

		if (this.isDataVisible == false) {
				tag.classList.add("show");
				tag.classList.remove("hide");
				this.isDataVisible = true;
		} else {
				tag.classList.add("hide");
				tag.classList.remove("show");
				this.isDataVisible = false;
			}
	}
}




function createEventClick(tag){
   tag.addEventListener('click',function(e){

   	const index = tag.getAttribute("user-index");

      users[index].changeDataVisibility(tag);
        
        	
   });
        
}









        	




