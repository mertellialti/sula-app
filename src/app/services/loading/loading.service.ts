import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingElement: HTMLIonLoadingElement | null = null;

  constructor(private readonly loadingController: LoadingController) { }

  async startLoading(msg: string = '') {
    // If a loading is already present, do nothing
    if (this.loadingElement) {
      return;
    }

    // Create and present the loading
    this.loadingElement = await this.loadingController.create({
      message: msg
    });
    await this.loadingElement.present();
  }

  async dismissLoading() {
    if (!this.loadingElement) {
      return; // No loading to dismiss
    }

    // Dismiss the loading and reset the reference
    await this.loadingElement.dismiss();
    this.loadingElement = null;
  }
}
