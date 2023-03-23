/* eslint-disable prettier/prettier */
import { Industry } from './enum/industry.enum';
import { OrgSize } from './enum/orgSize.enum';

export type CreateOrganizationInput = {
  orgName: string;
  industry: Industry;
  orgSize: OrgSize;
  firstName: string;
};
