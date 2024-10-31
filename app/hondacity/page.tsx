import Link from "next/link";
import Image from "next/image";

export default function Car() {
  return (
    <div className="flex flex-col justify-center mt-20 items-center">
      <Image
        src="/3-Honda city.png"
        
        alt="HONDA CITY" width={2000} height={400} />      
      

      <div className="flex justify-center items-center text-2xl  rounded-lg bg-gray-500 text-white py-3 px-7  mb-4"> {/* Added margin for spacing */}
        <Link href="/checkout" passHref>
          
            <b>CLICK HERE TO CHECKOUT</b>
                      
        </Link>
      </div>
    </div>
  );
}