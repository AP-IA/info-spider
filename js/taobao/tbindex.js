var set = new Set
window.onload = function () {
      setTimeout(code, 1000,)
}
function open() {

}
function code() {

  var s=document.getElementsByTagName('a').getAttribute('href')
  var s1 = document.getElementById('J_ShopSearchResult');
  var s2 =s1.getElementsByClassName('item-name J_TGoldData')
  for(var i=0;i<=60;i++)
  {
    if(s2[i]==null)
    break;
    set.add(s2[i].getAttribute('href'))
    console.log(s2[i].getAttribute('href'))  
  }
 set.forEach(element => {
    window.open(element)
 });
}