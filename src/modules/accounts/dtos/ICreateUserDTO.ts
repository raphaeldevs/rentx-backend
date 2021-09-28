interface ICreateUserDTO {
  id?: string;
  avatar?: string;
  name: string;
  password: string;
  email: string;
  driverlicense: string;
}

export default ICreateUserDTO;
