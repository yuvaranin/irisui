import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router'
// import { DataSharingService } from './data-sharing.service';
// import { NotificationConstants } from '../constants/notification-constants';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class GenericAPIService {
myCookies:any;

    public baseUrL = environment.apiUrl;
  constructor(
    public httpClient: HttpClient,
    public router: Router,
    //public dataSharingService: DataSharingService
  ) {
  //  this.myCookies='.ASPXAUTH'+this.cookieService.get('.ASPXAUTH')+'; .ASPXROLES'+this.cookieService.get('.ASPXROLES');
    console.log(this.myCookies);
  }
    protected standardHeaders() {
        return {
            'Content-Type': 'application/json',
            'Cookie':this.myCookies
           // 'sessionToken': sessionStorage.token,
        };
    }
    protected standardHeaders1() {
        return {
            'Accept': "application/json",
            'Cookie':this.myCookies

            //'sessionToken': sessionStorage.token,
        };
    }
    //Token is Invalid
    //Get All
    getAll(url: any): Observable<any> {
      debugger
        return this.httpClient.get(this.baseUrL + url, {
            headers: this.standardHeaders()
        }).pipe(
            map((response: any) => {

                if (response.status.message == 'Token is Invalid') {
                    this.logout();
                }
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    //Get with pagination

    //Get By id


    //Post and Edit
    post(url: any, payload: any): Observable<any> {
        return this.httpClient.post(this.baseUrL + url, payload, {
            headers: this.standardHeaders()
        }).pipe(
            map((response: any) => {
                if (response.status.message == 'Token is Invalid'||response.status.message=='Token is invalid') {
                    this.logout();
                }
                this.notify(url,response);
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }


    //Image post.........
    imagePost(url: any, payload: any): Observable<any> {
        return this.httpClient.post(this.baseUrL + url, payload, {
            headers: this.standardHeaders1(),
            // params:{params},
        }).pipe(
            map((response: any) => {
                if (response.status.message == 'Token is Invalid') {
                    this.logout();
                }
                this.notify(url,response);

                return response;
            }),
            catchError(error => {
                //this.dataSharingService.failureMessage(NotificationConstants.errormsg);
                return throwError(error);
            })
        );
    }

    //Delete

    delete(url: any): Observable<any> {
        return this.httpClient.delete(this.baseUrL + url, {
            headers: this.standardHeaders()
        }).pipe(
            map((response: any) => {
                if (response.status.message == 'Token is Invalid') {
                    this.logout();
                }
                this.notify(url,response);
                return response;
            }),
            catchError(error => {
                //this.dataSharingService.failureMessage(NotificationConstants.errormsg);
                return throwError(error);
            })
        );
    }

    logout() {
       //this.dataSharingService.updatenotification(NotificationConstants.sessionInvalidNotification);
        sessionStorage.clear();
        window.location.reload();
        this.router.navigate(['signIn']);
        setTimeout(() => {
            //this.dataSharingService.updatenotification('');
          }, 2000);
    }

    notify(url: string | string[],response: { status: { success: string; message: any; }; }){
        console.log(url)
        url.includes('/resetPassword')==true?url='/resetPassword':url;
        url.includes('/validateResetPasswordToken')==true?url='/validateResetPasswordToken':url;

        if (url == "/user/logout" || url == "/user/login"||url =='/resetPassword'||url=='/validateResetPasswordToken') {
            console.log('no message required')
        }
        else if(url == '/save/raceEntry'|| url == '/save/raceResult'){
            if (response.status.success == 'success' || response.status.success == 'Success') {
                //this.dataSharingService.successFlagMessage(response.status.message);
            }
            if (response.status.success == 'Fail'||response.status.success == 'fail') {
                //this.dataSharingService.failureMessage(response.status.message);
            }
        }
        else{
            if (response.status.success == 'success' || response.status.success == 'Success') {
                //this.dataSharingService.successMessage(response.status.message);
            }
            if (response.status.success == 'Fail'||response.status.success == 'fail') {
                //this.dataSharingService.failureMessage(response.status.message);
            }
        }

    }

}
