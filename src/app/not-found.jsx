import Link from "next/link"
export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            
            <h1 className="text-[200px]  text-[#126C46] font-roboto">404</h1>
            <p className="text-[65px] font-roboto text-[#126C46]">Page Not Found</p>
            <Link rel="stylesheet" href="/" className="text-[42px]">
                Back To Home!
            </Link>
            </main>
    )
}