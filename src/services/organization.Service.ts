import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrganizationInput } from "src/dto/organizationDto";
import { Organization } from "src/entity/organization.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrganizationService {
    constructor (
        @InjectRepository(Organization)
        private readonly  organizationRepository:Repository<Organization>,
        ) {}
    
        async create(createOrganizationInput: CreateOrganizationInput): Promise<Organization> {
            const organization = await this.organizationRepository.save(createOrganizationInput);
            return  organization;
          }
        
          async findAll(): Promise<Organization[]> {
            const allOrganizations = await this.organizationRepository.find()
            return allOrganizations;
      }
        }