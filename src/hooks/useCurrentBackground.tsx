/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";

import { CurrentBackgroundCtx } from "."

const useCurrentBackground = () => {

    // This hook prevents throwing an error if the background context is not provided.
    const currentBackgroundCtx = useContext(CurrentBackgroundCtx)

    if (!currentBackgroundCtx) {
        throw new Error(
        "useCurrentBackgroundCtx has to be used within <CurrentBakgroundContext.Provider>",
        );
    }
    
    return currentBackgroundCtx;
}

export default useCurrentBackground