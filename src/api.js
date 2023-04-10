const cohort = '2211-ftb-et-web-pt'
export const url = `https://strangers-things.herokuapp.com/api/${cohort}`;


export const allPost = async () => {
    try{
        const response = await fetch (`${url}/post`);
    const result = await response.json();
    
    
    return result
    } catch (error) {

    }
}