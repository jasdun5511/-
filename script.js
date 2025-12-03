document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const playerChoiceSpan = document.getElementById('player-choice');
    const computerChoiceSpan = document.getElementById('computer-choice');
    const resultMessage = document.getElementById('result-message');
    const playerScoreSpan = document.getElementById('player-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const resetButton = document.getElementById('reset-btn');

    let playerScore = 0;
    let computerScore = 0;

    // 根据选择的英文名返回中文名和表情符号
    function getChoiceDisplay(choice) {
        switch (choice) {
            case 'rock': return '🪨 究极无敌的石头';
            case 'paper': return '📄 绝对领域的布';
            case 'scissors': return '✂️ 极速凌驾的剪刀';
            default: return '?';
        }
    }

    // 电脑随机选择
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // 判断胜负
    function determineWinner(player, computer) {
        if (player === computer) {
            return 'tie'; // 平局
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'player'; // 玩家赢
        } else {
            return 'computer'; // 电脑赢
        }
    }

    // 更新分数和结果信息
    function updateGame(playerChoice, computerChoice, winner) {
        playerChoiceSpan.textContent = getChoiceDisplay(playerChoice);
        computerChoiceSpan.textContent = getChoiceDisplay(computerChoice);

        if (winner === 'player') {
            playerScore++;
            resultMessage.textContent = '🎉 你赢了你真他🐴牛逼！';
            resultMessage.style.color = '#2e7d32';
        } else if (winner === 'computer') {
            computerScore++;
            resultMessage.textContent = '😢 菜就多练！';
            resultMessage.style.color = '#d32f2f';
        } else {
            resultMessage.textContent = '🤝 平局 ！';
            resultMessage.style.color = '#fbc02d';
        }

        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
    }

    // 处理玩家点击
    choiceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const playerSelection = e.target.id;
            const computerSelection = getComputerChoice();
            const winner = determineWinner(playerSelection, computerSelection);
            updateGame(playerSelection, computerSelection, winner);
        });
    });

    // 重置游戏
    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
        playerChoiceSpan.textContent = '?';
        computerChoiceSpan.textContent = '?';
        resultMessage.textContent = '点击按钮开始游戏！';
        resultMessage.style.color = '#1b5e20';
    });
});
