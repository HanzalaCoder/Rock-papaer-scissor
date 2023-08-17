import Header from "./HeaderScore"


export default function MainScreen() {

    function showRule(){
        const rules = document.querySelector(".rules")
        rules.classList.toggle("hidden")
    }
    function HideRule(){
        const rules = document.querySelector(".rules")
        rules.classList.add("hidden")
    }
    
    return (
        <section className="flex flex-col items-center justify-center">
            <Header />

            <button className="text-white text-center border-white border w-[120px] py-1 shadow-2xl shadow-black rounded-lg hover:scale-110 transition-all delay-100 lg:absolute right-10 top-96" onClick={showRule}>RULES</button>

            <div className=" hidden lg:relative rules  grid place-items-center gap-12 bg-slate-50 h-[100vh] fixed   top-0 w-screen md:h-fit md:max-w-md md:py-4 lg:inset-0 lg:m-auto rounded-lg
             ">
                <h1 className="text-[#3b4363] font-bold text-4xl pt-12 lg:absolute left-8 -top-4  ">RULES</h1>
                <img src="../images/image-rules-bonus.svg" alt="" className="lg:mt-20" />
                <img src="../images/icon-close.svg" alt="" onClick={HideRule} className="lg:absolute right-8 top-12 " />

            </div>
        </section>
        
    )
}