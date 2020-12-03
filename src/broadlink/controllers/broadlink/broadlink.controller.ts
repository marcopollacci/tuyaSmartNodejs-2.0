import { Controller, Get } from '@nestjs/common';
import { ExecuteService } from '../../services/execute/execute.service';

@Controller('broadlink')
export class BroadlinkController {

  constructor(private excuteSrv: ExecuteService) {
  }

  @Get('execute')
  async executeCommand(): Promise<string>  {
    return this.excuteSrv.doCommand();
  }

  @Get('learning')
  async learningCommand(): Promise<string>  {
    return 'to be implement...';
  }

}
