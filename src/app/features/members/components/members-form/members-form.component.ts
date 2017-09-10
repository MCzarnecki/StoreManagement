import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Member } from '../../models/member';

@Component({
  selector: 'app-members-form',
  templateUrl: './members-form.component.html'
})
export class MembersFormComponent implements OnInit {

  @Input()
  member: Member;

  @Output()
  submitMember = new EventEmitter<Member>();

  memberForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.memberForm = this.fb.group({
      name: [(this.member.name ? this.member.name : '')],
      surname: [(this.member.surname ? this.member.surname : '')],
      address: [(this.member.address ? this.member.address : '')],
      status: [(this.member.status ? this.member.status : '')]
    });
  }

  submit() {
    const member = Object.assign(this.member, this.memberForm.value);
    this.submitMember.emit(member);
  }

}
