"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


    return (
        <main className="flex flex-col w-full">
            <h1 className="text-2xl w-full font-bold">Shopping List App</h1>
            {!user ? (
                <p onClick={gitHubSignIn} className="w-max hover:cursor-pointer">Sign in with GitHub</p>
            ) : (
                <div>
                    <p>Welcome, {user.displayName} ({user.email}).</p>
                    <p onClick={firebaseSignOut}
                    className="hover:underline">Sign Out</p>
                    <Link href="/week-10/shopping-list" className="hover:underline">
                        Continue to your Shopping List
                    </Link>
                </div>
            )}
        </main>
    )
}