import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AddfriendComponent } from './addfriend/addfriend.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
{
  path: '',
  component: HomeComponent,
  
},
{ path: 'forgot', component: ForgotComponent },
{
  path: 'land/:id',
  component: LandingComponent,
  children: [
    {
      path: 'chatroom',
      component: ChatroomComponent,
      runGuardsAndResolvers: 'always' // Ensure component re-initialization
    },
    {
      path: 'chatroom/:fid',
      component: ChatroomComponent,
      runGuardsAndResolvers: 'always' // Ensure component re-initialization
    }
  ]
},
{ path: 'addfriend/:id', component: AddfriendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
