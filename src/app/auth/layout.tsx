import NavBar from "@/components/NavBar";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <NavBar />
    <div className="h-full flex items-center justify-center">
      { children }
    </div>
    </>
  )
}

export default AuthLayout;
