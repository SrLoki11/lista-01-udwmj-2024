<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Dados</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
        }
        .result {
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Jogo de Dados</h1>
    <button onclick="playGame()">Lançar Dados</button>
    <div class="result" id="result"></div>

    <script>
        function rollDice() {
            return Math.floor(Math.random() * 16) + 1;
        }

        function playGame() {
            const player1Roll = rollDice();
            const player2Roll = rollDice();

            let resultMessage;

            if (player1Roll > player2Roll) {
                resultMessage = `Jogador 1 ganhou com ${player1Roll} contra ${player2Roll} do Jogador 2!`;
            } else if (player1Roll < player2Roll) {
                resultMessage = `Jogador 2 ganhou com ${player2Roll} contra ${player1Roll} do Jogador 1!`;
            } else {
                resultMessage = `Empate! Ambos tiraram ${player1Roll}.`;
            }

            document.getElementById('result').innerText = resultMessage;
        }
    </script>
</body>
</html>