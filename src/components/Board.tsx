import './Board.css'
import Square from './Square'

export default function Board() {
    return (
        <>
            <div>
                <Square valor="X" />
                <Square valor="X" />
                <Square valor="X" />
            </div>
            <div>
                <Square valor="X" />
                <Square valor="X" />
                <Square valor="X" />
            </div>
            <div>
                <Square valor="X" />
                <Square valor="X" />
                <Square valor="X" />
            </div>
        </>
    )
}