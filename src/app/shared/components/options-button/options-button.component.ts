import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OPTIONS_CONFIG } from 'src/app/entities/constants/options.constants';

@Component({
  selector: 'app-options-button',
  templateUrl: './options-button.component.html',
  styleUrls: ['./options-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsButtonComponent {
  public readonly options = OPTIONS_CONFIG;
  public focused = false;

  public switchFocus() {
    this.focused = !this.focused;
  }
}
