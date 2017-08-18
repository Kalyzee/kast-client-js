*   ### [Kast Client](#kastClient)
    *   [Installation](#installation)
    *   [Usage](#usage)
    *   [Anatomy of Kastbox](#anatomy)
    *   [Schema](#schema)
    *   [Example](#example)

*   ### [Kast Modules](#kastModules)
    *   [Camera](#camera)
    *   [Audio](#audio)
    *   [Video](#video)
    *   [Background](#background)
    *   [Context](#context)
    *   [Logo](#logo)
    *   [Mixer](#mixer)
    *   [Network](#network)
    *   [System](#system)
    *   [Update](#update)
    *   [USB Management](#usb)
    *   [Context](#context)



# Kast Client<a id="kastClient"></a>

This client allows you to communicate with KastBox with Websocket Mode and with
HTTP WS Mode (comming soon).

## Installation<a id="installation"></a>

### Using bower

```bash
  bower install kast-client
```

### Using npm

```bash
  npm install kast-client
```

## Usage<a id="usage"></a>

This package allows to communicate with any KastBox with Javascript if you have
registered your application into Kast Administration Panel.

With this service you can build a new UI to interact with Kastbox, you also can
automate tasks.

This sections presents you how to create an UI / Automate system and the keys concepts
of KastBox.  

### Anatomy of Kastbox<a id="anatomy"></a>

KastBox Api are divided into severals apps depending their goals, you can find
below a global description of each.

|   App Name      |      Goal                                                              |  Privileges    |
|:---------------:|------------------------------------------------------------------------|----------------|
| Camera          | Managing the camera (PTZ features / Tracking features)                 |  CAMERA_MGMT   |
| Mixer           | Change stream disposition                                              |  MIXER_MGMT    |
| Video           | Get / Update / Manage all media stored into Kastbox                    |  VIDEO_MGMT    |
| Publisher       | Get / Update / Manage all publishers (Uploading VOD / Live features  ) | PUBLISHER_MGMT |  
| Network         | Manage Network Configuration (Uploading VOD / Live features  )         | NETWORK_MGMT   |  
| Update          | Manage Update                                                          | UPDATE_MGMT    |  
| System          | Get System Information                                                 | MONITOR_MGMT   |  


### Kast Client Schema<a id="schema"></a>

![KastClientSchema](https://github.com/Kalyzee/kast-client-js/blob/master/docs/img/KastClient_Schema.png)


You can see in the above schema the simplest way to execute an action and/or receive a return or a message with **KastClient**.

To start using **KastClient** and all modules it offers, you have to instanciate `KastClient` :

    let kws = new KastClient(url)

`KastClient` connect and create a socket with the server url you mentionned and give you an access to all the features of your KastBox.

**Example :**<a id="example"></a>

    let kast = new KastClient(`url`)
    
    kast.camera.up() // Execute an action to direct your camera up
    kast.camera.down() // Execute an action to direct your camera down

    kast.video.getList() // Send a request to get the list video

    kast.video.onGetList((`list`) => {
        // you receive the video list in variable `list`
    })



# Kast Modules<a id="kastModules"></a>

## Camera <a id="camera"></a>

**This class is used to execute actions on the camera**

| Function                      | Parameter type  | Return type  | Description |
|-------------------------------|-----------------|----------------------------|-
|`zoomIn()`                     |-                |              |Execute a zoom in
|`zoomOut()`                    |-                |              |Execute a zoom out
|`zoomStop()`                   |-                |              |Stop zoom action
|`up()`                         |-                |              |Direct the camera up
|`down()`                       |-                |              |Direct the camera down
|`left()`                       |-                |              |Direct the camera to the left
|`right()`                      |-                |              |Direct the camera to the right
|`startUp()`                    |-                |              |Direct the camera up and wait the `stop()` function to stop
|`startDown()`                  |-                |              |Direct the camera down and wait the `stop()` function to stop  
|`startLeft()`                  |-                |              |Direct the camera to the left and wait the `stop()` function to stop
|`startRight()`                 |-                |              |Direct the camera to the right and wait the `stop()` function to stop
|`stop()`                       |-                |              |Stop direct actions on camera (`startUp()`, `startDown`(), `startLeft()`, `startRight()`)
|`bigUp()`                      |-                |              |Direct the camera to up with a big movement
|`bigDown()`                    |-                |              |Direct the camera to down with a big movement
|`bigLeft()`                    |-                |              |Direct the camera to the left with a big movement
|`bigRight()`                   |-                |              |Direct the camera to the right with a big movement
|`setSpeakerView()`        |-           |             |
|`goToSpeakerView()`       |-           |             |
|`setFullView()`           |-           |             |
|`goToFullView()`          |-           |             |
|`setMediumView()`         |-           |             |
|`goToMediumView()`        |-           |             |
|`setTrackingZone()`       |-           |             |
|`endSettingTrackingZone()`|-           |             |
|`startTracking()`         |-           |             |
|`stopTracking()`          |-           |             |
|`mouseUp()`               |-           |             |
|`mouseDown()`             |-           |             |
|`mousePosition()`         |-           |             |
|`createRoom()`            |-           |             |
|`deleteRoom()`            |-           |             |
|`setRoom()`               |-           |             |
|`getRoomList()`           |-           |             |
|`getCurrentRoom()`        |-           |             |

## Audio <a id="audio"></a>

| Function                 | Parameter | Description |
|--------------------------|-----------|-------------|
|`context()`               |-           |             |
|`onContext()`             |-           |             |
|`volumeUp()`              |-           |             |
|`volumeDown()`            |-           |             |
|`boostUp()`               |-           |             |
|`boostDown()`             |-           |             |
|`setSource()`             |-           |             |
|`toggleMute()`            |-           |             |

## Video <a id="video"></a>

| Function                       | Parameter type  | Return type value  | Description |
|--------------------------------|-----------------|--------------------|-------------|
|`getList()`                     |-                |             |
|`onGetList(`*callback*`)`       |Callback function|JSON         |
|`remove(`*id*`)`                |Int              |             |
|`update(`*id, title*`)`         |Int, String      |             |
|`startRecord()`                 |-                |             |
|`stopRecord()`                  |-                |             |
|`currentSession()`              |-                |Object       |
|`onCurrentSession(`*callback*`)`|Callback function|Object       |
|`setSessionTitle()`             |-                |             |
|`setSessionSpeaker()`           |-                |             |

## Background <a id="background"></a>

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`get()`               |-           |             |
|`getCurrent()`        |-           |             |
|`set(`*logo*`)`       |String      |             |
|`remove(`*logo*`)`    |String           |             |

## Context <a id="context"></a>

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`onUpdated()`         |-           |             |

## Logo <a id="logo"></a>

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`get()`               |-           |             |
|`getCurrent()`        |-           |             |
|`set()`               |-           |             |
|`remove()`            |-           |             |
|`onLogoList()`        |-           |             |
|`onCurrentLogo()`     |-           |             |
|`onSetLogo()`         |-           |             |

## Mixer <a id="mixer"></a>

| Function                      | Parameter type  | Return type value  | Description |
|-------------------------------|-----------------|--------------------|-------------|
|`switchScene(`*scene_id*`)`    |Int              |                    |             |
|`setAlphaRGB(`*r, g, b*`)   `  |Int              |                    |                
|`getAlphaRGB()`                |-                |                    |
|`onGetAlphaRGB(`*Callback*`)`  |Callback function|Array[Int, Int, Int]|
|`setAlphaAngle(`*angle*`)`     |Float            |                    |
|`getAlphaAngle()`              |-                |                    |
|`onGetAlphaAngle(`*Callback*`)`|Callback function|Float               |
|`setAlphaBW(`*black, white*`)` |Int              |                    |
|`getAlphaBW()`                 |-                |                    |
|`onGetAlphaBW(`*Callback*`)`   |Callback function|Array[Int, Int]     |             

## Network <a id="network"></a>

| Function      | Parameter  | Description |
|---------------|------------|-------------|
|`getInfo()`        |-           |             |
|`setInfo()`        |-           |             |
|`restart()`    |-           |             |
|`onUpdated()`  |-           |             |

## System <a id="system"></a>
 
| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`onLongProcess()`     |-           |             |
|`onLongProcessEnd()`  |-           |             |
|`onSuccess()`         |-           |             |
|`onError()`           |-           |             |

## Update <a id="update"></a>

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`check()`               |-           |             |
|`onCheckUpdate()`       |-           |             |
|`onUpdateAvailable()`   |-           |             |
|`onNoUpdateAvailable()` |-           |             |
|`onUpdateStart()`       |-           |             |

## Usb Management <a id="usb"></a>

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`deviceList()`        |-           |             |
|`deviceDirList()`     |-           |             |
|`copyVideo()`         |-           |             |
|`copyTemplate()`      |-           |             |
|`copyBackground()`    |-           |             |

## Context <a id="context"></a>

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`onUpdated(`*Callback*`)`        |-           |             |