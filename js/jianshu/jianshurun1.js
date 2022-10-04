window.onload = function () {
    console.log(document.getElementsByTagName('pre')[0].innerHTML)

    data=document.getElementsByTagName('pre')[0].innerHTML;
    chrome.storage.sync.set({'jianshuuser':data});
    var x=data
    
    var following=0
    var followers=0
    if(x!=null)
    {
        followers+=parseInt(x[x.indexOf("\"followers_count\":")+18])
        following+=parseInt(x[x.indexOf("\"following_users_count\":")+24])
    }
    chrome.storage.sync.set({'jianshufollowing':following});
    chrome.storage.sync.set({'jianshufollowers':followers});
    console.log(followers)
    console.log(following)
    chrome.storage.sync.get('jianshuname',function(budget){
       
        var jianshuurl2="https://www.jianshu.com/asimov/users/slug/"+budget.jianshuname+"/public_notes";
        window.open(jianshuurl2)
    })
}