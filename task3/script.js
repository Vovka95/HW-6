const form = document.forms.namedItem("user");
const users = [];
const tBody = document.createElement('tbody');
let count = 0;
const table = document.querySelector('table');

table.appendChild(tBody);

form.addEventListener('submit', function(e) {
	e.preventDefault();

	let user = new User(this.name, this.sex, this.date, this.address, this.phone, this.email);

	users.push(user);

	const tr = user.render(count);
	user.createEventClick(tr);
	addUser(tr);

	count++;
})

class SuperUser {
	constructor() {
		this.name = document.getElementById("name").value;
		this.sex = document.getElementById("sex").value;
		this.date = document.getElementById("birthdate").value;
		this.address = document.getElementById("address").value;
		this.phone = document.getElementById("phone").value;
		this.email = document.getElementById("email").value;
	}	
}

function addUser(tr) {
	tBody.appendChild(tr);
}

class User extends SuperUser {

	render(count) {
	
		const tr = document.createElement('tr');
		tr.setAttribute('user-index',count);

		for (let key in this) {
			
			const td = document.createElement('td');
			td.textContent = this[key];
	      tr.appendChild(td);  
		}
		return tr;
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

	createEventClick(tag){
	   tag.addEventListener('click',function(e){

	   const index = tag.getAttribute("user-index");

	   users[index].changeDataVisibility(tag);
     	
   	});    
	}
}



        	




