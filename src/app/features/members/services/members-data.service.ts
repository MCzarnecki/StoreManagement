import { Injectable } from '@angular/core/';
import { Member } from '../models/member';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MembersDataService {

    members: Member[] = [
        { id: 1, name: 'Jake', surname: 'Peralta', status: 'Policeman', address: 'Brooklyn' },
        { id: 2, name: 'Mathew', surname: 'Murdock', status: 'Vigilante', address: 'Hells Kitchen' },
        { id: 3, name: 'Daenerys', surname: 'Targaryen', status: 'Stormborn, the Unburnt etc...', address: 'Westeros' },
    ];

    addMember(member: Member) {
        const ids = this.members.map(member => member.id);
        const newId = Math.max.apply(Math, ids) + 1;
        this.members.push({ ...member, id: newId });
    }

    editMember(member: Member) {
        const index = this.members.map(m => m.id).indexOf(member.id);
        this.members[index] = member;
    }

    getMembers() {
        return Observable.of(this.members);
    }

}