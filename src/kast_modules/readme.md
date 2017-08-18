# Camera

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

# Audio

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

# Video

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

# Background

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`get()`               |-           |             |
|`getCurrent()`        |-           |             |
|`set(`*logo*`)`       |String      |             |
|`remove(`*logo*`)`    |String           |             |

# Context

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`onUpdated()`         |-           |             |

# Logo

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`get()`               |-           |             |
|`getCurrent()`        |-           |             |
|`set()`               |-           |             |
|`remove()`            |-           |             |
|`onLogoList()`        |-           |             |
|`onCurrentLogo()`     |-           |             |
|`onSetLogo()`         |-           |             |

# Mixer

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

# Network

| Function      | Parameter  | Description |
|---------------|------------|-------------|
|`getInfo()`        |-           |             |
|`setInfo()`        |-           |             |
|`restart()`    |-           |             |
|`onUpdated()`  |-           |             |

# System

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`onLongProcess()`     |-           |             |
|`onLongProcessEnd()`  |-           |             |
|`onSuccess()`         |-           |             |
|`onError()`           |-           |             |

# Update

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`check()`               |-           |             |
|`onCheckUpdate()`       |-           |             |
|`onUpdateAvailable()`   |-           |             |
|`onNoUpdateAvailable()` |-           |             |
|`onUpdateStart()`       |-           |             |

# Usb Management

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`deviceList()`        |-           |             |
|`deviceDirList()`     |-           |             |
|`copyVideo()`         |-           |             |
|`copyTemplate()`      |-           |             |
|`copyBackground()`    |-           |             |

# Context

| Function             | Parameter  | Description |
|----------------------|------------|-------------|
|`onUpdated(`*Callback*`)`        |-           |             |