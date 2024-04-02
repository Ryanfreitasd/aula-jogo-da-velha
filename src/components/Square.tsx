import './Square.css'

function clicarBotao() {
    alert('Clicou no botão');
}

export default function Square(
    { valor }: { valor: string }
) {

    return <button className="square" onClick={clicarBotao}>
        {valor}
    </button>
}