import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
    displayPatientsList : any[];
    searchWord: string;
	
  Patients = [
	  {
		firstName : "Patient1"  ,
		lastName  : "patient1",
		emailAddress : "pt1@test.com",
		doctorName : "doctor1"
	  },
	  {
		firstName : "Patient2"  ,
		lastName  : "patient2",
		emailAddress : "pt2@test.com",
		doctorName : "doctor2"
	  },
	  {
		firstName : "Patient3"  ,
		lastName  : "patient3",
		emailAddress : "pt3@test.com",
		doctorName : "doctor3"
	  },
	  {
		firstName : "Patient4"  ,
		lastName  : "patient4",
		emailAddress : "pt4@test.com",
		doctorName : "doctor4"
	  },
	  {
		firstName : "Patient5"  ,
		lastName  : "patient5",
		emailAddress : "pt5@test.com",
		doctorName : "doctor5"
	  },
	  {
		firstName : "Patient6"  ,
		lastName  : "patient6",
		emailAddress : "pt6@test.com",
		doctorName : "doctor6"
	  },
	  {
		firstName : "Patient7"  ,
		lastName  : "patient7",
		emailAddress : "pt7@test.com",
		doctorName : "doctor7"
	  },
	  {
		firstName : "Patient8"  ,
		lastName  : "patient8",
		emailAddress : "pt8@test.com",
		doctorName : "doctor8"
	  }
		
  ]
  
	
	ngOnInit() {
    this.displayPatientsList = this.Patients;
  }
	
	inputTextVal = '';
	onKey(event: any) { // without type info
    this.inputTextVal = event.target.value;
	}
	
	
	searchWordKey(){
		
		let searchWordArray = this.searchWord ? this.searchWord.split(' ') : [];
		this.displayPatientsList = [];
		
		
		if (searchWordArray.length === 2) {
				if (searchWordArray[0].toLocaleLowerCase() === 'firstname') {
				 this.Patients.forEach(function(value, key) {
					   if(value.firstName.toLocaleLowerCase().indexOf(searchWordArray[1].toLocaleLowerCase())  !== -1 ){
						   this.push(value);
					   }
				   },this.displayPatientsList);
				  
			   } else if (searchWordArray[0].toLocaleLowerCase() === 'lastname') {
				  this.Patients.forEach(function(value, key) {
					   if(value.lastName.toLocaleLowerCase().indexOf(searchWordArray[1].toLocaleLowerCase())  !== -1 ){
						   this.push(value);
					   }
				   },this.displayPatientsList);
			   } else if (searchWordArray[0].toLocaleLowerCase() === 'emailaddress') {
				 this.Patients.forEach(function(value, key) {
					   if(value.emailAddress.toLocaleLowerCase().indexOf(searchWordArray[1].toLocaleLowerCase())  !== -1 ){
						   this.push(value);
					   }
				   },this.displayPatientsList);
					   
			   } else if (searchWordArray[0].toLocaleLowerCase() === 'doctor') {
				   this.Patients.forEach(function(value, key) {
					   if(value.doctorName.toLocaleLowerCase().indexOf(searchWordArray[1].toLocaleLowerCase())  !== -1 ){
						   this.push(value);
					   }
				   },this.displayPatientsList);
				 
			   } else {
				 this.displayPatientsList = [];
			   }
		} else {
       this.displayPatientsList = [];
     }
	}
  
}
