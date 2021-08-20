import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { StoryComponent } from './story/story.component';
import { StoryRendererComponent } from './story/story-renderer/story-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StoryComponent,
    StoryRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
