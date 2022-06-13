import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterPaths } from 'src/app/entities/enums/router.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  public paths = RouterPaths;

}
