interface ICreateUserDTO {
  id?: string;
  avatar?: string;
  name: string;
  password: string;
  email: string;
  driverLicence: string;
}

export default ICreateUserDTO;
