# Camera

**This class is used to execute actions on the camera**

| Function                 | Parameter  | Description |
|--------------------------|------------|-------------|
|`zoomIn()`                |-           |             |
|`zoomOut()`               |-           |             |
|`zoomStop()`              |-           |             |
|`up()`                    |-           |             |
|`down()`                  |-           |             |
|`left()`                  |-           |             |
|`right()`                 |-           |             |
|`startUp()`               |-           |             |
|`startDown()`             |-           |             |
|`startLeft()`             |-           |             |
|`startRight()`            |-           |             |
|`stop()`                  |-           |             |
|`bigUp()`                 |-           |             |
|`bigDown()`               |-           |             |
|`bigLeft()`               |-           |             |
|`bigRight()`              |-           |             |
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

| Function              | Parameter  | Description |
|-----------------------|------------|-------------|
|`List()`               |-           |             |
|`onList()`             |-           |             |
|`remove()`             |-           |             |
|`update()`             |-           |             |
|`startRecord()`        |-           |             |
|`stopRecord()`         |-           |             |
|`currentSession()`     |-           |             |
|`setSessionTitle()`    |-           |             |
|`setSessionSpeaker()`  |-           |             |

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
|`onGetAlphaRGB(`*Callback*`)`  |Callback         |Array[Int, Int, Int]|
|`setAlphaAngle(`*angle*`)`     |Float            |                    |
|`getAlphaAngle()`              |-                |                    |
|`onGetAlphaAngle(`*Callback*`)`|-                |Float               |
|`setAlphaBW(`*black, white*`)` |Int              |                    |
|`getAlphaBW()`                 |-                |                    |
|`onGetAlphaBW(`*Callback*`)`   |                 |Array[Int, Int]     |             

# Network

| Function      | Parameter  | Description |
|---------------|------------|-------------|
|`get()`        |-           |             |
|`set()`        |-           |             |
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