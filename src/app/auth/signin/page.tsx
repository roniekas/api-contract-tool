"use client";

import { Styled as C } from "./signin.style";
import { signIn } from "next-auth/react";
import { FaSquareGithub } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const router = useRouter();

    function redirectToHome() {
        return router.replace("/");
    }

    return (
        <C.GradientBox>
            <C.WhiteBox custompadding="5vw">
                <C.SignInTitle>Sign In or Register Here</C.SignInTitle>
                <C.SignInMethodWrapper>
                    <C.RowFiller>
                        <C.SignInButton>
                            <AiFillGoogleCircle onClick={() => signIn("google")} size={50} />
                        </C.SignInButton>
                        <C.SignInButton>
                            <FaSquareGithub onClick={() => signIn("github")} size={50} />
                        </C.SignInButton>
                    </C.RowFiller>
                    <C.RowFiller>
                        <C.SignInButton>
                            <FaHome onClick={redirectToHome} size={20} />
                        </C.SignInButton>
                    </C.RowFiller>
                </C.SignInMethodWrapper>
            </C.WhiteBox>
        </C.GradientBox>
    );
}
