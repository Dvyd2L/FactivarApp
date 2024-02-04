import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { StorageHelper } from '@app/helpers/storage.helper';
import { StorageKeyEnum } from '@app/interfaces/enums/storage.enum';
import { InputSwitchModule } from "primeng/inputswitch";
/**
 * Componente para alternar el tema de la aplicación.
 */
@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [FormsModule, InputSwitchModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent implements OnInit {
  themeSelection: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const theme = StorageHelper.getItem(StorageKeyEnum.Theme);

    if (theme) {
      this.themeSelection = theme === 'dark';
      this.toggle(this.themeSelection);
    }
  }
  /**
   * Alterna el tema de la aplicación entre oscuro y claro.
   */
  toggle = (state: boolean) => {
    const $body = this.document.body;

    $body.getAttribute('data-bs-theme') === 'dark'
      ? $body.setAttribute('data-bs-theme', 'light')
      : $body.setAttribute('data-bs-theme', 'dark');

    const theme = state ? 'dark' : 'light';
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    StorageHelper.setItem(StorageKeyEnum.Theme, theme);
    themeLink.href = `lara-${theme}-indigo.css`;
  };
}
