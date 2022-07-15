import { SummaryPipe } from './summary.pipe';
import { CoursesServices } from './course/courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // added this to overcome: Error: src/app/contact-form/contact-form.component.html:4:62 - error NG8003: No directive found with exportAs 'ngModel'.
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/post.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CoursesServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }
