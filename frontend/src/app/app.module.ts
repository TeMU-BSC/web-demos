import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

// https://material.angular.io/guide/getting-started
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'

// https://github.com/angular/flex-layout
import { FlexLayoutModule } from '@angular/flex-layout'

// https://www.npmjs.com/package/simplemattable
import { SimplemattableModule } from 'simplemattable'

// https://www.freakyjolly.com/angular-8-7-show-global-progress-bar-loader-on-http-calls-in-3-steps-using-angular-interceptors-in-angular-4-3/
import { LoaderService } from './components/loader/loader.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoaderInterceptor } from './loader.interceptor'

// Own components
import { PosComponent } from './components/pos/pos.component'
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component'
import { FooterComponent } from './components/footer/footer.component'
import { TranslatorComponent } from './components/translator/translator.component'
import { HeaderComponent } from './components/header/header.component'
import { LoaderComponent } from './components/loader/loader.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { NerBscComponent } from './components/ner-bsc/ner-bsc.component'
import { NgxAnnotateTextModule } from 'ngx-annotate-text'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { LoadingComponent } from './components/loading/loading.component'
import { BratDisplayComponent } from './components/brat-display/brat-display.component'
import { DrugprotComponent } from './components/drugprot/drugprot.component'
import { NerTableComponent } from './components/ner-table/ner-table'
import { SentenceSplitterComponent } from './components/sentence-splitter/sentence-splitter.component'
import SpacyVisualizerComponent from './components/spacy-visualizer/spacy-visualizer.component';
import { HtmlsanatizerPipe } from './pipes/htmlsanatizer.pipe';
import { SpacyDoctornlpComponent } from './components/spacy-doctornlp/spacy-doctornlp.component';
import { PhenotypeViewComponent } from './components/phenotype-view/phenotype-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'



@NgModule({
  declarations: [
    AppComponent,
    PosComponent,
    ComingSoonComponent,
    FooterComponent,
    TranslatorComponent,
    HeaderComponent,
    LoaderComponent,
    ProjectsComponent,
    NerBscComponent,
    LoadingComponent,
    BratDisplayComponent,
    DrugprotComponent,
    NerTableComponent,
    SentenceSplitterComponent,
    SpacyVisualizerComponent,
    HtmlsanatizerPipe,
    SpacyDoctornlpComponent,
    PhenotypeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    SimplemattableModule,
    NgxAnnotateTextModule,
    MatCheckboxModule,
    NgbModule,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
