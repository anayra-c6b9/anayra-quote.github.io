async function TweetQuote(){
    const tweeturl=`https://twitter.com/intent/tweet/?text=${document.getElementById('quote').innerText}%20${document.getElementById('author').innerText}`;
    window.open(tweeturl);
}

async function GenerateQuote(){
    const api='https://type.fit/api/quotes';
    try{
        const answer= await fetch(api).then((res)=>{return res.json()});
        const result=answer[Math.floor(Math.random()*1550)];
        document.getElementById('quote').innerText=result.text;
        document.getElementById('author').innerText=`~ ${result.author}`;        
    }
    catch(error){
        console.log(error);
    }
}

GenerateQuote();

document.getElementById('newquote').addEventListener('click',GenerateQuote);
document.getElementById('tweet').addEventListener('click', TweetQuote);