import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { WizardComponent } from './login/wizard/wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatProgressBarModule, MatSelectModule, MatTabsModule } from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { CardDetailsComponent } from './dashboard/card-details/card-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    LoginComponent,
    WizardComponent,
    UserLoginComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatTabsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
