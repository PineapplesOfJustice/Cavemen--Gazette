var monthData = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var editorialData = [
    {
        title: "High School Students Discover Cave",
        content: "In California, high school students discover an ancient cave by vandalizing school property. As the students bulldoze their school with an illegal black-market sledgehammer, a cave entrance, previously unknown to the school district, was pried open. The discovery left 3 injured due to the fall and 5 traumatized. For their recovery, the local hospital refuses to expose the patients to the news-hungry press. Considering its unnatural shallowness and formation pattern, it could be concluded that the cave was a man-made structure. Carbon dating suggests that this cave was carved in around 360 BC. Oddly enough, trinkets, a burn-out campfire, and even broken chains were found intact within the cave. From where the campfire is lit, shadow may be formed with the trinkets. These shadows are projected onto the cave wall directly in front of the chain, implying that prisoners were held captive with a bizarre puppet show. Scientists proposed that this was an elaborate philosophical experiment conducted by the ancient natives. Due to the cruel treatment, the prisoners eventually revolted and sealed the cave. On the other contrary, conspiracy theorists claimed that aliens conducted the experiment to judge humanity. Regardless, the discovery brought about an extended school closure as the security department struggles to contain the public tourism.",
        author: "Khai Sam",
        idNumber: Math.floor(Math.random()*3),
    },
    {
        title: "Microwavable Grapes Destroy Kitchen Appliances",
        content: "Men astonish themselves in surprising ways. Some drinks dangerous substances such as La Salsa de La Lechuga while others microwaves two grapes in close proximity. One may argued that the foremost is a perfectly sane and healthy conduct; however, the latter is undeniably an act of self-destruction. Grapes possess the ability to capture and amplify micro-waves. This generates an electric field. When two are placed in contact with each others, plasma may be formed, capable of frying the operating microwave. Strictly speaking, plasma is superheated gas with a strong disposal toward electric field. While the substance's net charge generally equate to zero, each particle within the substance is ionically charged. This made it unique to the average household gas. Though plasma is beautiful to observe, the damage to the kitchen is not appreciated. As such, men and women alike should refrains from microwaving grapes or similar-sized objects with high water content.",
        author: "Khai Sam",
        idNumber: Math.floor(Math.random()*3),
    },
    {
        title: "Procrastination Ruins Education",
        content: "To unearth the causes of America's educational problems, studies were conducted by the University of Colorado Boulevard. The May Report suggested that procrastination is the chief suspect. Of the 10 million students surveyed, 9 millions are reported to suffer from chronic procrastination. Moreover, some self-justified that they wasted time to relieve stress, while others stated simply that they disliked school works. From the report, it may be concluded that students lacked motivation in their schools. Despite offering Advance Placement classes and accelerated courses, nationwide,  schools failed to captured the interest of the students. One culprit of this dilemma is extra credit. By inflating grades and \"saving\" the students from summer school, teachers undermined the significance behind school work. Furthermore, this lessen the pressure for the students to engage in their work early, which, in turn, breeds a habit of procrastinating within the students. As such, it is advised for teachers to deliver extra credit sparingly and delibrately. To save the national education system, heavy reforms must be undertaken by its members.",
        author: "Khai Sam",
        idNumber: Math.floor(Math.random()*3),
    },
    {
        title: "Canadian Goose Attacks 9 years-old",
        content: "While the president struggles to end illegal immigrantion by preventing the Mexicans from crossing the Rio Grande border, the president turned a blind eye toward the Canadian fowl. Canadian geese are aggressive beings that attack on-sight. Last Friday, a 9 years-old child, who-must-not-be-named, was brutally pecked by a mother goose as he attempted to pet a gosling. The child was saved from the jaw of death by a heroic high school dropout; however, the traumatic experience left him hospitalized. Students from around the world share flowers and sentiments to sympathize with the child. America cans no longer ignore the glaring threat against innocent children. To prevent the harm of American children by illegal immigrants, the government should authorize the usage of deportation and make Canada pay for it. Attacks on American children cannot be justified. This call for men to gather and enforce the law of the land.",
        author: "Khai Sam",
        idNumber: Math.floor(Math.random()*3),
    },
    {
        title: "Global Cooling Strikes Back",
        content: "As scientists struggle to define global warming, a mysterious phenomenon plagued the Earth. Schools were shut down as blizzards stormed the closing of May, leaving unsatisfied students unable to complete their long waited graduation ceremonies. Where snow had never fell, hail pounded the way as cities loses billion in property damages. The iconic California palm trees withered, unable to withstand the frigid climate. Overnight, the world froze over. Aspiring evangelists preached that mankind had once-again invoked God's fury, which cans only be appeased through public whipping and the purchase of expensive indulgences. At the same time, scientists struggles to identify the cause, while cult fanatics praises their lord, Cthulhu. Unable to diagnose the rapid temperature fluctuation, people were left aghasted. Likely, man's short-sighted actions contributed to the global disaster.",
        author: "Khai Sam",
        idNumber: Math.floor(Math.random()*3),
    },
];

