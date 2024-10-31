import Link from "next/link";
import Image from "next/image";

export default function Car() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/2cultus.png"
        alt="CULTUS" width={2000} height={400} />      
      

      <div className="flex justify-center items-center text-2xl pt-10 rounded-lg bg-gray-500 text-white py-3 px-7  mb-4"> 
        
        <Link href="/checkout" passHref>
          
            <b>CLICK HERE TO CHECKOUT</b>
                      
        </Link>
      </div>
    </div>
  );
}
