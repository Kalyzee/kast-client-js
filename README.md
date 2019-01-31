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
