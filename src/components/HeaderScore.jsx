

export default function Header() {
    return (
        <header className="flex w-[80%] mx-auto max-w-2xl items-center my-12 border-4 border-[#606e85]
        p-4 justify-between">
            <img className="w-[100px] md:w-[150px]"  src="../images/logo-bonus.svg" alt="" />
            <div className="grid bg-white rounded-md place-items-center w-[100px] md:w-[150px] py-4 md:py-8">
                <h4 className="text-[#2a46c0] md:text-xl font-semibold">Score</h4>
                <h2 className="font-bold text-5xl md:text-[5rem] text-[#3b4363]">12</h2>
            </div>

        </header>
    )
}