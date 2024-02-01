const URL = `https://api.imgflip.com/get_memes`;

export const getMemesData = async() =>{
 const response =  await fetch(URL);
 return response.json();
}

