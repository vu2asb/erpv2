import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <>
      <main
        className="flex h-full flex-col items-center justify-center bg-[#1E2225] text-[#F9FBFD]"
      >
        <div className="space-y-6">
          <div>
            <h1
              className={cn(
                "text-6xl font-semibold text-white drop-shadow-md",
                font.className
              )}
            >
              Home Page
            </h1>
          </div>
          <div className="flex flex-col place-items-center">
            <LoginButton>
              <Button variant="secondary">
                Sign In
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
    </>
  );
}
