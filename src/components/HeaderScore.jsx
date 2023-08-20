

export default function Header(props) {
    return (
        <header className="flex w-[80%] py-2 mx-auto max-w-2xl items-center border-4 border-[#606e85] mt-8
        p-4 justify-between">
            <img className="w-[100px] md:w-[130px]"  src="../images/logo-bonus.svg" alt="" />
            <div className="grid bg-white rounded-md place-items-center w-[100px] md:w-[130px] py-4 ">
                <h4 className="text-[#2a46c0] md:text-xl font-semibold">Score</h4>
                <h2 className="font-bold text-5xl md:text-[5rem] text-[#3b4363]">{props.score}</h2>
            </div>

        </header>
    )
}