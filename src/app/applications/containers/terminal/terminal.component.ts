import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { TerminalCommand } from 'src/app/shared/config/terminal-command';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TerminalService]
})
export class TerminalComponent {

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {
      const response = this.getCommandResponse(command);
      this.terminalService.sendResponse(response);
    });
  }

  getCommandResponse(command: string) {
    switch(command.toUpperCase()) {
      case TerminalCommand.Author: return "Juan David Varela R";

      case TerminalCommand.Ui: return "PrimeNg";

      case TerminalCommand.Framework: return "Angular CLI";

      default: return "Unknown command";
    }
  }
}
