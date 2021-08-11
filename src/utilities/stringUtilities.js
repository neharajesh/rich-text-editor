export const formatString = (string) => {
    let newString = string.split("").map(char => {
        if(char === "{" || char === "}" || char==="_") {
            return "";
        } else {
            return char;
        }
    })
    return newString.join("").replace("meme", "");
}