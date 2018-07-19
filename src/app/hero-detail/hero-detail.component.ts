import { Component, OnInit } from '@angular/core';
import { FormControl， FormGroup, Validators, FormBuilder } from '@angular/forms';
import { states } from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 
  heroForm: FormGroup;
  states = states;

	constructor(private fb: FormBuilder) {
		this.heroForm = this.fb.group({
			name: ['', Validators.required],
			street: '',
			city: '',
			state: '',
			zip: '',
			power: '',
			sidekick: ''
		});
	}

  ngOnInit() {
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
