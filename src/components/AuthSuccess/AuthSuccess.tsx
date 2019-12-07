import React, { useEffect } from "react";
import { useLocation } from "react-router";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loginByToken } from "src/store/auth/actions";
import Preloader from "src/components/Preloader/Preloader";

export default function AuthSuccess() {
    const dispatch = useCustomDispatch();
    const location = useLocation();
    const token = location.hash.replace("#token=", "");

    useEffect(() => {
        dispatch(loginByToken(token));
    }, [dispatch, token]);

    return <Preloader />;
}
