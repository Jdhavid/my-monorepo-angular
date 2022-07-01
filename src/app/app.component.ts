import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  public subs: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.subs = this.translate.onLangChange.subscribe(app => {
      this.titleService.setTitle(app.translations.APP.APP_TITLE);
    });
  }
}
