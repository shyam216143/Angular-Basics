import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentLikeDialogComponent } from './component/comment-like-dialog/comment-like-dialog.component';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { ExampleComponent } from './component/example/example.component';
import { ForgotPasswordDialogComponent } from './component/forgot-password-dialog/forgot-password-dialog.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MessageComponent } from './component/message/message.component';
import { PostDialogComponent } from './component/post-dialog/post-dialog.component';
import { PostLikeDialogComponent } from './component/post-like-dialog/post-like-dialog.component';
import { PostShareDialogComponent } from './component/post-share-dialog/post-share-dialog.component';
import { PostComponent } from './component/post/post.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ShareConfirmDialogComponent } from './component/share-confirm-dialog/share-confirm-dialog.component';
import { SignupComponent } from './component/signup/signup.component';
import { SnakebarComponent } from './component/snakebar/snakebar.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { WaitingDialogComponent } from './component/waiting-dialog/waiting-dialog.component';

const routes: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'posts/tags/:tagName', component: TimelineComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'forgot', component: ForgotPasswordDialogComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'message', component: MessageComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'verify-email/:token', component: VerifyEmailComponent },
  { path: 'post', component: PostComponent },
  { path: 'post-like-dialog', component: PostLikeDialogComponent },
  { path: 'post-share-dialog', component: PostShareDialogComponent },
  { path: 'share-confirm-dialog', component: ShareConfirmDialogComponent },
  { path: 'post-dialog', component: PostDialogComponent },
  { path: 'confirmation-dialog', component: ConfirmationDialogComponent },
  { path: 'waiting-dialog', component: WaitingDialogComponent },
  { path: 'comment-likes', component: CommentLikeDialogComponent },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
