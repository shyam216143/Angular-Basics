import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatDividerModule,
		MatListModule,
		MatTooltipModule,
		MatChipsModule,
		MatBadgeModule,
		MatDialogModule,
		MatSnackBarModule,
		MatRippleModule,
		MatTabsModule,
		MatSelectModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
		FormsModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatDividerModule,
		MatListModule,
		MatTooltipModule,
		MatChipsModule,
		MatBadgeModule,
		MatDialogModule,
		MatSnackBarModule,
		MatRippleModule,
		MatTabsModule,
		MatSelectModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
