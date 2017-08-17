# Kast Client

This client allows you to communicate with KastBox with Websocket Mode and with
HTTP WS Mode (comming soon).

## Installation

### Using bower

```bash
  bower install kast-client
```

### Using npm

```bash
  npm install kast-client
```

## Usage

This package allows to communicate with any KastBox with Javascript if you have
registered your application into Kast Administration Panel.

With this service you can build a new UI to interact with Kastbox, you also can
automate tasks.

This sections presents you how to create an UI / Automate system and the keys concepts
of KastBox.  

### Anatomy of Kastbox

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


### Kast Client Schema

![KastClientSchema](https://github.com/Kalyzee/kast-client-js/blob/master/docs/img/KastClient_Schema.png)


You can see in the above schema the simplest way to execute an action and/or receive a return or a message with **KastClient**.

To start using **KastClient** and all modules it offers, you have to instanciate `KastClient` :

    let kws = new KastClient(url)

`KastClient` connect and create a socket with the server url you mentionned and give you an access to all the features of your KastBox.

**Example :**

    let kast = new KastClient(url)
    
    kast.camera.up() // Execute an action to direct your camera up
    kast.camera.down() // Execute an action to direct your camera down

    kast.video.getList() // Send a request to get the list video

    kast.video.onGetList((list) => {

    })



