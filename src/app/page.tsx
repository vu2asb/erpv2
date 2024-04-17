import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import TopNavBar from "@/components/NavBar";


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main
        className="container flex h-full flex-col items-center justify-center"
      >
        <div className="space-y-6">
          <div>
            <h1
              className={cn(
                "text-6xl font-semibol",
                font.className
              )}
            >
              Home Page
            </h1>
          </div>
          <div className="flex flex-col place-items-center">
            <LoginButton>
              <Button size="default">
                Sign In
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
    </>
  );
}
