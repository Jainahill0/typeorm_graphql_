import { Industry } from "./enum/industry.enum";
import { OrgSize } from "./enum/orgSize.enum";

export type UpdateOrgInput = {
    orgName: string;
    industry: Industry;
    orgSize: OrgSize;
    firstName: string ;
}