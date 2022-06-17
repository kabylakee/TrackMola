import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KeyValue } from '@angular/common';

import { RouterPaths } from 'src/app/entities/enums/router.enum';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./styles/left-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelComponent {
  public paths = RouterPaths;

  public isPanelSmall = true;

  public icons = [
    'dashboard',
    'view_timeline',
    'schedule',
    'perm_contact_calendar',
    'stacked_line_chart',
    'attach_money',
    'admin_panel_settings',
  ];

  public originalOrderComparator = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>,
  ): number => {
    return 0;
  };

  public switchMenuView(): void {
    this.isPanelSmall = !this.isPanelSmall;
  }
}
