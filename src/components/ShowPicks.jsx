


export default function ShowPicks(props) {
    let humanPlayer = props.playerChoose
    let ComputerPlayer = props.computerChoose
    let winner = ""

    return (
        <section className="  w-[400px]   md:w-[700px] mx-auto   mt-24  mb-4 md:mb-0 flex justify-between">
            <div className="flex flex-col items-center gap-6 md:gap-10">
                <div  className={` bg-white rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] grid place-items-center border-[16px] ${props.playerColor} z-10`}>
                <img className="w-[50%]" src={props.playerImg} alt="" />
                
                </div>
                <h1 className="text-white font-bold">YOU PICKED</h1>
            </div>

            <div className="flex flex-col items-center gap-6 md:gap-10">
                <div className={` bg-white    rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] grid place-items-center border-[16px] ${props.computerColor} z-10`}> 
                <img className="w-[50%]" src={props.computerImg} alt="" />
                </div>
                <h1 className="text-white font-bold ">THE HOUSE PICKED</h1>
            </div>

        
            

        </section>
    )
}