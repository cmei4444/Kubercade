// pacmanLoad is fired whenver iframe loads /games/pacman
document.addEventListener('pacmanLoad', () => {
  const iframe = document.getElementById("kubercade_iframe");
  const iframeWindow = iframe.contentWindow;
  const origGameover = iframeWindow.gameover;
  iframeWindow.gameover = () => {
    score = getPacmanScore(iframe)
    origGameover();
    // Wait for 'Game Over' to display in game
    setTimeout(() => {
        scorePopUp(score, "/scores/pacman");
      }, 500);
  }
});

document.addEventListener('tetrisLoad', () => {
  const iframe = document.getElementById('kubercade_iframe');
  iframe.addEventListener("load", () => {
    const iframeWindow = iframe.contentWindow;
    iframeWindow.document.onclick = () => {
      // Fix iframe not being focused, blocking keyboard input
      iframe.focus();
    };
    const origGameOverSignal = iframeWindow.gameOverSignal;
    iframeWindow.gameOverSignal = () => {
      origGameOverSignal();
      const score = iframeWindow.points;
      // Wait for game over screen 
      setTimeout(() => {
        scorePopUp(score, '/scores/tetris');
      }, 2500);
    }
  }, {
    once: true
  });
});

const getPacmanScore = (iframe) => {
  const scoreDiv = iframe.contentDocument.getElementById("score");
  const score = scoreDiv.getElementsByTagName("span")[0].innerText;
  return parseInt(score);
}


const scorePopUp = (score, scoreUrl) => {
  const name = prompt(`Congratulations, you scored ${score}! Please enter your name to submit your score:`, 'anonymous');
  // don't post if person cancels prompt or doesn't enter name value
  if (!name) return;
  sendScore(scoreUrl, {
    name,
    score
  }).then(() => {
    changeIframePage(scoreUrl + `?user_score=${score}`);
  });
}

const sendScore = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}