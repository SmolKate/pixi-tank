import { Tank } from '@/shared/helpers/Tank';
import * as PIXI from 'pixi.js'
import { gsap } from 'gsap'

export const moveTank = (e: PIXI.FederatedPointerEvent, app: PIXI.Application<HTMLCanvasElement>, tank: Tank) => {
            
    const distanceToCenter = e.getLocalPosition(app.stage)
    const distanceToTank = e.getLocalPosition(tank.view)
    const angle = Math.atan2(distanceToTank.y, distanceToTank.x);

    let tlTankTower = gsap.timeline()
    let tlTankBody = gsap.timeline()
    let tlTankMovement = gsap.timeline()

    const tankDirection = tlTankMovement.to(tank.view, {x: distanceToCenter.x, y: distanceToCenter.y, duration: 2})
    const towerRotation = tlTankTower.to(tank.tower, {rotation : angle, duration: 1})
    const bodyRotation = tlTankBody.to(tank.body, {rotation : angle, duration: 2})
    
    const tankMove = () => {
        tankDirection.play()
    }

    tank.startTracks()
    towerRotation.play()
    bodyRotation.play().then(() => {
        tankMove()
    })

    app.ticker.add((delta) => {
        if (tank.view.position.x == distanceToCenter.x && tank.view.position.y == distanceToCenter.y) {
            tank.stopTracks()
        } else {
            tank.startTracks()
        }
    })
}