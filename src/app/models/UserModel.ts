enum UserRole {
  UNVERIFIED = 'UNVERIFIED',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export class UserModel {
  clientID: number;
  name: string;
  email: string;
  address: string;
  // orders: [];
  // carServices: [];
  // bills: [];
  user_role: UserRole;
}
