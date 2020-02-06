enum UserRole {
  UNVERIFIED = 'UNVERIFIED',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export class UserModel {
  name: string;
  email: string;
  address: string;
  orders: [];
  carServices: [];
  bills: [];
  userRole: UserRole;
}
