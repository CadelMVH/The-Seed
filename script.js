TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "hfovMin": 37,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_t.jpg",
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
    }
   }
  ],
  "id": "panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_t.jpg",
  "label": "R0010456_20241006094651",
  "vfov": 180,
  "hfovMax": 150
 },
 {
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 56,
   "yaw": 137.56,
   "pitch": 19.87
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetHfov": 99,
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.73,
     "path": "shortest",
     "pitchSpeed": 22.4,
     "yawSpeed": 44,
     "easing": "cubic_in_out",
     "targetPitch": -2.67,
     "hfovSpeed": 44
    },
    {
     "targetHfov": 122,
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -103.36,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": 10.92,
     "hfovSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_t.jpg",
  "label": "R0010457_20241006094927",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.2,
   "pitch": 2.2
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -119.57,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "linear",
     "targetPitch": 13.35
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_t.jpg",
  "label": "R0010459_20241006095059",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 28.84,
   "pitch": -9.61
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetHfov": 137,
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -147.53,
     "path": "shortest",
     "pitchSpeed": 34.17,
     "yawSpeed": 67.65,
     "easing": "linear",
     "targetPitch": 42.13,
     "hfovSpeed": 67.65
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_t.jpg",
  "label": "R0010461_20241006095252",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.32,
   "pitch": 21.53
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 100.63,
     "path": "shortest",
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9,
     "easing": "linear",
     "targetPitch": 21
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_t.jpg",
  "label": "R0010462_20241006095408",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.84,
   "pitch": 11.86
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -124.7,
     "path": "longest",
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9,
     "easing": "linear",
     "targetPitch": 30.26
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_t.jpg",
  "label": "R0010464_20241006095642",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.87,
   "pitch": 18.43
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -133.24,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": 0.16
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FFF1834_5500_2683_41AD_C62F773B4587_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FFF1834_5500_2683_41AD_C62F773B4587",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FFF1834_5500_2683_41AD_C62F773B4587_t.jpg",
  "label": "R0010465_20241006095733",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FFF1834_5500_2683_41AD_C62F773B4587_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.41,
   "pitch": 16.21
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetHfov": 118,
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 65.77,
     "path": "longest",
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9,
     "easing": "linear",
     "targetPitch": 23.12,
     "hfovSpeed": 56.9
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_t.jpg",
  "label": "R0010466_20241006095824",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.08,
   "pitch": 4.52
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetHfov": 136,
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 50.74,
     "path": "shortest",
     "pitchSpeed": 29.89,
     "yawSpeed": 59.05,
     "easing": "cubic_in_out",
     "targetPitch": -0.02,
     "hfovSpeed": 59.05
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_t.jpg",
  "label": "R0010467_20241006095912",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159,
   "pitch": 12.39
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 105.18,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.99
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 34.66,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.3
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_t.jpg",
  "label": "R0010468_20241006095951",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.47,
   "pitch": 0.3
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -150.4,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "linear",
     "targetPitch": -3.73
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_t.jpg",
  "label": "R0010469_20241006100057",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.59,
   "pitch": -1.53
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 42.47,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "linear",
     "targetPitch": 7.52
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_t.jpg",
  "label": "R0010470_20241006100238",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.41,
   "pitch": 3.03
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.42,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -3.66
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5FF76202_5500_6A8A_41B9_069FED412558_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5FF76202_5500_6A8A_41B9_069FED412558",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5FF76202_5500_6A8A_41B9_069FED412558_t.jpg",
  "label": "R0010471_20241006100316",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5FF76202_5500_6A8A_41B9_069FED412558_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -138.15,
   "pitch": 0.33
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 49.9,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": 4.43
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_t.jpg",
  "label": "R0010472_20241006100350",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.61,
   "pitch": 4.72
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.68,
     "path": "shortest",
     "pitchSpeed": 21.33,
     "yawSpeed": 41.85,
     "easing": "linear",
     "targetPitch": 4.45
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_t.jpg",
  "label": "R0010473_20241006100438",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.36,
   "pitch": 5.43
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 40.87,
     "path": "shortest",
     "pitchSpeed": 21.33,
     "yawSpeed": 41.85,
     "easing": "linear",
     "targetPitch": 8.73
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_t.jpg",
  "label": "R0010474_20241006100508",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.33,
   "pitch": 9.33
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.56,
     "path": "shortest",
     "pitchSpeed": 19.19,
     "yawSpeed": 37.55,
     "easing": "linear",
     "targetPitch": 8.71
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_t.jpg",
  "label": "R0010475_20241006100557",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.97,
   "pitch": 8.8
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 24.94,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": 9.69
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -64.12,
     "path": "shortest",
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "easing": "cubic_in_out",
     "targetPitch": 85.37
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5E0895F8_5500_2983_41C1_11969044C4A8_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5E0895F8_5500_2983_41C1_11969044C4A8",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E0895F8_5500_2983_41C1_11969044C4A8_t.jpg",
  "label": "R0010476_20241006100633",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E0895F8_5500_2983_41C1_11969044C4A8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.23,
   "pitch": 6.39
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -142.71,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.81
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_t.jpg",
  "label": "R0010477_20241006100706",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -144.65,
   "pitch": 6.69
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 32.11,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 9.99
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_t.jpg",
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
    }
   }
  ],
  "id": "panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_t.jpg",
  "label": "R0010478_20241006100731",
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.22,
   "pitch": 25.35
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 94.39,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 60.95
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC",
    "camera": "this.panorama_585CFEB4_5507_FB83_41D1_050F2CCD0CDC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A",
    "camera": "this.panorama_5EFB557B_5501_EE84_41D1_199D4F8C5E1A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3",
    "camera": "this.panorama_5FF95C32_5501_FE87_41B8_CDBF776FD8F3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D",
    "camera": "this.panorama_5FFE0334_5501_EA8C_41BD_63B0F78FC01D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9",
    "camera": "this.panorama_5FF01A12_5500_1A87_41D3_FB7D61F4EDF9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3",
    "camera": "this.panorama_5FF0E136_5500_268C_41D4_51A44E1EF7F3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFF1834_5500_2683_41AD_C62F773B4587",
    "camera": "this.panorama_5FFF1834_5500_2683_41AD_C62F773B4587_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8",
    "camera": "this.panorama_5FE7DF2F_5500_3A9D_41CC_F732B0DA47E8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA",
    "camera": "this.panorama_5FF8C5F9_5500_2985_4179_6A6233060AAA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E",
    "camera": "this.panorama_5FFF6CF8_5500_1F84_41CC_2040C27EB37E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC",
    "camera": "this.panorama_5FFFE3DA_5500_6987_41C6_CAD1938E64CC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B",
    "camera": "this.panorama_5FF0BADD_5500_7BBD_41D1_47A546197C9B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5FF76202_5500_6A8A_41B9_069FED412558",
    "camera": "this.panorama_5FF76202_5500_6A8A_41B9_069FED412558_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794",
    "camera": "this.panorama_5E0C9931_5500_6685_41B1_8B3CD0B3B794_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217",
    "camera": "this.panorama_5E1F0077_5500_268D_41D3_A60A4BEB0217_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2",
    "camera": "this.panorama_5E29B7CC_5500_299C_41B7_B0E1101D4DF2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40",
    "camera": "this.panorama_5E0B6EDD_5500_3BBD_41D1_C84F0B2FFC40_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0895F8_5500_2983_41C1_11969044C4A8",
    "camera": "this.panorama_5E0895F8_5500_2983_41C1_11969044C4A8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763",
    "camera": "this.panorama_5E0A2D12_5500_1E84_41C9_6F93CA5C3763_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C",
    "camera": "this.panorama_5E1B941F_5500_EEBD_41C1_CF95D4FFDB6C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "data": {
   "label": "Seed to Sky"
  },
  "class": "MediaAudio",
  "id": "audio_5ABA6676_5500_2A8F_41C1_04280FF32324",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_5ABA6676_5500_2A8F_41C1_04280FF32324.mp3",
   "oggUrl": "media/audio_5ABA6676_5500_2A8F_41C1_04280FF32324.ogg"
  }
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "progressBarOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "playbackBarOpacity": 1,
  "toolTipPaddingLeft": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadShadow": true,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "shadow": false,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "paddingBottom": 0,
  "minHeight": 50,
  "progressBarBackgroundColorDirection": "vertical",
  "transitionMode": "blending",
  "toolTipFontColor": "#606060",
  "playbackBarBorderColor": "#FFFFFF",
  "paddingLeft": 0,
  "progressOpacity": 1,
  "progressBarBorderSize": 0,
  "progressRight": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "playbackBarRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeight": 10,
  "paddingTop": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "width": "100%",
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarLeft": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadHeight": 15,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressLeft": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarBottom": 5,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressHeight": 10,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "progressBarBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderSize": 0,
  "toolTipFontStyle": "normal",
  "progressBottom": 0,
  "progressBorderSize": 0,
  "transitionDuration": 500,
  "progressBorderRadius": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0
 }
], 
 "start": "this.playAudioList([this.audio_5ABA6676_5500_2A8F_41C1_04280FF32324]); this.mainPlayList.set('selectedIndex', 0)",
 "borderSize": 0,
 "overflow": "visible",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "creationPolicy": "delayed",
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } }
 },
 "paddingBottom": 0,
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "paddingRight": 0
})