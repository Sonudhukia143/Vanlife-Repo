export default async function getVans () {
    const response = await fetch("/api/vans");

    if(!response.ok){
        throw new Error(JSON.stringify({status:404,error:"cannot get vans data"}));
    }
    else{
        const data = await response.json();
        return data;
    }
}