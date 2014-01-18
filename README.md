cplayer
=======

Player for crosswalk apps. Point at a URL and download index.html. Does not support cordova.

To build crosswalk canary:
Download crosswalk sdk
unzip it
find xwalk_app_template.tar.gz and untar it
cd xwalk_app_template
        
Update version code base
change arm/x86

python make_apk.py --keystore-path=rocosoft.keystore --keystore-alias=release --keystore-passcode=<fillin> --app-versionCodeBase=4 --arch=arm --package=com.rocosoft.cplayer --manifest ~/windows/Documents/xdk/cplayer/manifest.json
