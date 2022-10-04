window.onload = function(){
    var githubname=""
chrome.storage.sync.get('githubuser',function(budget){
    var x=budget.githubuser
    if(x!=null)
    {
         for(var i=x.indexOf("\"login\": ")+10;;i++)
         {
            if(x[i]=="\"")
            break;
            githubname+=x[i];
         }
        
       
        document.getElementById("githubnames").innerHTML=githubname
    }
})   


var jianshuname=""
chrome.storage.sync.get('jianshuuser',function(budget){
    var x=budget.jianshuuser
    if(x!=null)
    {
         for(var i=x.indexOf("\"nickname\":")+12;;i++)
         {
            if(x[i]=="\"")
            break;
            jianshuname+=x[i];
         }
        
       
        document.getElementById("jianshunames").innerHTML=jianshuname
      
    }
}) 

var oschinaname=""
chrome.storage.sync.get('oschinanames',function(budget){
    var x=budget.oschinanames
    if(x!=null)
    {
        oschinaname=x
     document.getElementById("oschinanames").innerHTML=x
   
    }
}) 


var cnblogname=""
chrome.storage.sync.get('cnblognames',function(budget){
    var x=budget.cnblognames
    if(x!=null)
    {
        cnblogname=x.substring(4)
        document.getElementById("cnblognames").innerHTML=x.substr(13)
     //document.getElementById("cnblognames").innerHTML=cnblogname
    }
})
}