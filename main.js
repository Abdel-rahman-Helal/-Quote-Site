var popularQuotes =[
{
Quote:"“Be yourself; everyone else is already taken.”",
Autor:"Oscar Wilde"
}
,
{
 Quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
Autor:"Marilyn Monroe"
}
,
{
 Quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
 Autor:"Albert Einstein"
}
,
{
   Quote:"“So many books, so little time.”",
   Autor:"Frank Zappa"
}
,
{
  Quote:"“A room without books is like a body without a soul.”",
Autor:"Marcus Tullius Cicero"
}
,
{
      Quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
   Autor:"Bernard M. Baruch"
}
,
{
     Quote:"“Be yourself; everyone else is already taken.”",
     Autor:"Oscar Wilde"
}
,
{
      Quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",

        Autor:"William W. Purkey"
}
,
{
Quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
Autor:"Dr. Seuss"
}
]

function getQuotes(){
var num =  Math.floor(Math.random()*popularQuotes.length);

document.getElementById("quote").innerHTML=popularQuotes[num].Quote;
document.getElementById("Autor").innerHTML=popularQuotes[num].Autor;






}