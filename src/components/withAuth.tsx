"use client";

import React, { ComponentType, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router";
import { LoadingPage } from "./loading-page";

const withAuth = (WrappedComponent: ComponentType<any>) => {
    const Wrapper: React.FC = (props) => {
        const { user } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                router.push('/login');
            }
        }, [user, router])

        if (!user) return <LoadingPage />

        return <WrappedComponent {...props} />
    };

    return Wrapper;
}

export default withAuth;