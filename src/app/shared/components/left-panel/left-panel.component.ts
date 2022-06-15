import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterPaths } from 'src/app/entities/enums/router.enum';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelComponent {

  public paths = RouterPaths;
  public isPanelSmall = true;

  public originalOrderComparator = (a: any, b: any): number => {
    return 0;
  }

  public switchMenuView() {
    this.isPanelSmall = !this.isPanelSmall;
  }

}
