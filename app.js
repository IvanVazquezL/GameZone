document.addEventListener('DOMContentLoaded', () =>{
	
	//Card options
	const cardArray = [
	{
		name: 'buttercup',
		img: 'images/buttercup.png'
	},
	{
		name: 'buttercup',
		img: 'images/buttercup.png'
	},
	{
		name: 'cow',
		img: 'images/cow.png'
	},
	{
		name: 'cow',
		img: 'images/cow.png'
	},
	{
		name: 'deedee',
		img: 'images/deedee.png'
	},
	{
		name: 'deedee',
		img: 'images/deedee.png'
	},
	{
		name: 'johnny',
		img: 'images/johnny.jpg'
	},
	{
		name: 'johnny',
		img: 'images/johnny.jpg'
	},
	{
		name: 'grim',
		img: 'images/grim.png'
	},
		{
		name: 'grim',
		img: 'images/grim.png'
	},
	{
		name: 'courage',
		img: 'images/courage.png'
	},
	{
		name: 'courage',
		img: 'images/courage.png'
	}
	]

cardArray.sort(()=>0.5-Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//Create the board
function createBoard(){
	for(let i=0; i<cardArray.length;i++){
		var card = document.createElement('img')
		card.setAttribute('src','images/cn.jpg')
		card.setAttribute('data-id',i)
		card.addEventListener('click',flipCard)
		grid.appendChild(card)
	}
}
//Check for match
function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]
	if(cardsChosen[0]===cardsChosen[1]){
		alert('You found a match')
		cards[optionOneId].setAttribute('src','images/white.png')
		cards[optionTwoId].setAttribute('src','images/white.png')
		cardsWon.push(cardsChosen)
	}
	else
	{
		cards[optionOneId].setAttribute('src','images/cn.jpg')
		cards[optionTwoId].setAttribute('src','images/cn.jpg')
		alert('Sorry, try again')
	}
	cardsChosen=[]
	cardsChosenId=[]
	resultDisplay.textContent = cardsWon.length
	if(cardsWon.length ===cardArray.length/2){
		resultDisplay.textContent = 'Congratulations! You found them all!'
	}
}

//Flip cards
function flipCard(){
	var cardId= this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src',cardArray[cardId].img)
	if(cardsChosen.length === 2){
		setTimeout(checkForMatch,500)
		}
	}
	
createBoard()
})