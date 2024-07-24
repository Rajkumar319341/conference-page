
var basicAuth="Basic "+btoa("admin".concat(":","5A4U8S3Y9I0E1W2R6T4O9P8G2F4D3"));
var today=new Date();

export const APIData={
    api:"https://tp.care4edu.com/c4e/",
    api1:"https://qa-api.care4edu.com/c4e/",
    headers: { Authorization: basicAuth },
    date: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),


}

export const org="c4e";