// var headers= new Headers();
// headers.append('Access-Control-Allow-Origin', '*');
// headers.append('Access-Control-Allow-Credentials', 'true');
// window.googleDocCallback = function () { return true; };

const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=sy73SzVgR1O0kM7_LaceHEzNhP51ml_XG2n1LxI1YZ3Hfksgvn7OwyeiDI8ObiLOFZ_V2Gehi-5oHTUGfO77kjYnGjU5odI8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDYK1A3iZreOvKx6J8keU1oLj7U1PL35plE_oBSHtr6n-fMkMBud2p2Z_kcKr-1V1Q&lib=M4lIpecSdKMedJK1gjj5-kdSIthR4QL2e';
window.addEventListener('DOMContentLoaded',getData);
const output = document.querySelector('.optput');
function getData(){
    output.innerHTML = "loading...";
    fetch(url,{mode:'cors'}).then(function(rep){
        return rep.json()
    }).then(function(data){
        console.log(data);
    }).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}


// $.ajax({
//     url: 'https://script.googleusercontent.com/macros/echo?user_content_key=sy73SzVgR1O0kM7_LaceHEzNhP51ml_XG2n1LxI1YZ3Hfksgvn7OwyeiDI8ObiLOFZ_V2Gehi-5oHTUGfO77kjYnGjU5odI8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDYK1A3iZreOvKx6J8keU1oLj7U1PL35plE_oBSHtr6n-fMkMBud2p2Z_kcKr-1V1Q&lib=M4lIpecSdKMedJK1gjj5-kdSIthR4QL2e',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     type: "POST", /* or type:"GET" or type:"PUT" */
//     dataType: "json",
//     data: {
//     },
//     success: function (result) {
//         // console.log(result);
//     },
//     error: function () {
//         // console.log("error");
//     }
// });