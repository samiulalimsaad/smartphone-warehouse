import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = title + " | Smartphone Warehouse";
    }, [title]);
    return title;
};

export default useTitle;
