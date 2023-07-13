/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  userName: string;
  password: string;
  email: string;
  phoneNumber: string;
  name: UserName;
  gender: 'male' | 'female';
  address: string;
};

export type UserModel = {
  isUserExist(
    userName: string
  ): Promise<Pick<IUser, '_id' | 'userName' | 'password'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
