export const userFilterableFields: string[] = [
  'searchTerm',
  'userId',
  'email',
  'contactNo',
  'gender',
  'bloodGroup',
  'gender',
  'designation',
  'academicUserId',
  'academicDepartmentId',
];

export const userSearchableFields: string[] = [
  'firstName',
  'lastName',
  'middleName',
  'email',
  'contactNo',
  'userId',
  'designation',
];

export const userRelationalFields: string[] = [
  'academicUserId',
  'academicDepartmentId',
];
export const userRelationalFieldsMapper: { [key: string]: string } = {
  academicUserId: 'academicUser',
  academicDepartmentId: 'academicDepartment',
};
