
function getQueryStringValue (key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

function setMetaTag(name,content){

    var meta=document.getElementsByTagName("meta");
    for (var i=0; i<meta.length; i++) {
        if (meta[i].name.toLowerCase()==name) {
            meta[i].content=content;
        }
    }

}
function displayCoinInfo(coinname){
    if (coins.hasOwnProperty(coinname)){
        //alert(coinname);

        document.title = "Free "+coins[coinname].name + " wallet";
        setMetaTag("description", `Download free ${coins[coinname].name} (${coins[coinname].unit} powered by Zelcore.`)
        document.getElementById("coin-logo").src = coins[coinname].logolink;
        document.getElementById("coin-logo").class = "";        
        document.getElementById("coin-logo").style = "height: 90px;";
        // document.getElementById("coin-logo-text").innerHTML = coins[coinname].name + " wallet";
        let txt = `Zelcore ${coins[coinname].name} Wallet`
        document.getElementById("coin-headerL").innerHTML=txt;
        document.getElementById("coin-header2L").innerHTML=`Send, Receive, and Exchange ${coins[coinname].name} With Zelcore ${coins[coinname].unit} Wallet`;
        document.getElementById("coin-headerS").innerHTML=txt;
        document.getElementById("coin-header2S").innerHTML=`Send, Receive, and Exchange ${coins[coinname].name} With Zelcore ${coins[coinname].unit} Wallet`;
        document.getElementById("coin-download-button").innerHTML=`Download Zelcore ${coins[coinname].name} Wallet`;

        document.getElementById("coin-header-sendandreceive").innerHTML=`Send and Receive ${coins[coinname].name}`;
        document.getElementById("coin-text-sendandreceive").innerHTML=`<img src="${coins[coinname].logolink}" id="features-logo" style="float: left;"/>Send and receive ${coins[coinname].name} fast and easy with a ${coins[coinname].name} address or scannable QR code. Each Zelcore account comes standard with 3 ${coins[coinname].name} addresses, of which you and only you have the private keys.
            The Zelcore wallet supports 100+ other coins and ERC-20 tokens, and is available for desktop and mobile devices.`;

        document.getElementById("coin-header-buyandsell").innerHTML=`Buy and sell ${coins[coinname].name} via Built-in Exchanges`;


        document.getElementById("coin-header-zelid").innerHTML=`Securly store your  ${coins[coinname].name} in Zelcore with ZelID`;
        document.getElementById("coin-text-zelid").innerHTML=`Store your ${coins[coinname].name} 100% Secure with <a href="/project/zelid/">ZelID</a>,
                a decentralized authentication protocol that is truly seamless, secure, and private. A digital identity you control for cross-platform authentication.                  </h1>
            `;
        
        // document.getElementById("coin-download-name").innerHTML=coins[coinname].name;
    }else{
        console.log("COINNAME not found: "+coinname);

    }
    displayCoinGrid();
}



function displayCoinGrid(){
    var output = [];
    for (var i in coins) {
      if (isrewrite)  
          output += `<li><a href="/project/zelcore/${coins[i].coin}-wallet.html"><img src="${coins[i].logolink}" class='smallImg'>${coins[i].name}</a></li>`;
      else output += `<li><a href="/project/zelcore/wallet.html?coin=${coins[i].coin}"><img src="${coins[i].logolink}" class='smallImg'>${coins[i].name}</a></li>`;
    }
    document.getElementById("coin-list").innerHTML = `<ul>${output}</ul>`;
}

var coinname = getQueryStringValue("coin");

// change this to true, if url-rewrite is enabled ex bitcoinz-wallet.html >> wallet.html?coin=bitcoinz
var isrewrite = false;

if (coinname==''){
    let url = window.location.pathname;
    let filename = url.split('/').pop().split('#')[0].split('?')[0];
    
    coinname=filename.split('-')[0];
    if (coinname=='wallet') coinname='';
    
}
window.onload = displayCoinInfo(coinname);