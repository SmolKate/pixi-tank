import { useEffect, useRef } from "react"
import * as PIXI from 'pixi.js'
import { pictureLoader } from "@/shared/helpers/pictureLoader"
import { Tank } from '@/shared/helpers/Tank'
import { moveTank } from "@/shared/helpers/moveTank"

const PixiTank = () => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const app = new PIXI.Application<HTMLCanvasElement>({
            width: 600,
            height: 600,
            backgroundColor: '#A9A9A9',

        })

        // globalThis.__PIXI_APP__ = app;   // для тестирования в браузере 

        ref.current?.appendChild(app.view)
        app.start()

        app.stage.position.set(600 / 2, 600 / 2);

        async function initLoading() {
      
            await PIXI.Assets.init({ manifest: pictureLoader })
            PIXI.Assets.backgroundLoadBundle(['tank'])
        }

        async function makeTankSprites() {

            const loadAssets = await PIXI.Assets.loadBundle('tank')
            const tank = new Tank(loadAssets) 

            app.stage.addChild(tank.view)
            tank.view.scale.set(0.5)

            app.stage.on('pointerdown', (e) => moveTank(e, app, tank))
            app.stage.interactive = true
            app.stage.interactiveChildren = false
            app.stage.hitArea = new PIXI.Rectangle(-300, -300, 600, 600)

        }

        async function tankAnimation () {
            await initLoading()
            await makeTankSprites()
        }

        tankAnimation()


        return () => {
            // При выгрузке компоненты приложение pixi и все объекты удаляются
            app.destroy(true, true)
          }
    }, [])

    return <div ref={ref}></div>
}

export default PixiTank