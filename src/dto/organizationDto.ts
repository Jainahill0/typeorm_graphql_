import { Industry } from "./enum/industry.enum";
import { OrgSize } from "./enum/orgSize.enum";


export type CreateOrganizationInput = {
    id: number;
    orgName: string;
    industry: Industry;
    orgSize: OrgSize;
  };