var errorEditorial = {
        title: "Fake News Outbreak",
        content: "Fake news! Fake news! Fake News! Though some believed that the amount of fake news had soared with the expansion of technology, fake news had, in fact, been a prominent part of the press through every medium and every era. The misconception may be attributed to an increase in awareness in contemporary time as education gradually improves. Fake news serve as both a military tactic and a business tactic, among others. Yellow Journalism by Pulitzer and Hearst in the 1880s were such an example. The two newspaper authors spun emotional story with one thread of truth for every ball of lies. This tactic increased newspaper sales and steered the US toward the Spanish-American War. Fake news had influenced society for millenia. Rather than worrying about it, it is best to learn the coping mechanism necessary to defend oneself against the onslaught of such news.",
        author: "Khai Sam",
}

var editorialOption = cloneObjectArray(editorialData);
//console.log(editorialOption)

var newspaperSubject = "";
var subjectCounter = 0;
var amountOfArticles = 7;

var newsAPIKey = "149a14aac87b4c3984b91b33c337bfb3";
var pixabayKey = "12686752-9b26a2063e66af9411ed06eeb";


// Initial Setup

function setup(){
    noCanvas();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    if(currentDay < 10){
        currentDay = "0" + currentDay;
    }
    var currentMonth = monthData[currentDate.getMonth()];
    var currentYear = currentDate.getFullYear();
    document.getElementById("dateHeader").innerHTML = currentDay + " " + currentMonth + " " + currentYear;
    document.getElementById("subjectInput").focus();
}


// Newspaper Creator

function updateSubject(){
    var userSubject = document.getElementById("subjectInput").value.trim().toLowerCase();
    if(newspaperSubject != userSubject && userSubject != ""){
        newspaperSubject = userSubject;
        subjectCounter = 0;
        loadJSON("https://newsapi.org/v2/everything?apiKey=" + newsAPIKey + "&q=" + newspaperSubject + "&language=en", updateNewspaper, subjectError); 
        //console.log("https://newsapi.org/v2/everything?apiKey=" + newsAPIKey + "&q=" + newspaperSubject + "&language=en");  
    }/*
    else{
        subjectCounter += 1;
    }*/
}

function updateNewspaper(data){
    document.getElementById("newspaperContent").style.display = "flex";
    //console.log(data)
    
    //console.log(data.articles)
    for(var i=0; i<amountOfArticles; i++){
        if(i < data.articles.length){
            // Article Header
            var articleHeader = data.articles[i].title;
            if(articleHeader == null || articleHeader == ""){
                articleHeader = "N/A";
            }
            document.getElementById("contentHeader" + i).innerHTML = articleHeader;
            
            // Article Author
            var articleAuthor = data.articles[i].author;
            if(articleAuthor == null || articleAuthor == ""){
                articleAuthor = data.articles[i].source.name;
            }
            if(articleAuthor == null || articleAuthor == ""){
                articleAuthor = "N/A";
            }
            document.getElementById("contentAuthor" + i).innerHTML = articleAuthor;
            
            // Article Content
            if(data.articles[i].content != null){
                var articleContent = data.articles[i].content.split("… [+");
            }
            else{
                var articleContent = [data.articles[i].description];
            }
            var articleDate = data.articles[i].publishedAt.split("T");
            var dateArray = articleDate[0].split("-");
            
            document.getElementById("contentContent" + i).innerHTML = articleContent[0].trim() + " ...<br><br><a target='_blank' href='" + data.articles[i].url + "'>[" + dateArray[2]+ " " + monthData[Number(dateArray[1])-1] + " " + dateArray[0] + "]</a>";
            
            // Article Thumbnail
            document.getElementById("contentThumbnail" + i).setAttribute("src", data.articles[i].urlToImage);
        }
        else{
            document.getElementById("contentHeader" + i).innerHTML = "N/A";
            document.getElementById("contentAuthor" + i).innerHTML = "N/A";
            document.getElementById("contentContent" + i).innerHTML = "N/A";
            document.getElementById("contentThumbnail" + i).setAttribute("src", "Assets/Images/Symbol/X.png");
        }
    }
    
    setTimeout(function(){
        loadJSON("https://pixabay.com/api/?key=" + pixabayKey + "&q=" + newspaperSubject + "&lang=en&safesearch=true&per_page=" + amountOfArticles, updateThumbnail, thumbnailError);
    }, 2500);
    
    if(data.articles.length != 0){
        if(editorialOption.length == 0){
            editorialOption = cloneObjectArray(editorialData);
        }
        var chosenEditor = editorialOption.splice(Math.floor(Math.random()*editorialOption.length), 1);
        chosenEditor = chosenEditor[0];
        document.getElementById("editorPortrait").setAttribute("src", "Assets/Images/Editor/" + chosenEditor.idNumber + ".png"); 
    }
    else{
        var chosenEditor = errorEditorial;
        document.getElementById("editorPortrait").setAttribute("src", "Assets/Images/Symbol/X.png");
    }
    
    document.getElementById("editorHeader").innerHTML = chosenEditor.title;
    document.getElementById("editorName").innerHTML = chosenEditor.author;
    document.getElementById("editorContent").innerHTML = chosenEditor.content;
}

