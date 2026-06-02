import { useEffect } from "react";

export default function useRecipesList({ url, onHandleRecipes}){
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => onHandleRecipes(data))
    }, [url])
}