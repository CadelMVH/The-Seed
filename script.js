TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_t.jpg",
  "vfov": 180,
  "id": "panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_t.jpg"
   }
  ],
  "partial": false,
  "pitch": 0,
  "hfovMax": 150,
  "label": "1",
  "hfovMin": 37
 },
 {
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "gyroscopeEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.73,
     "path": "shortest",
     "hfovSpeed": 44,
     "yawSpeed": 44,
     "targetHfov": 99,
     "easing": "cubic_in_out",
     "targetPitch": -2.67,
     "pitchSpeed": 22.4
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -103.36,
     "path": "shortest",
     "hfovSpeed": 33.25,
     "yawSpeed": 33.25,
     "targetHfov": 122,
     "easing": "linear",
     "targetPitch": 10.92,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_camera",
  "initialPosition": {
   "hfov": 56,
   "class": "PanoramaCameraPosition",
   "yaw": 137.56,
   "pitch": 19.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_t.jpg",
  "partial": false,
  "id": "panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "2",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -119.57,
     "path": "shortest",
     "yawSpeed": 50.45,
     "easing": "linear",
     "targetPitch": 13.35,
     "pitchSpeed": 25.61
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.2,
   "pitch": 2.2
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_t.jpg",
  "partial": false,
  "id": "panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "3",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -147.53,
     "path": "shortest",
     "hfovSpeed": 59.05,
     "yawSpeed": 59.05,
     "targetHfov": 137,
     "easing": "linear",
     "targetPitch": 42.13,
     "pitchSpeed": 29.89
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 28.84,
   "pitch": -9.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_t.jpg",
  "partial": false,
  "id": "panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "4",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 100.63,
     "path": "shortest",
     "yawSpeed": 52.6,
     "easing": "linear",
     "targetPitch": 21,
     "pitchSpeed": 26.68
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.32,
   "pitch": 21.53
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_t.jpg",
  "partial": false,
  "id": "panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "5",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -124.7,
     "path": "longest",
     "yawSpeed": 52.6,
     "easing": "linear",
     "targetPitch": 30.37,
     "pitchSpeed": 26.68
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.84,
   "pitch": 11.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_t.jpg",
  "partial": false,
  "id": "panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "6",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -133.25,
     "path": "shortest",
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": 0.16,
     "pitchSpeed": 25.61
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.87,
   "pitch": 18.43
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FFF1834_5500_2683_41AD_C62F773B4587_t.jpg",
  "partial": false,
  "id": "panorama_5FFF1834_5500_2683_41AD_C62F773B4587",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FFF1834_5500_2683_41AD_C62F773B4587_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FFF1834_5500_2683_41AD_C62F773B4587.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FFF1834_5500_2683_41AD_C62F773B4587_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "7",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 65.77,
     "path": "longest",
     "hfovSpeed": 56.9,
     "yawSpeed": 56.9,
     "targetHfov": 118,
     "easing": "linear",
     "targetPitch": 23.12,
     "pitchSpeed": 28.82
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FFF1834_5500_2683_41AD_C62F773B4587_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.41,
   "pitch": 16.21
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PhotoAlbum",
  "label": "21",
  "thumbnailUrl": "media/album_47D2A93B_5503_E685_41D1_D8D2414E1F31_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_47D2A93B_5503_E685_41D1_D8D2414E1F31_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "duration": 10000,
      "scaleMode": "fit_inside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.28",
       "y": "0.31",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_47D2A93B_5503_E685_41D1_D8D2414E1F31_0.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "Comunity Room",
      "thumbnailUrl": "media/album_47D2A93B_5503_E685_41D1_D8D2414E1F31_0_t.jpg",
      "duration": 10000,
      "width": 1809,
      "id": "album_47D2A93B_5503_E685_41D1_D8D2414E1F31_0",
      "height": 1211
     }
    }
   ]
  },
  "id": "album_47D2A93B_5503_E685_41D1_D8D2414E1F31"
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer"
 },
 "this.album_47D2A93B_5503_E685_41D1_D8D2414E1F31_0",
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_t.jpg",
  "partial": false,
  "id": "panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "8",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 50.74,
     "path": "shortest",
     "hfovSpeed": 59.05,
     "yawSpeed": 59.05,
     "targetHfov": 136,
     "easing": "cubic_in_out",
     "targetPitch": -0.02,
     "pitchSpeed": 29.89
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.08,
   "pitch": 4.52
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_t.jpg",
  "partial": false,
  "id": "panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "9",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 105.18,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.99,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 34.66,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.3,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159,
   "pitch": 12.39
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_t.jpg",
  "partial": false,
  "id": "panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "10",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -150.4,
     "path": "shortest",
     "yawSpeed": 50.45,
     "easing": "linear",
     "targetPitch": -3.73,
     "pitchSpeed": 25.61
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.47,
   "pitch": 0.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_t.jpg",
  "partial": false,
  "id": "panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "11",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 42.47,
     "path": "shortest",
     "yawSpeed": 50.45,
     "easing": "linear",
     "targetPitch": 7.52,
     "pitchSpeed": 25.61
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.59,
   "pitch": -1.53
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_t.jpg",
  "partial": false,
  "id": "panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "12",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.42,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -3.66,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.41,
   "pitch": 3.03
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FF76202_5500_6A8A_41B9_069FED412558_t.jpg",
  "partial": false,
  "id": "panorama_5FF76202_5500_6A8A_41B9_069FED412558",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5FF76202_5500_6A8A_41B9_069FED412558_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5FF76202_5500_6A8A_41B9_069FED412558.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5FF76202_5500_6A8A_41B9_069FED412558_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "13",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 49.9,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": 4.43,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5FF76202_5500_6A8A_41B9_069FED412558_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -138.15,
   "pitch": 0.33
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_t.jpg",
  "partial": false,
  "id": "panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "14",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.68,
     "path": "shortest",
     "yawSpeed": 41.85,
     "easing": "linear",
     "targetPitch": 4.45,
     "pitchSpeed": 21.33
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.61,
   "pitch": 4.72
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_t.jpg",
  "partial": false,
  "id": "panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "15",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 39.49,
     "path": "shortest",
     "yawSpeed": 41.85,
     "easing": "linear",
     "targetPitch": 2.14,
     "pitchSpeed": 21.33
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140,
   "pitch": 0.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_t.jpg",
  "partial": false,
  "id": "panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "16",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.07,
     "path": "shortest",
     "yawSpeed": 37.55,
     "easing": "linear",
     "targetPitch": -1.68,
     "pitchSpeed": 19.19
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 37.23,
   "pitch": -1.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_t.jpg",
  "partial": false,
  "id": "panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "17",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -138.93,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -3.93,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.04,
   "pitch": -5.17
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5E0895F8_5500_2983_41C1_11969044C4A8_t.jpg",
  "partial": false,
  "id": "panorama_5E0895F8_5500_2983_41C1_11969044C4A8",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5E0895F8_5500_2983_41C1_11969044C4A8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E0895F8_5500_2983_41C1_11969044C4A8.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5E0895F8_5500_2983_41C1_11969044C4A8_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "18",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -155.04,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.17,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5E0895F8_5500_2983_41C1_11969044C4A8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -132.22,
   "pitch": -3.53
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_t.jpg",
  "partial": false,
  "id": "panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "19",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 32.11,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 9.99,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -144.65,
   "pitch": 6.69
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_t.jpg",
  "partial": false,
  "id": "panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_t.jpg"
   }
  ],
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "20",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 94.39,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 60.95,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.22,
   "pitch": 25.35
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "scaleMode": "fit_inside",
  "label": "22",
  "thumbnailUrl": "media/video_5A2EE702_56D7_5B9B_41B7_B0643009DC95_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_5A2EE702_56D7_5B9B_41B7_B0643009DC95.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_5A2EE702_56D7_5B9B_41B7_B0643009DC95",
  "loop": false,
  "height": 1080
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFF1834_5500_2683_41AD_C62F773B4587",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_5FFF1834_5500_2683_41AD_C62F773B4587_camera"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_47D2A93B_5503_E685_41D1_D8D2414E1F31",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF76202_5500_6A8A_41B9_069FED412558",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_5FF76202_5500_6A8A_41B9_069FED412558_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0895F8_5500_2983_41C1_11969044C4A8",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_5E0895F8_5500_2983_41C1_11969044C4A8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_camera"
   },
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 0)",
    "media": "this.video_5A2EE702_56D7_5B9B_41B7_B0643009DC95",
    "player": "this.MainViewerVideoPlayer",
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 21, '#000000')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 0, 1)",
    "camera": "this.panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 1, 2)",
    "camera": "this.panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 2, 3)",
    "camera": "this.panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 3, 4)",
    "camera": "this.panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 4, 5)",
    "camera": "this.panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 5, 6)",
    "camera": "this.panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFF1834_5500_2683_41AD_C62F773B4587",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 6, 7)",
    "camera": "this.panorama_5FFF1834_5500_2683_41AD_C62F773B4587_camera"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_47D2A93B_5503_E685_41D1_D8D2414E1F31",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 8, 9)",
    "camera": "this.panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 9, 10)",
    "camera": "this.panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 10, 11)",
    "camera": "this.panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 11, 12)",
    "camera": "this.panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 12, 13)",
    "camera": "this.panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF76202_5500_6A8A_41B9_069FED412558",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 13, 14)",
    "camera": "this.panorama_5FF76202_5500_6A8A_41B9_069FED412558_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 14, 15)",
    "camera": "this.panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 15, 16)",
    "camera": "this.panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 16, 17)",
    "camera": "this.panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 17, 18)",
    "camera": "this.panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0895F8_5500_2983_41C1_11969044C4A8",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 18, 19)",
    "camera": "this.panorama_5E0895F8_5500_2983_41C1_11969044C4A8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 19, 20)",
    "camera": "this.panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 20, 21)",
    "camera": "this.panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_camera"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5A2EE702_56D7_5B9B_41B7_B0643009DC95",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 21, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist, 21, '#000000')"
   }
  ]
 },
 {
  "class": "MediaAudio",
  "id": "audio_5ABA6676_5500_2A8F_41C1_04280FF32324",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_5ABA6676_5500_2A8F_41C1_04280FF32324.mp3",
   "oggUrl": "media/audio_5ABA6676_5500_2A8F_41C1_04280FF32324.ogg"
  },
  "data": {
   "label": "Seed to Sky"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontStyle": "normal",
  "toolTipDisplayTime": 600,
  "progressBorderSize": 0,
  "playbackBarBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBorderRadius": 0,
  "progressHeight": 10,
  "paddingBottom": 0,
  "progressBarOpacity": 1,
  "shadow": false,
  "transitionMode": "blending",
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionDuration": 500,
  "playbackBarOpacity": 1,
  "progressBottom": 0,
  "toolTipBorderRadius": 3,
  "toolTipBorderColor": "#767676",
  "progressBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "minHeight": 50,
  "progressBarBorderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "playbackBarHeadShadow": true,
  "paddingTop": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "paddingLeft": 0,
  "progressOpacity": 1,
  "playbackBarRight": 0,
  "toolTipPaddingTop": 4,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressRight": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadWidth": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeight": 10,
  "playbackBarHeadHeight": 15,
  "width": "100%",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "height": "100%",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontSize": 12,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "minWidth": 100,
  "playbackBarBorderSize": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "borderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowBlurRadius": 3,
  "id": "MainViewer",
  "progressBorderColor": "#000000",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBottom": 5,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "borderSize": 0,
  "progressBorderRadius": 0,
  "toolTipPaddingLeft": 6
 },
 {
  "class": "ThumbnailList",
  "itemBackgroundColorDirection": "vertical",
  "horizontalAlign": "left",
  "itemLabelFontFamily": "Arial",
  "itemLabelGap": 0,
  "itemPaddingRight": 3,
  "selectedItemLabelFontWeight": "bold",
  "selectedItemLabelFontColor": "#FFCC00",
  "width": 207.75,
  "itemPaddingTop": 3,
  "scrollBarWidth": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailShadowColor": "#000000",
  "height": "82.704%",
  "itemThumbnailShadowHorizontalLength": 3,
  "layout": "vertical",
  "scrollBarMargin": 2,
  "itemThumbnailShadowOpacity": 0.54,
  "rollOverItemBackgroundOpacity": 0,
  "itemMode": "normal",
  "playList": "this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist",
  "paddingBottom": 0,
  "itemOpacity": 1,
  "shadow": false,
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "top": "0%",
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadow": true,
  "borderSize": 0,
  "itemVerticalAlign": "middle",
  "itemThumbnailHeight": 99,
  "itemLabelFontStyle": "normal",
  "itemBackgroundColor": [],
  "itemThumbnailOpacity": 1,
  "paddingRight": 20,
  "borderRadius": 5,
  "id": "ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B",
  "itemThumbnailWidth": 154,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "minHeight": 20,
  "itemThumbnailShadowSpread": 1,
  "itemLabelHorizontalAlign": "center",
  "scrollBarVisible": "rollOver",
  "itemBorderRadius": 0,
  "itemLabelFontSize": 14,
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingLeft": 3,
  "backgroundOpacity": 0,
  "itemLabelFontWeight": "normal",
  "itemBackgroundColorRatios": [],
  "data": {
   "name": "ThumbnailList35762"
  },
  "paddingTop": 0,
  "itemPaddingBottom": 3,
  "itemBackgroundOpacity": 0,
  "gap": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "itemThumbnailShadowBlurRadius": 8,
  "paddingLeft": 20,
  "itemLabelPosition": "right",
  "right": "0.3%",
  "rollOverItemLabelFontWeight": "normal",
  "itemThumbnailBorderRadius": 57,
  "scrollBarColor": "#FFFFFF"
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "width": "10.226%",
  "height": "16.065%",
  "maxHeight": 1095,
  "url": "skin/Image_40DCAA4A_5500_3A84_41B2_52E4C763E3DB.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "click": "this.openLink(\"https://www.theseedpnw.com/\", \"_blank\")",
  "minWidth": 1,
  "cursor": "hand",
  "maxWidth": 1095,
  "borderRadius": 0,
  "id": "Image_40DCAA4A_5500_3A84_41B2_52E4C763E3DB",
  "data": {
   "name": "The Seed Logo "
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "bottom": "0.08%",
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "right": "0.01%"
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "width": "25.746%",
  "height": "21.305%",
  "maxHeight": 736,
  "url": "skin/Image_49D1F0CF_5507_E79D_41C3_7CE5BEBEC490.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "click": "this.openLink(\"https://skfb.ly/pxUEB\", \"_blank\")",
  "minWidth": 1,
  "cursor": "hand",
  "maxWidth": 1630,
  "borderRadius": 0,
  "id": "Image_49D1F0CF_5507_E79D_41C3_7CE5BEBEC490",
  "data": {
   "name": "Image13511"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "bottom": "0%",
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": "0%",
  "paddingRight": 0,
  "paddingLeft": 0
 },
 {
  "class": "HTMLText",
  "backgroundColor": [
   "#000000"
  ],
  "shadowSpread": 1,
  "width": "25.877%",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "height": "7.783%",
  "scrollBarMargin": 2,
  "paddingBottom": 20,
  "shadow": true,
  "shadowBlurRadius": 7,
  "shadowOpacity": 0.45,
  "minWidth": 1,
  "bottom": "0%",
  "borderRadius": 0,
  "id": "HTMLText_4E7B983A_5500_2687_41C0_B13F983D4104",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://skfb.ly/pxUEB\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B><U>Click Here For 3D Map!</U></B></SPAN></A></SPAN></SPAN></DIV></div>",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "HTMLText53815"
  },
  "paddingRight": 20,
  "shadowColor": "#000000",
  "backgroundColorDirection": "vertical",
  "paddingTop": 20,
  "backgroundOpacity": 0.81,
  "left": "0.02%",
  "shadowHorizontalLength": 0,
  "paddingLeft": 20,
  "scrollBarColor": "#000000",
  "backgroundColorRatios": [
   0
  ],
  "shadowVerticalLength": 3
 }
], 
 "start": "this.playAudioList([this.audio_5ABA6676_5500_2A8F_41C1_04280FF32324]); this.syncPlaylists([this.ThumbnailList_467FF367_5500_2A8C_41C4_EC38A3CD2A1B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "width": "100%",
 "height": "100%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "visible",
 "minWidth": 20,
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "borderRadius": 0,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Player463"
 },
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingRight": 0,
 "backgroundPreloadEnabled": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "creationPolicy": "delayed",
 "gap": 10
})