function updateThumbnail(data){
    if(data.hits.length > 0){
        //console.log(data.hits.length)
        for(var i=0; i<amountOfArticles; i++){
            if(i < data.hits.length){
                var numberId = i;
            }
            else{
                var numberId = Math.floor(Math.random()*data.hits.length);
            }
            //console.log(document.getElementById("contentThumbnail" + numberId).getAttribute("src"))
            if(document.getElementById("contentHeader" + i).innerHTML != "N/A" && document.getElementById("contentThumbnail" + i).getAttribute("src") == "Assets/Images/Symbol/X.png"){
                document.getElementById("contentThumbnail" + i).setAttribute("src", data.hits[numberId].largeImageURL);
            }
        }
    }
    else{
        /*var subjectArray = newspaperSubject.split(" ");
        if(subjectArray.length == 1){
            var searchQueue = newspaperSubject[0];
        }
        else{
            var searchQueue = subjectArray[0];
        }*/
        var searchQueue = newspaperSubject[0];
        setTimeout(function(){
            loadJSON("https://pixabay.com/api/?key=" + pixabayKey + "&q=" + searchQueue + "&lang=en&safesearch=true&per_page=" + amountOfArticles, updateThumbnail, thumbnailError);
        }, 100);
    }
}


// Safeguards

function subjectError(){
    console.log("subjectError");
    for(var i=0; i<amountOfArticles; i++){
        document.getElementById("contentHeader" + i).innerHTML = "N/A";
        document.getElementById("contentAuthor" + i).innerHTML = "N/A";
        document.getElementById("contentContent" + i).innerHTML = "N/A";
        document.getElementById("contentThumbnail" + i).setAttribute("src", "Assets/Images/Symbol/X.png");
    }
    
    document.getElementById("editorHeader").innerHTML = "N/A";
    document.getElementById("editorName").innerHTML = "N/A";
    document.getElementById("editorContent").innerHTML = "N/A";
    document.getElementById("editorPortrait").setAttribute("src", "Assets/Images/Symbol/X.png");
}

function thumbnailError(){
    console.log("thumbnailError");
    /*for(var i=0; i<amountOfArticles; i++){
        document.getElementById("contentThumbnail" + i).setAttribute("src", "Assets/Images/Symbol/X.png");
    }*/
}


// Support Function

function eraseInput(elementId){
    document.getElementById(elementId).value = "";
}

function reportImage(elementId){
    document.getElementById(elementId).setAttribute("src", "Assets/Images/Symbol/X.png");
}

function cloneObjectArray(data){
    var placeholder = [];
    for(var i=0, length=data.length; i<length; i++){
        placeholder[i] = {};
        for(var obj in data[i]){
            placeholder[i][obj] = data[i][obj];
        }
    }
    return placeholder;
}

function scrollSmoothToTop() {
    var div = document.getElementById("newspaperContainer");
   $("html, body").animate({
        scrollTop: div.clientHeight - div.scrollHeight  
    }, 1000);
}


// User Interaction

function keyPressed(){
    // Enter Key
    if(keyCode == 13){
        document.getElementById("subjectButton").click();
        document.getElementById("subjectInput").focus();
    }
    
    // F Key
    else if(keyCode == 70 && keyIsDown(17)){
        var currentStatus = fullscreen();
        fullscreen(!currentStatus);
        return false;
    }
}


// Scroll Button

window.addEventListener('scroll', scrollFunction);
function scrollFunction(){
    if(document.body.scrollTop > document.documentElement.scrollHeight/2 || document.documentElement.scrollTop > document.documentElement.scrollHeight/2){
        document.getElementById("scrollButton").style.display = "flex";
    }
    else{
        document.getElementById("scrollButton").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}