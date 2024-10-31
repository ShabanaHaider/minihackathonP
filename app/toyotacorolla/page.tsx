import Link from "next/link";
import Image from "next/image";

export default function Car() {
  return (
    <div className="flex flex-col justify-center mt-5 items-center">
      <Image
        src="/1-toyotacorolla.png"        
        alt="TOYOTA COROLLA" width={2200} height={400} />      
      

      <div className="flex justify-center items-center text-2xl rounded-lg bg-gray-500 text-white mb-4 px-7 py-3 "> {/* Added margin for spacing */}
        <Link href="/checkout" passHref>
          
            <b>CLICK HERE TO CHECKOUT</b>
                      
        </Link>
      </div>
    </div>
  );
}
