
async function computerIP() 
{
    let response = await fetch(' https://www.myip.com');
    let data = await response.json();

    await new Promise((resolve, reject) => setTimeout(resolve,2000));
    console.log(data.ip);
    if (err) throw err;
    console.log(err);
}
computerIP();