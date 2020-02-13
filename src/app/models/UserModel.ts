import {UserRole} from './UserRole';

export class UserModel {
  clientID: number;
  name: string;
  email: string;
  address: string;
  userRole: UserRole;
}
