function hyoji(){
 //表示する文字
var str="イタリア";
//テキストボックスの文字数
var cnt = document.timer.moji.value.length;
//文字が全部表示されているか確認 
if(cnt<5){
//現在より1文字多い切り出して表示
document.timer.moji.value=str.substr(0,cnt+1);}
else{
 //全て表示されたら、空文字に戻す
document.timer.moji.value=""; }}
function startfnc(){
  //関数hyoji()を1000ミリ秒間隔で呼び出す
setInterval("hyoji()",1000);}
