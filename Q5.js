/*
Write a program to find the number of times the charachter "a" is repeated and its index position in the following p

*/

function count(word, letter) {
    let count=0;

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i)== letter) {
            count++;
        }
        
    }
    return count;
}

let word=`JavaScript was created by Brendan Eich in 1995 to give web pages a little more pep than the <blink> 
tag could provide. Today it has far more powerful uses and companies like Google and Facebook use JavaScript
 to build complex desktop-like web applications. 
 With the launch of Node.js, It has also become one of the most
 popular languages for building 
 server-side software. Today, even the web isn’t big enough to contain JavaScript’s versatility. 
 I believe that you are already aware of these facts and this has made you land on this JavaScript Interview Questions article.`

 let letter='a';

 console.log(count(word,letter))