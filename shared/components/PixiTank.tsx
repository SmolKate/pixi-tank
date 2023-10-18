import { useEffect, useRef } from "react"
import * as PIXI from 'pixi.js'
import { pictureLoader } from "@/shared/helpers/pictureLoader"

const PixiTank = () => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const app = new PIXI.Application<HTMLCanvasElement>({
            width: 600,
            height: 600,
            backgroundColor: '#A9A9A9',

        })

        globalThis.__PIXI_APP__ = app;   // для тестирования в браузере 

        ref.current?.appendChild(app.view)
        app.start()

        // Создание контейнера и добавление на сцену
        const container = new PIXI.Container()
        app.stage.addChild(container as PIXI.DisplayObject)


        async function initLoading() {
      
            await PIXI.Assets.init({ manifest: pictureLoader })
            PIXI.Assets.backgroundLoadBundle(['tank'])
        }

        async function makeTankSprites() {

            const loadFieldAssets = await PIXI.Assets.loadBundle('tank')
            const trackСFrame1 = new PIXI.Sprite(loadFieldAssets.trackСFrame1)
            trackСFrame1.anchor.set(0.5)
            trackСFrame1.width = 80
            trackСFrame1.height = 80
            container.addChild(trackСFrame1 as PIXI.DisplayObject)
        }

        async function tankAnimation () {
            await initLoading()
            await makeTankSprites()
        }

        tankAnimation()

        container.x = app.screen.width / 2
        container.y = app.screen.height / 2

        return () => {
            // При выгрузке компоненты приложение pixi и все объекты удаляются
            app.destroy(true, true)
          }
    }, [])

    return <div ref={ref}></div>
}

export default PixiTank