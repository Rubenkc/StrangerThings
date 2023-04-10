const cohort = '2211-ftb-et-web-pt'
export const url = `https://strangers-things.herokuapp.com/api/${cohort}`;
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJlMjQ1OTVlMDYwOTAwMTZjZjQ1Y2YiLCJ1c2VybmFtZSI6InJzb2JlIiwiaWF0IjoxNjgwNzQ1NTYxfQ.Wjs_F6wz9UKmRC_FF-xWriJS2aLmjDrv2TVoc5dDcJg"

export const allPost = async () => {
    try{
        const response = await fetch (`${url}/post`);
    const result = await response.json();
    
    
    return result
    } catch (error) {

    }
}