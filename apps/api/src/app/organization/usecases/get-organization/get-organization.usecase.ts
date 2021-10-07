import { Injectable, Scope } from '@nestjs/common';
import { ContributionRepository, OrganizationRepository } from '@hacksquad/core';
import { GetOrganizationCommand } from './get-organization.command';

@Injectable({
  scope: Scope.REQUEST,
})
export class GetOrganization {
  constructor(private readonly organizationRepository: OrganizationRepository) {}

  async execute(command: GetOrganizationCommand) {
    const organization = await this.organizationRepository.findById(command.id);

    return organization;
  }
}
