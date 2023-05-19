import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Kidoz`;
    }, [title])
};

export default useTitle;