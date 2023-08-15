interface ICreateUserDTO {
  id?: string;
  email: string;
  password: string;
  is_student: boolean;
  is_admin: boolean;
  is_teacher: boolean;
}

export { ICreateUserDTO };
