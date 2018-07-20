import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { states, Address, Hero, heroes } from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
 
  heroForm: FormGroup;
  states = states;
  @Input()hero: Hero;
  nameChangeLog: string[] = [];

  logNameChange() {
  	const nameControl = this.heroForm.get("name");
  	nameControl.valueChanges.forEach((value:string) => this.nameChangeLog.push(value));
  }

	constructor(private fb: FormBuilder) {
		//this.hero = heroes[0];
		this.heroForm = this.fb.group({
			name: ['', Validators.required],
			//address: this.fb.group(new Address()),
			secretLairs: this.fb.array([]),
			power: '',
			sidekick: ''
		});
		/*this.heroForm.setValue({
            name: this.hero.name,
            address: this.hero.addresses[0] || new Address(),
            power: '',
            sidekick: false

		});
		this.heroForm.patchValue({
			name: this.hero.name
		});*/
		this.logNameChange();
	}

  ngOnInit() {
  }

  ngOnChanges() {
     this.rebuildForm();
  }
  rebuildForm() {
  	this.heroForm.reset({
  		name: this.hero.name
  		//address: this.hero.addresses[0] || new Address()
  	});
  	console.log(this.hero.addresses);
  	this.setAddresses(this.hero.addresses);
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    console.log(addressFormArray);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray{
  	return this.heroForm.get('secretLairs') as FormArray;
  }

  addLair() {
  	this.secretLairs.push(this.fb.group(new Address()));
  }
  removeLair(i) {
  	this.secretLairs.removeAt(i);
  }
}

export class HeroDetailComponent1{
	name = new FormControl();
}
export class HeroDetailComponent2{
	heroForm = new FormGroup({
		name: new FormControl
	});
}

export class HeroDetailComponent3{
	heroForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.heroForm = this.fb.group({
			name: ['', Validators.required]
		});
	}
}
