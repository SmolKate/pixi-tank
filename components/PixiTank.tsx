import { useEffect, useRef } from "react"
import * as PIXI from 'pixi.js'

const PixiTank = () => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const app = new PIXI.Application<HTMLCanvasElement>({
            width: 500,
            height: 250,
            backgroundAlpha: 0,

        })

        // globalThis.__PIXI_APP__ = app;   // для тестирования в браузере 

        ref.current?.appendChild(app.view)
        app.start()
    })

    return <div ref={ref}></div>
}

export default PixiTank