const computerChoice = ["Rock!", "Paper!", "Scissors!"];

let humanScore = 0;
let computerScore = 0;
let round = 1;
const emojis = {
  'Rock!': '👊',
  'Paper!': '👋',
  'Scissors!': '✌️'
};

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button) { 
  button.addEventListener('click', function() {
    if (humanScore === 5 || computerScore === 5) return;

    const humanSelection = button.textContent;
    const computerSelection = computerChoice[(Math.floor(Math.random() * 3))];
    const loserText = `Oh, you actually lost? To a computer? A machine? A soulless, unthinking, uncaring collection of ones and zeros that doesn't even know you exist? Let that sink in for a moment. You, a being of supposedly infinite cognitive potential, the so-called apex of millions of years of evolution, the crown jewel of a universe that has been expanding for 13.8 billion years just to produce you — and you couldn't outguess a random number generator. Remarkable. Truly, genuinely, historically remarkable. Do you know what a random number generator is? It doesn't think. It doesn't strategize. It doesn't lie awake at night studying your patterns, anticipating your moves, or plotting your downfall. It just picks a number. And it still beat you. It beat you without trying. It beat you without knowing. It beat you the way a revolving door beats someone who forgets to walk forward. Effortlessly. Accidentally. Completely without meaning to. I want you to think about every ancestor you've ever had. Every single one of them — going back to the primordial soup, back to the first crawling thing that dragged itself out of the ocean, back to the single-celled organism that decided, against all odds, to keep living. Every single one of those creatures survived. They fought, they adapted, they persevered through ice ages and mass extinctions and continental drift and predators with teeth the size of your entire body. They did all of that so that their genetic legacy could culminate in this moment. In you. Losing Rock Paper Scissors to a laptop. I've seen houseplants make better decisions than what you just demonstrated. I've seen a golden retriever chase its own tail with more strategic awareness than you brought to this game. A golden retriever, at least, is operating under the genuine belief that the tail is a separate entity. What's your excuse? What, exactly, was going through your head when you threw Scissors into Rock for the third time? Was there a plan? Was there a strategy? Or were you simply offering yourself up to the digital void like some kind of sacrifice? The ancient Romans used to divine the future from the flight patterns of birds. The Egyptians built monuments that have stood for thousands of years using nothing but math, labor, and sheer human will. Somewhere along the line, humanity looked at all of that accumulated wisdom, all of that ingenuity, all of that hard-won knowledge passed down through generations of brilliant minds — and it produced you, sitting here, losing to a script that was written in an afternoon. And the worst part? The absolute most devastating part of this entire catastrophe? Rock Paper Scissors is a game of pure chance. There is no skill ceiling. There is no learning curve. A toddler, a golden retriever, and a random number generator all play at exactly the same level. The odds were never stacked against you. The universe was not conspiring to make you lose. It was a coin flip with extra steps, and you still managed to end up on the wrong side of it five times before the computer even broke a sweat — if computers could sweat, which they cannot, because they are computers, and computers do not lose to humans at Rock Paper Scissors. I am not angry. I want you to know that. I am not angry, I am not disappointed — I am something far worse. I am impressed. It takes a rare and special kind of person to look a fifty-fifty shot in the face and say "no thank you, I'd prefer to lose." You have achieved something here today. Not something good. Not something worth putting on a resume or mentioning at a dinner party. But something. A monument to human fallibility. A testament to the fact that no matter how sophisticated we become as a species, no matter how many problems we solve or mountains we climb or stars we reach for, there will always, always be someone out there losing to a random number generator on a webpage. Take a moment. Breathe. Reflect. And when you're ready — and only when you're truly, genuinely ready — consider clicking that play again button. Not for me. Not for the computer, which does not care and never will. But for every ancestor who crawled, walked, stumbled, and clawed their way through history so that you could have this second chance. They deserve better.`
    console.log(`Round ${round}`)
    console.log("You chose " + humanSelection);
    console.log("The computer chose " + computerSelection);
    document.getElementById("player_move").textContent = emojis[humanSelection];
    document.getElementById("computer_move").textContent = emojis[computerSelection];
  
    const result = playRound(humanSelection, computerSelection);
    if (result === 1) humanScore++;
    if (result === 2) computerScore++;

    console.log(`You: ${humanScore} | Computer: ${computerScore}`); 
    round++;

    if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      console.log("🎉 You won the game!");
      document.getElementById("winner_message").textContent = "🎉 You won the game! 🎉";
    } else if (computerScore > humanScore) {
      console.log("💻 The computer won the game!");
      document.getElementById("winner_message").textContent = loserText;
    } else {
      console.log("🤝 The game is a tie!");
      document.getElementById("winner_message").textContent = "🤝 The game is a tie! 🤝";
    }
    document.getElementById("winner_banner").style.display = "flex";
  }
  })
});

function playRound(humanSelection, computerSelection) {
  if (
    humanSelection === 'Rock!' && computerSelection === 'Scissors!' || 
    humanSelection === 'Paper!' && computerSelection === 'Rock!' ||
    humanSelection === 'Scissors!' && computerSelection === 'Paper!') {
    document.getElementById("player_score").textContent = `Player Score: ${humanScore + 1}`;
    return 1;
  } else if (
    humanSelection === 'Rock!' && computerSelection === 'Paper!' || 
    humanSelection === 'Paper!' && computerSelection === 'Scissors!' ||
    humanSelection === 'Scissors!' && computerSelection === 'Rock!') {
    document.getElementById("computer_score").textContent = `Computer Score: ${computerScore + 1}`;
    return 2;
  } else {
    document.textContent = `You have tied this round!`;
    return 3;
  }
}