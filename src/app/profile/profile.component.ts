import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Output() notify = new EventEmitter();
  @Output() onProfileEdit = new EventEmitter();
  @Input() currentDate: Date | undefined;
  @Input() activities: any;
  @Input() profileStats: any;
  public maxDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
}
