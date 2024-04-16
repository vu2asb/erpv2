import TopNavBar from "@/components/TopNavBar";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <TopNavBar />
    <div className="h-full flex items-center justify-center">
      { children }
    </div>
    </>
  )
}

export default AuthLayout;
