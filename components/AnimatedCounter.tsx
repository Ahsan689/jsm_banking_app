import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
       <CountUp className="w-full"
       duration={3}
       decimals={2}
        end={amount} 
        decimal=","
        prefix="$"
      />
    </div>
  );
};

export default AnimatedCounter;
