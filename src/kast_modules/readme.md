# Camera

**This class is used to execute actions on the camera**

| Function                      | Parameter type  | Return type value  | Description |
|-------------------------------|-----------------|--------------------|-------------|
|`zoomIn()`                     |-                |             |
|`zoomOut()`                    |-                |             |
|`zoomStop()`                   |-                |             |
|`up()`                         |-                |             |
|`down()`                       |-                |             |
|`left()`                       |-                |             |
|`right()`                      |-                |             |
|`startUp()`                    |-                |             |
|`startDown()`                  |-           |             |
|`startLeft()`                  |-           |             |
|`startRight()`                 |-           |             |
|`stop()`                       |-           |             |
|`bigUp()`                      |-           |             |
|`bigDown()`                    |-           |             |
|`bigLeft()`                    |-           |             |
|`bigRight()`                   |-           |             |
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
|`set()`               |-           |             |
|`remove()`            |-           |             |

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