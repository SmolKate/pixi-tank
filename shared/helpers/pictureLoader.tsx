import GunConnectorImg from "@/assets/parts/gun_connectors/GunConnectorD.png"
import HeavyGunImg from "@/assets/parts/guns/HeavyGunB.png"
import HeavyHullImg from "@/assets/parts/hulls/HeavyHullB.png"
import HeavyTowerImg from "@/assets/parts/towers/HeavyTowerB.png"
import TrackСFrame1Img from "@/assets/parts/tracks/TrackСFrame1.png"
import TrackСFrame2Img from "@/assets/parts/tracks/TrackСFrame2.png"
import MediumShellImg from "@/assets/parts/bullets/MediumShell.png"

export const pictureLoader = {
    bundles: [
      {
        name: 'tank',
        assets: [
          { name: 'gunConnector', srcs: GunConnectorImg, },
          { name: 'heavyGun', srcs: HeavyGunImg, },
          { name: 'heavyHull', srcs: HeavyHullImg, },
          { name: 'heavyTower', srcs: HeavyTowerImg, },
          { name: 'trackСFrame1', srcs: TrackСFrame1Img, },
          { name: 'trackСFrame2', srcs: TrackСFrame2Img, },
          { name: 'mediumShell', srcs: MediumShellImg, },

        ],
      },
    ],
  }