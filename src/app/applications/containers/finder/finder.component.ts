import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinderComponent {

  folders$ = this.store.testFolders$;

  constructor(private store: Store) {}
}
