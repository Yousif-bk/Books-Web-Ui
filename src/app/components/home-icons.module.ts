import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLongArrowAltRight, faSearch } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class HomeIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faLongArrowAltRight,
      faSearch
    );
  }
}