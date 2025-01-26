import React from "react";
import Image from "next/image";

function Greencard() {
  return (
    <div className="w-full bg-[#23856D] border">
      <div className="w-full h-auto sm:h-[500px]"> {/* Decreased height */}
        <div className="container mx-auto h-auto sm:h-[500px] py-[30px] sm:py-[50px] flex flex-col sm:flex-row gap-[30px] sm:gap-[40px]"> {/* Reduced padding and gap */}
          <div className="flex-1 flex flex-col gap-[10px] sm:pt-[40px] px-[15px] sm:px-0">
            <h4 className="font-Montserrat font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-white">
              SUMMER 2020
            </h4>
            <h1 className="font-Montserrat font-bold text-[24px] sm:text-[40px] leading-[32px] sm:leading-[60px] text-white">
              Vita Classic Product
            </h1>
            <p className="font-Montserrat font-medium text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-white">
              We know how large objects will act, We know how are objects will
              act, We know
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[15px]">
              <h3 className="font-Montserrat font-bold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-white">
                $16.48
              </h3>
              <button className="rounded-[5px] px-[25px] sm:px-[30px] bg-[#2DC071] py-[8px] sm:py-[10px]">
                <h1 className="font-Montserrat text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] text-white text-center">
                  ADD TO CART
                </h1>
              </button>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <Image
              src="/boy.png"
              alt="picman"
              width={300} 
              height={450} 
              className="w-full sm:w-auto h-auto sm:h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greencard;
