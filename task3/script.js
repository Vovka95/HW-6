const form = document.forms.namedItem("user");
const users = [];
const tBody = document.createElement('tbody');
let count = 0;



form.addEventListener('submit', function(e) {
	e.preventDefault();


	
	let user = new User(this.name, this.sex, this.date, this.address, this.phone, this.email);

	users.push(user);
	

	user.render(count);
	let tr = user.render(count);

	user.createEventClick(tr);
	addU(tr);


	count++;

})




class SuperUser {
	constructor(name, sex, date, address, phone, email) {
		this.name = document.getElementById("name").value;
		this.sex = document.getElementById("sex").value;
		this.date = document.getElementById("birthdate").value;
		this.address = document.getElementById("address").value;
		this.phone = document.getElementById("phone").value;
		this.email = document.getElementById("email").value;
	}

	render(count) {
	
		const tr = document.createElement('tr');
		const table = document.querySelector('table');
		tr.setAttribute('user-index',count);
		

		

		for (let key in this) {
			
			const td = document.createElement('td');
			
	      td.textContent = this[key];
	      tr.appendChild(td);  
		}

		table.appendChild(tBody);
		

		return tr;
	}

	
}




function addU(tr) {
	tBody.appendChild(tr);
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

	createEventClick(tag){
	   tag.addEventListener('click',function(e){

	   const index = tag.getAttribute("user-index");

	   users[index].changeDataVisibility(tag);
	        
	        	
   	});
        
	}
}



        	




