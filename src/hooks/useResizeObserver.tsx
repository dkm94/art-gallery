import { useEffect, RefObject } from "react";

type ResizeCallback = (height: number) => void;

const useResizeObserver = (elementRef : RefObject<HTMLElement | null>, callback:ResizeCallback) => {
    useEffect(() => {
    const element = elementRef.current;

    if (!element) {
        return;
    }

    const observer = new ResizeObserver((entries) => {
        if (entries.length > 0) {
        const divElement = entries[0];
        const height = divElement.contentRect.height;
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
