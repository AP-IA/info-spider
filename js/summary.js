window.onload = function(){
    var following=0
    var followers=0
chrome.storage.sync.get('githubuser',function(budget){
    var x=budget.githubuser
    if(x!=null)
    {
        following+=parseInt(x[x.indexOf("\"followers\": ")+13])
        followers+=parseInt(x[x.indexOf("\"following\": ")+13])
        document.getElementById("fowllering").innerHTML="关注数"+following
        document.getElementById("fowllers").innerHTML="粉丝数"+followers
    }
        
})   

chrome.storage.sync.get('jianshufollowing',function(budget){
    var x=budget.jianshufollowing
    if(x!=null)
    {
        following+=parseInt(x)
        document.getElementById("fowllering").innerHTML="关注数"+following
    }
       
    
})
chrome.storage.sync.get('jianshufollowers',function(budget){
    var x=budget.jianshufollowers
    if(x!=null)
    {
        followers+=parseInt(x)
        document.getElementById("fowllers").innerHTML="粉丝数"+followers
    }
})


chrome.storage.sync.get('cnblogfollower',function(budget){
    var x=budget.cnblogfollower
    if(x!=null)
    {
        followers+=parseInt(x)
        document.getElementById("fowllers").innerHTML="粉丝数"+followers
    }
})

chrome.storage.sync.get('cnblogfollowing',function(budget){
    var x=budget.cnblogfollowing
    if(x!=null)
    {
        following+=parseInt(x)
        document.getElementById("fowllering").innerHTML="关注数"+following
    }
})




chrome.storage.sync.get('oschinafollowers',function(budget){
    var x=budget.oschinafollowers
    if(x!=null)
    {
        followers+=parseInt(x)
        document.getElementById("fowllers").innerHTML="粉丝数"+followers
    }
})

chrome.storage.sync.get('oschinafollowing',function(budget){
    var x=budget.oschinafollowing
    if(x!=null)
    {
        following+=parseInt(x)
        document.getElementById("fowllering").innerHTML="关注数"+following
    }
})

}
  