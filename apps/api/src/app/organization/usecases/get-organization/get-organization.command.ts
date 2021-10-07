import { AuthenticatedCommand } from '../../../shared/commands/authenticated.command';
import { CommandHelper } from '../../../shared/commands/command.helper';

export class GetOrganizationCommand {
  static create(data: GetOrganizationCommand) {
    return CommandHelper.create(GetOrganizationCommand, data);
  }

  public readonly id: string;
}
