import { Injectable } from '@nestjs/common';

@Injectable()
export class ExecuteService {

  async doCommand(): Promise<string> {
    return 'to be implemented...';
  }

}
