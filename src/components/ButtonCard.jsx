


export default function Card(props) {
    return (
        <div className={`${props.nameBox} bg-white absolute   rounded-full w-[100px] h-[100px] md:w-[130px] md:h-[130px] grid place-items-center border-[12px] ${props.color} ${props.positionA} ${props.positionB} z-10`}
        onClick={props.handleClick} id = {props.id}>
            <img className="w-[50%] md:w-[60%]" style={{ pointerEvents: 'none' }} src={props.path} alt="" />
        </div>
    )
}