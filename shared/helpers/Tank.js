import * as PIXI from 'pixi.js'

export const createAnimatedSprite = (textureArray, position = {x: 0, y: 0}, anchor = {x: 0.5, y: 0.5}) => {
    const animatedSprite = new PIXI.AnimatedSprite(textureArray)
    animatedSprite.anchor.copyFrom(anchor)
    animatedSprite.position.copyFrom(position)
    return animatedSprite
}

export const createSprite = (textureName, position = {x: 0, y: 0}, anchor = {x: 0.5, y: 0.5}) => {
    const sprite = new PIXI.Sprite(textureName)
    sprite.anchor.copyFrom(anchor)
    sprite.position.copyFrom(position)
    return sprite
}
export class Tank extends PIXI.DisplayObject{
    
    constructor(loadAssets) {
        super()
        this._view = new PIXI.Container()
        this._tracksLeft = createAnimatedSprite([loadAssets.trackСFrame1, loadAssets.trackСFrame2], {x: 0, y: -80})
        this._tracksRight = createAnimatedSprite([loadAssets.trackСFrame1, loadAssets.trackСFrame2], {x: 0, y: 80})

        this._tracksLeft.animationSpeed = 0.20
        this._tracksRight.animationSpeed = 0.20

        this._view.addChild(this._tracksLeft, this._tracksRight)

        this._view.addChild(createSprite(loadAssets.heavyHull))
        this._view.addChild(createSprite(loadAssets.heavyGun, {x: 140, y: -27}))
        this._view.addChild(createSprite(loadAssets.heavyGun, {x: 160, y: 29}))
        this._view.addChild(createSprite(loadAssets.gunConnector, {x: 80, y: 0}))
        this._view.addChild(createSprite(loadAssets.heavyTower))


    }

    get view() {
        return this._view
    }
}