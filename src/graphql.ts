
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
    firstName: string;
    lastName: string;
    email: string;
    phone?: Nullable<number>;
}

export interface UpdateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    phone?: Nullable<number>;
}

export interface CreateOrganizationInput {
    orgName: string;
    industry: Industry;
    orgSize?: Nullable<OrgSize>;
    firstName?: Nullable<string>;
}

export interface UpdateOrgInput {
    orgName: string;
    industry: Industry;
    orgSize?: Nullable<OrgSize>;
    firstName?: Nullable<string>;
}

export interface CreateUser {
    firstName: string;
    lastName: string;
    email: string;
    phone?: Nullable<number>;
}

export interface UpdateUser {
    firstName: string;
    lastName: string;
    email: string;
    phone?: Nullable<number>;
}

export interface DeleteUser {
    firstName: string;
    lastName: string;
    email: string;
    phone?: Nullable<number>;
}

export interface CreateOrganization {
    orgName: string;
    industry: Industry;
    orgSize?: Nullable<OrgSize>;
    firstName?: Nullable<string>;
}

export interface UpdateOrg {
    orgName: string;
    industry: Industry;
    orgSize?: Nullable<OrgSize>;
    firstName?: Nullable<string>;
}

export interface DeleteOrg {
    orgName: string;
    industry: Industry;
    orgSize?: Nullable<OrgSize>;
    firstName?: Nullable<string>;
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
    updateOrganization(updateOrgInput?: Nullable<UpdateOrgInput>): Nullable<UpdateOrg> | Promise<Nullable<UpdateOrg>>;
    deleteOrg(orgName: string): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
