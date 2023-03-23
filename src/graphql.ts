
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OrgSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}

export enum Industry {
    HEALTHCARE = "HEALTHCARE",
    AGRICULTURE = "AGRICULTURE",
    AUTOMOBILE = "AUTOMOBILE",
    BANKING = "BANKING",
    CONSTRUCTION = "CONSTRUCTION",
    EDUCATION = "EDUCATION"
}

export interface CreateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<number>;
}

export interface UpdateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<number>;
}

export interface CreateOrganizationInput {
    orgName?: Nullable<string>;
    industry?: Nullable<Industry>;
    orgSize?: Nullable<OrgSize>;
    firstName?: Nullable<string>;
}

export interface CreateOrgUserInput {
    firstName?: Nullable<string>;
    orgName?: Nullable<string>;
}

export interface CreateUser {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<number>;
}

export interface UpdateUser {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<number>;
}

export interface DeleteUser {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<number>;
}

export interface CreateOrganization {
    orgName?: Nullable<string>;
    industry?: Nullable<Industry>;
    orgSize?: Nullable<OrgSize>;
    firstName?: Nullable<string>;
}

export interface CreateOrgUser {
    firstName?: Nullable<string>;
    orgName?: Nullable<string>;
}

export interface IQuery {
    getAllUsers(): Nullable<Nullable<CreateUser>[]> | Promise<Nullable<Nullable<CreateUser>[]>>;
    getAllOrganizations(): Nullable<Nullable<CreateOrganization>[]> | Promise<Nullable<Nullable<CreateOrganization>[]>>;
}

export interface IMutation {
    createUser(createUserInput?: Nullable<CreateUserInput>): Nullable<CreateUser> | Promise<Nullable<CreateUser>>;
    updateUser(updateUserInput?: Nullable<UpdateUserInput>): Nullable<UpdateUser> | Promise<Nullable<UpdateUser>>;
    deleteUser(firstName: string): Nullable<DeleteUser> | Promise<Nullable<DeleteUser>>;
    createOrganization(createOrganizationInput?: Nullable<CreateOrganizationInput>): Nullable<CreateOrganization> | Promise<Nullable<CreateOrganization>>;
    createOrgUser(createOrgUserInput?: Nullable<CreateOrgUserInput>): Nullable<CreateOrgUser> | Promise<Nullable<CreateOrgUser>>;
}

type Nullable<T> = T | null;
