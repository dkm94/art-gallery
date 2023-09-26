import { useEffect, RefObject } from "react";

type ResizeCallback = (height: number) => void;

const useResizeObserver = (elementRef : RefObject<HTMLElement | null>, callback:ResizeCallback) => {
    console.log("🚀 ~ file: useResizeObserver.tsx:6 ~ useResizeObserver ~ elementRef:", elementRef)
    useEffect(() => {
    const element = elementRef.current;

    if (!element) {
        return;
    }

    const observer = new ResizeObserver((entries) => {
        if (entries.length > 0) {
        const divElement = entries[0];
        const height = divElement?.contentRect.height;
        // console.log("🚀 ~ file: useResizeObserver.tsx:17 ~ observer ~ height:", height)
        callback(height);
        }
    });

    observer.observe(element);

        return () => {
        observer.unobserve(element);
        };
    }, [elementRef, callback]);
};

export default useResizeObserver;
