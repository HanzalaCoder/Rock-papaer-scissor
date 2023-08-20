import Header from "./HeaderScore"
import Card from "./ButtonCard"
import Rules from "./Rules"
import ShowPicks from "./ShowPicks"
import arrayData from "./ArraysData"
import { useState } from "react"




export default function MainScreen() {

    
    let iSPlayerPick = false
    let ComputerIndex = 0
    let playerPick = ""
    let playerImg = ""
    let playerColor = ""
    let computerPick = ""
    let computerImg = ""
    let computerColor = ""
    let winner = ""
    let winnerFound = false
    const [score, setScore] = useState(69)
    const [playerClicked , setPlayerClicked] = useState([
        {
            nameBox : "scissors",
            click : false

        },
        {
            nameBox : "paper",
            click : false
        },
        {    nameBox : "rock",
            click : false
        },
        {   nameBox : "lizard",
            click : false},
        {    nameBox : "spock",
            click : false}
    ])


    playerClicked.map((each,index) => {
        if (each.click) {
            iSPlayerPick = true

            playerPick = arrayData[index].name
            playerImg = arrayData[index].img
            playerColor = arrayData[index].color

            ComputerIndex = Math.floor(Math.random() * arrayData.length)

            computerImg = arrayData[ComputerIndex].img
            computerColor = arrayData[ComputerIndex].color
            computerPick = arrayData[ComputerIndex].name
        }
    })
    function makeMove(event) {
        const id = parseInt(event.target.id); // Parse the id to an integer
        setPlayerClicked(prev => {
            const updatedClicked = prev.map((item, index) => {
                return {
                    ...item,
                    click: index + 1 === id // Update the clicked status based on the id
                };
            });
    
            return updatedClicked;
        });
    }

   

    function showRule(){
        const rules = document.querySelector(".rules")
        rules.classList.toggle("scale-0")
    }
    function HideRule(){
        const rules = document.querySelector(".rules")
        rules.classList.add("scale-0")
    }

    

    const cards = arrayData.map(data => {
        return <Card key={data.id} id = {data.id} path = {data.img} color = {data.color} nameBox = {data.name} positionA = {data.positionA} positionB = {data.positionB} handleClick = {makeMove}  />
    })
    
    if (iSPlayerPick) {
        if (playerPick === computerPick) {
            winnerFound = true;
            winner = "TIE TIE";
        } else if (
            (playerPick === "rock" && (computerPick === "scissors" || computerPick === "lizard")) ||
            (playerPick === "paper" && (computerPick === "rock" || computerPick === "spock")) ||
            (playerPick === "scissors" && (computerPick === "paper" || computerPick === "lizard")) ||
            (playerPick === "lizard" && (computerPick === "paper" || computerPick === "spock")) ||
            (playerPick === "spock" && (computerPick === "rock" || computerPick === "scissors"))
        ) {
           
            winnerFound = true;
            winner = "YOU WIN";
        } else {
            winnerFound = true;
            winner = "YOU LOSE";
        }
    }
    
    function reset() {
        setPlayerClicked(prev => {
            const updatedClicked = prev.map((item, index) => {
                return {
                    ...item,
                    click: false 
                };
            });
    
            return updatedClicked;
        })
    }
   


    return (
        <section className="flex flex-col items-center  h-[120vh] ">
            <Header score = {score} />
            {!iSPlayerPick && <section className=" w-[300px]  md:w-[400px] mx-auto  mb-16 mt-16 ">
                <div className="relative">
                    <img className="inset-0 m-auto z-0 w-full"  src="../images/bg-pentagon.svg" alt="" />
                    {cards}
                </div>
            </section>}
           { iSPlayerPick && <ShowPicks playerImg = {playerImg} playerColor = {playerColor} playerChoose = {playerPick} computerImg = {computerImg} computerColor = {computerColor} computerChoose = {computerPick} />}
            { winnerFound && <div className="flex items-center flex-col gap-4">
                <h1 className="text-4xl md:text-5xl text-white font-bold" >{winner}</h1>
                <button className="bg-white font-bold w-[200px] py-2 rounded-lg text-[#3b4363]" onClick={reset}>PLAY AGAIN</button>

            </div>}
            <button className="text-white  text-center border-white border w-[120px] py-1 shadow-2xl shadow-black rounded-lg hover:scale-110 transition-all delay-100 lg:absolute right-10 top-[70%] mt-[15vh] mb-24" onClick={showRule}>RULES</button>
          
            <Rules handleClick = {HideRule} />
        </section>
    )
}