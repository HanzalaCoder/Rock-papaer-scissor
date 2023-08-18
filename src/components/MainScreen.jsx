import Header from "./HeaderScore"
import Card from "./ButtonCard"
import Rules from "./Rules"
import { useState } from "react"



export default function MainScreen() {
    const arrayData = [
        {
           id : 1, 
           img : "../images/icon-scissors.svg",
           color : "border-[#ec9e0e]",
           name : "scissors",
           positionA : "-top-[10%]",
           positionB : "left-[35%]"
           
        },
        {
            id : 2, 
            img : "../images/icon-paper.svg",
            color : "border-[#4865f4]",
            name: "paper" ,
            positionA : "top-[30%]",
            positionB : "-right-[10%]"     
        },
        {
            id : 3, 
            img : "../images/icon-rock.svg",
            color: "border-[#dc2e4e]",
            paper : "rock",
            positionA : "-bottom-[10%]",
            positionB : "right-[10%]"  
            
         },
        
        {
           id : 4, 
           img : "../images/icon-lizard.svg",
           color : "border-[#834fe3]",
           name : "lizard",
           positionA : "-bottom-[10%]",
           positionB : "right-[70%]"  
           
        },
        {
            id : 5, 
            img : "../images/icon-spock.svg",
            color:"border-[#40b9ce]",
            name : "spock",
            positionA : "top-[30%]",
            positionB : "-left-[10%]"  
            
         }
         
       
    ]
    let playerPick = 0
    let ComputerPick = 0

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
            playerPick = index + 1
        }
    })


    console.log(playerClicked)


    
   
    function makeMove(event) {
        const id = parseInt(event.target.id); // Parse the id to an integer
        console.log(id);
    
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
    
    return (
        <section className="flex flex-col items-center  h-screen">
            <Header />
            <section className=" w-[300px]  md:w-[400px] mx-auto  mb-16 mt-16 ">
                <div className="relative">
                    <img className="inset-0 m-auto z-0 w-full"  src="../images/bg-pentagon.svg" alt="" />
                    {cards}
                </div>
            </section>
            <button className="text-white text-center border-white border w-[120px] py-1 shadow-2xl shadow-black rounded-lg hover:scale-110 transition-all delay-100 lg:absolute right-10 top-[80%] mt-[3vh]" onClick={showRule}>RULES</button>
            <Rules handleClick = {HideRule} />
        </section>
    )
}