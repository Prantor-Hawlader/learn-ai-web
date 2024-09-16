import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

const MyButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      className="w-full bg-gradient-to-r from-[#2f87bb] to-[#005277]"
      type="submit"
    >
      <p className=" font-bold text-md">{children}</p>
    </Button>
  );
};

export default MyButton;
