

export default function Rules(props) {
    return (
        <div className="  scale-0 transition-transform delay-50 rules  grid place-items-center gap-12 bg-slate-50  fixed   top-0 bottom-0 w-screen md:h-fit md:max-w-md md:py-4 lg:inset-0 lg:m-auto rounded-lg z-20
             ">
                <h1 className="text-[#3b4363] font-bold text-4xl pt-12 lg:absolute left-8 -top-4  ">RULES</h1>
                <img src="../images/image-rules-bonus.svg" alt="" className="lg:mt-20" />
                <img src="../images/icon-close.svg" alt="" onClick={props.handleClick} className="lg:absolute right-8 top-12 " />

            </div>
    )
}