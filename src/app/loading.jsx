import Loading from "../../public/Loading.gif"
import Image from "next/image"
export default function loading(){
    return (
        <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center h-[100vh] w-full">
            <Image src={Loading} />
            </div>
        </div>
    )
}