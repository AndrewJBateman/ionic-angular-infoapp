# Ionic Angular Photostore

App to take, store and display photos using the [Ionic 4 framework](https://ionicframework.com/docs).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

## Screenshots

![Home Page](./img/home-page.png)

## Technologies

* Ionic/angular - version 4.0.0
* Ionic DevApp, to allow app to run on an iOS or Android device.
* Cordova-sqlite-storage, an Ionic Cordova Storage Plugin - version 3.2.0

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'
* The Ionic DevApp was installed on an Android device from the Google Play app store.

## Code Examples

```typescript
* takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });

      // Save all photos for later viewing
      this.storage.set('photos', this.photos);
    }, (err) => {
     // Handle error
     console.log('The is a camera error: ' + err);
    });

  }

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

```

## Features

* Example 1

## Status & To-do list

* Status: Working app. Tab 2 has acess to a phone camera and it stores & displays the photos taken. There are still tabs 1 and 3 to develop.

* To-do: Add a lot more detail/styling to front page.

## Inspiration

Project inspired by [Simon Grimms's 'How to Build Your First Ionic 4 App with API Calls'](https://medium.freecodecamp.org/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a).

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!