
const brNews = document.getElementById("breakingNews");
const rgNews = document.getElementById("regularNews");
const inNews = document.getElementById("internationalNews");
const spNews = document.getElementById("sports");
const enNews = document.getElementById("entertainment");
const culNews = document.getElementById("culture");
const artNews = document.getElementById("arts");
const allNewsBtn = document.getElementById("allNews");

const newsContainer  = document.getElementById("news-container");
const titleContainer = document.getElementById("title");

function clearNewsContainer() {
    const newsContainer = document.getElementById("news-container");
    while (newsContainer.firstChild) {
      newsContainer.removeChild(newsContainer.firstChild);
    }
  }

const getBreakinNews = async () => {
  // Clear the news container
  clearNewsContainer();
  const url = "https://openapi.programming-hero.com/api/news/category/01";

  try {
    titleContainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const breakingNews = data;
    const length = breakingNews.data.length;


    breakingNews.data.sort((a, b) => b.total_view - a.total_view);

     breakingNews.data.map((ele) => {
      titleContainer.style.display = "block";
   
      const cardDiv = document.createElement("div");
      const cardDivLeft = document.createElement("div");
      const cardDivRight = document.createElement("div");
      const spanDiv = document.createElement("div");

      const imgLogo = document.createElement("img");
      const newsHeading = document.createElement("h3");
      const limitedDetails = document.createElement("p");
      const fullDetails = document.createElement("p");
      const writerLogo = document.createElement("img");
      const writerName = document.createElement("p");
      const date = document.createElement("p");
      const totalView = document.createElement("p");
      const button = document.createElement("button"); 


      const limitedDetailText = ele.details.substring(0, 400);
      limitedDetails.innerText = limitedDetailText + " ...";
      fullDetails.innerText = ele.details;
      fullDetails.style.display = "none";
      imgLogo.src = ele.thumbnail_url;
      newsHeading.innerText = ele.title;
      writerLogo.src = ele.author.img;
      writerName.innerText = ele.author.name;
      date.innerText = ele.author.published_date;
      totalView.innerHTML = `${ele.total_view}`;
      button.innerText = "Read More";
      button.style.padding = ".4rem";
      button.style.marginLeft = "10px"
      button.style.border = "1px solid lightgrey";
      button.style.color = "blue";
      button.style.cursor = "pointer";
     
      cardDivLeft.appendChild(imgLogo);
      cardDivRight.appendChild(newsHeading);
      cardDivRight.appendChild(limitedDetails);
      cardDivRight.appendChild(fullDetails);
      spanDiv.appendChild(writerLogo);
      spanDiv.appendChild(writerName);
      spanDiv.appendChild(date);
      spanDiv.appendChild(totalView);
      spanDiv.appendChild(button);

      newsContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDivLeft);
      cardDiv.appendChild(cardDivRight);
      cardDivRight.appendChild(spanDiv);

      cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "lightgrey";
      cardDiv.style.marginBottom = "25px";
      cardDiv.style.border = "2px solid darkgrey"
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      spanDiv.style.marginTop = "15%";
      cardDivRight.style.padding = "2rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
    });
  } catch (err) {
    throw err;
  }
};

const regNews = async () =>{
    clearNewsContainer();
    const url =  "https://openapi.programming-hero.com/api/news/category/02";

    

try{
    titleContainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const regularNews = data;
    const length = regularNews.data.length;
    
    
    regularNews.data.map((ele) => {
        titleContainer.style.display = "block";
      
        const cardDiv = document.createElement("div");
        const cardDivLeft = document.createElement("div");
        const cardDivRight = document.createElement("div");
        const spanDiv = document.createElement("div");
  
        const imgLogo = document.createElement("img");
        const newsHeading = document.createElement("h3");
        const limitedDetails = document.createElement("p");
        const fullDetails = document.createElement("p");
        const writerLogo = document.createElement("img");
        const writerName = document.createElement("p");
        const date = document.createElement("p");
        const totalView = document.createElement("p");
        const button = document.createElement("button");
  
       
        const limitedDetailText = ele.details.substring(0, 400);
        limitedDetails.innerText = limitedDetailText + " ...";
        fullDetails.innerText = ele.details;
        fullDetails.style.display = "none"; 
        imgLogo.src = ele.thumbnail_url;
        newsHeading.innerText = ele.title;
        writerLogo.src = ele.author.img;
        writerName.innerText = ele.author.name;
        date.innerText = ele.author.published_date;
        totalView.innerHTML = `${ele.total_view}`;
        button.innerText = "Read More";
        button.style.padding = ".4rem";
        button.style.border = "1px solid blue";
        button.style.color = "blue";
        button.style.cursor = "pointer";
        button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click
  
        cardDivLeft.appendChild(imgLogo);
        cardDivRight.appendChild(newsHeading);
        cardDivRight.appendChild(limitedDetails); 
        cardDivRight.appendChild(fullDetails); 
        spanDiv.appendChild(writerLogo);
        spanDiv.appendChild(writerName);
        spanDiv.appendChild(date);
        spanDiv.appendChild(totalView);
        spanDiv.appendChild(button);
  
        newsContainer.appendChild(cardDiv);
        cardDiv.appendChild(cardDivLeft);
        cardDiv.appendChild(cardDivRight);
        cardDivRight.appendChild(spanDiv);
  
        cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "lightgrey";
      cardDiv.style.marginBottom = "25px";
      cardDiv.style.border = "2px solid darkgrey"
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      spanDiv.style.marginTop = "15%";
      cardDivRight.style.padding = "2rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
      });
}
catch (err) {
    throw err;
}
};

const intNews = async () =>{
    clearNewsContainer();
    const url =  "https://openapi.programming-hero.com/api/news/category/03";

    

try{
    titleContainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const internationalNews = data;
    const length = internationalNews.data.length;
    
    
     internationalNews.data.map((ele) => {
        titleContainer.style.display = "block";
    
        const cardDiv = document.createElement("div");
        const cardDivLeft = document.createElement("div");
        const cardDivRight = document.createElement("div");
        const spanDiv = document.createElement("div");
  
        const imgLogo = document.createElement("img");
        const newsHeading = document.createElement("h3");
        const limitedDetails = document.createElement("p");
        const fullDetails = document.createElement("p");
        const writerLogo = document.createElement("img");
        const writerName = document.createElement("p");
        const date = document.createElement("p");
        const totalView = document.createElement("p");
        const button = document.createElement("button"); 
  
        
        const limitedDetailText = ele.details.substring(0, 400);
        limitedDetails.innerText = limitedDetailText + " ...";
        fullDetails.innerText = ele.details;
        fullDetails.style.display = "none"; 
        imgLogo.src = ele.thumbnail_url;
        newsHeading.innerText = ele.title;
        writerLogo.src = ele.author.img;
        writerName.innerText = ele.author.name;
        date.innerText = ele.author.published_date;
        totalView.innerHTML = `${ele.total_view}`;
        button.innerText = "Read More";
        button.style.padding = ".4rem";
        button.style.border = "1px solid blue";
        button.style.color = "blue";
        button.style.cursor = "pointer";
        button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click
  
        cardDivLeft.appendChild(imgLogo);
        cardDivRight.appendChild(newsHeading);
        cardDivRight.appendChild(limitedDetails); 
        cardDivRight.appendChild(fullDetails); 
        spanDiv.appendChild(writerLogo);
        spanDiv.appendChild(writerName);
        spanDiv.appendChild(date);
        spanDiv.appendChild(totalView);
        spanDiv.appendChild(button);
  
        newsContainer.appendChild(cardDiv);
        cardDiv.appendChild(cardDivLeft);
        cardDiv.appendChild(cardDivRight);
        cardDivRight.appendChild(spanDiv);
  
        cardDiv.style.display = "flex";
        cardDiv.style.backgroundColor = "lightgrey";
        cardDiv.style.marginBottom = "25px";
        cardDiv.style.border = "2px solid darkgrey"
        spanDiv.style.display = "flex";
        spanDiv.style.justifyContent = "center";
        spanDiv.style.alignItems = "center";
        spanDiv.style.marginTop = "15%";
        cardDivRight.style.padding = "2rem";
        writerLogo.style.height = "25px";
        writerLogo.style.width = "25px";
        writerLogo.style.borderRadius = "50%";
      });
}
catch (err) {
    throw err;
}
};
const sp = async () =>{
    clearNewsContainer();
    const url =  "https://openapi.programming-hero.com/api/news/category/04";

    
try{
    titleContainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const sports = data;
    const length = sports.data.length;
    
    
    sports.data.map((ele) => {
        titleContainer.style.display = "block";
      
        const cardDiv = document.createElement("div");
        const cardDivLeft = document.createElement("div");
        const cardDivRight = document.createElement("div");
        const spanDiv = document.createElement("div");
  
        const imgLogo = document.createElement("img");
        const newsHeading = document.createElement("h3");
        const limitedDetails = document.createElement("p");
        const fullDetails = document.createElement("p");
        const writerLogo = document.createElement("img");
        const writerName = document.createElement("p");
        const date = document.createElement("p");
        const totalView = document.createElement("p");
        const button = document.createElement("button"); 
  
        
        const limitedDetailText = ele.details.substring(0, 400);
        limitedDetails.innerText = limitedDetailText + " ...";
        fullDetails.innerText = ele.details;
        fullDetails.style.display = "none";
        imgLogo.src = ele.thumbnail_url;
        newsHeading.innerText = ele.title;
        writerLogo.src = ele.author.img;
        writerName.innerText = ele.author.name;
        date.innerText = ele.author.published_date;
        totalView.innerHTML = `${ele.total_view}`;
        button.innerText = "Read More";
        button.style.padding = ".4rem";
        button.style.border = "1px solid blue";
        button.style.color = "blue";
        button.style.cursor = "pointer";
        button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click
  
        cardDivLeft.appendChild(imgLogo);
        cardDivRight.appendChild(newsHeading);
        cardDivRight.appendChild(limitedDetails); 
        cardDivRight.appendChild(fullDetails); 
        spanDiv.appendChild(writerLogo);
        spanDiv.appendChild(writerName);
        spanDiv.appendChild(date);
        spanDiv.appendChild(totalView);
        spanDiv.appendChild(button);
  
        newsContainer.appendChild(cardDiv);
        cardDiv.appendChild(cardDivLeft);
        cardDiv.appendChild(cardDivRight);
        cardDivRight.appendChild(spanDiv);
  
        cardDiv.style.display = "flex";
        cardDiv.style.backgroundColor = "lightgrey";
        cardDiv.style.marginBottom = "25px";
        cardDiv.style.border = "2px solid darkgrey"
        spanDiv.style.display = "flex";
        spanDiv.style.justifyContent = "center";
        spanDiv.style.alignItems = "center";
        spanDiv.style.marginTop = "15%";
        cardDivRight.style.padding = "2rem";
        writerLogo.style.height = "25px";
        writerLogo.style.width = "25px";
        writerLogo.style.borderRadius = "50%";
      });
}
catch (err) {
    throw err;
}
};

const entertainmentt = async () =>{
    clearNewsContainer();
    const url =  "https://openapi.programming-hero.com/api/news/category/05";

   
try{
    titleContainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const entertainment = data;
    const length = entertainment.data.length;
    
    
    entertainment.data.map((ele) => {
        titleContainer.style.display = "block";
     
        const cardDiv = document.createElement("div");
        const cardDivLeft = document.createElement("div");
        const cardDivRight = document.createElement("div");
        const spanDiv = document.createElement("div");
  
        const imgLogo = document.createElement("img");
        const newsHeading = document.createElement("h3");
        const limitedDetails = document.createElement("p");
        const fullDetails = document.createElement("p");
        const writerLogo = document.createElement("img");
        const writerName = document.createElement("p");
        const date = document.createElement("p");
        const totalView = document.createElement("p");
        const button = document.createElement("button"); 
  
       
        const limitedDetailText = ele.details.substring(0, 400);
        limitedDetails.innerText = limitedDetailText + " ...";
        fullDetails.innerText = ele.details;
        fullDetails.style.display = "none"; 
        imgLogo.src = ele.thumbnail_url;
        newsHeading.innerText = ele.title;
        writerLogo.src = ele.author.img;
        writerName.innerText = ele.author.name;
        date.innerText = ele.author.published_date;
        totalView.innerHTML = `${ele.total_view}`;
        button.innerText = "Read More";
        button.style.padding = ".4rem";
        button.style.border = "1px solid blue";
        button.style.color = "blue";
        button.style.cursor = "pointer";
        button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click
  
        cardDivLeft.appendChild(imgLogo);
        cardDivRight.appendChild(newsHeading);
        cardDivRight.appendChild(limitedDetails); 
        cardDivRight.appendChild(fullDetails); 
        spanDiv.appendChild(writerLogo);
        spanDiv.appendChild(writerName);
        spanDiv.appendChild(date);
        spanDiv.appendChild(totalView);
        spanDiv.appendChild(button);
  
        newsContainer.appendChild(cardDiv);
        cardDiv.appendChild(cardDivLeft);
        cardDiv.appendChild(cardDivRight);
        cardDivRight.appendChild(spanDiv);
  
        cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "lightgrey";
      cardDiv.style.marginBottom = "25px";
      cardDiv.style.border = "2px solid darkgrey"
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      spanDiv.style.marginTop = "15%";
      cardDivRight.style.padding = "2rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
      });
}
catch (err) {
    throw err;
}
};

const cul = async () =>{
    clearNewsContainer();
    let url = "https://openapi.programming-hero.com/api/news/category/06";
    title.innerHTML = `No news found for the category of <b> <i> Culture News </i></b>`;
    title.style.display = "block";
    title.innerHTML = `No news found for the category of <b> <i> Culture News </i></b>`;
    cardDiv.style.display = "block";
}
   

const artss = async () =>{
    clearNewsContainer();
    const url =  "https://openapi.programming-hero.com/api/news/category/07";

    
try{
    titleContainer.innerText = "";
    const response = await fetch(url);
    const data = await response.json();
    const arts = data;
    const length = arts.data.length;
    
    
    arts.data.map((ele) => {
        titleContainer.style.display = "block";
      
        const cardDiv = document.createElement("div");
        const cardDivLeft = document.createElement("div");
        const cardDivRight = document.createElement("div");
        const spanDiv = document.createElement("div");
  
        const imgLogo = document.createElement("img");
        const newsHeading = document.createElement("h3");
        const limitedDetails = document.createElement("p");
        const fullDetails = document.createElement("p");
        const writerLogo = document.createElement("img");
        const writerName = document.createElement("p");
        const date = document.createElement("p");
        const totalView = document.createElement("p");
        const button = document.createElement("button"); 
  
        
        const limitedDetailText = ele.details.substring(0, 400);
        limitedDetails.innerText = limitedDetailText + " ...";
        fullDetails.innerText = ele.details;
        fullDetails.style.display = "none"; 
        imgLogo.src = ele.thumbnail_url;
        newsHeading.innerText = ele.title;
        writerLogo.src = ele.author.img;
        writerName.innerText = ele.author.name;
        date.innerText = ele.author.published_date;
        totalView.innerHTML = `${ele.total_view}`;
        button.innerText = "Read More";
        button.style.padding = ".4rem";
        button.style.border = "1px solid blue";
        button.style.color = "blue";
        button.style.cursor = "pointer";
        button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click
  
        cardDivLeft.appendChild(imgLogo);
        cardDivRight.appendChild(newsHeading);
        cardDivRight.appendChild(limitedDetails); 
        cardDivRight.appendChild(fullDetails); 
        spanDiv.appendChild(writerLogo);
        spanDiv.appendChild(writerName);
        spanDiv.appendChild(date);
        spanDiv.appendChild(totalView);
        spanDiv.appendChild(button);
  
        newsContainer.appendChild(cardDiv);
        cardDiv.appendChild(cardDivLeft);
        cardDiv.appendChild(cardDivRight);
        cardDivRight.appendChild(spanDiv);
  
        cardDiv.style.display = "flex";
      cardDiv.style.backgroundColor = "lightgrey";
      cardDiv.style.marginBottom = "25px";
      cardDiv.style.border = "2px solid darkgrey"
      spanDiv.style.display = "flex";
      spanDiv.style.justifyContent = "center";
      spanDiv.style.alignItems = "center";
      spanDiv.style.marginTop = "15%";
      cardDivRight.style.padding = "2rem";
      writerLogo.style.height = "25px";
      writerLogo.style.width = "25px";
      writerLogo.style.borderRadius = "50%";
      });
}
catch (err) {
    throw err;
}
};

const getAllNews = async () => {
    clearNewsContainer();
    const url = "https://openapi.programming-hero.com/api/news/category/08";
  
    try {
      titleContainer.style.display = "block";
      const response = await fetch(url);
      const data = await response.json();
      const allNews = data;
      const length = allNews.data.length;
      console.log(length);
  
      allNews.data.map((ele) => {
        title.innerHTML = `<b>${length}</b> news found for the category of <b> <i> Entertainment News </i></b>`;
  
        const cardDiv = document.createElement("div");
        const cardDivLeft = document.createElement("div");
        const cardDivRight = document.createElement("div");
        const spanDiv = document.createElement("div");
  
        const imgLogo = document.createElement("img");
        const newsHeading = document.createElement("h3");
        const limitedDetails = document.createElement("p"); 
        const fullDetails = document.createElement("p"); 
        const writerLogo = document.createElement("img");
        const writerName = document.createElement("p");
        const date = document.createElement("p");
        const totalView = document.createElement("p");
        const button = document.createElement("button"); 
  
        
        const limitedDetailText = ele.details.substring(0, 800);
        limitedDetails.innerText = limitedDetailText + " ...";
        fullDetails.innerText = ele.details;
        fullDetails.style.display = "none"; 
        imgLogo.src = ele.thumbnail_url;
        newsHeading.innerText = ele.title;
        writerLogo.src = ele.author.img;
        writerName.innerText = ele.author.name;
        date.innerText = ele.author.published_date;
        totalView.innerHTML = `${ele.total_view}`;
        button.innerText = "Read More";
        button.style.padding = ".4rem";
        button.style.border = "1px solid blue";
        button.style.color = "blue";
        button.style.cursor = "pointer";
        button.addEventListener("click", () => openPopup(ele.title, ele.details, ele.author, ele.author.published_date, ele.rating.number, ele.rating.badge, ele.total_view)); // Open the pop-up on button click
  
        cardDivLeft.appendChild(imgLogo);
        cardDivRight.appendChild(newsHeading);
        cardDivRight.appendChild(limitedDetails); 
        cardDivRight.appendChild(fullDetails); 
        spanDiv.appendChild(writerLogo);
        spanDiv.appendChild(writerName);
        spanDiv.appendChild(date);
        spanDiv.appendChild(totalView);
        spanDiv.appendChild(button);
  
        newsContainer.appendChild(cardDiv);
        cardDiv.appendChild(cardDivLeft);
        cardDiv.appendChild(cardDivRight);
        cardDivRight.appendChild(spanDiv);
  
        cardDiv.style.display = "flex";
        cardDiv.style.backgroundColor = "lightgrey";
        cardDiv.style.marginBottom = "25px";
        cardDiv.style.border = "2px solid darkgrey"
        spanDiv.style.display = "flex";
        spanDiv.style.justifyContent = "center";
        spanDiv.style.alignItems = "center";
        spanDiv.style.marginTop = "15%";
        cardDivRight.style.padding = "2rem";
        writerLogo.style.height = "25px";
        writerLogo.style.width = "25px";
        writerLogo.style.borderRadius = "50%";
      });
    } catch (err) {
      throw err;
    }
  };
  
  


brNews.addEventListener("click", (e) => {
    e.preventDefault();
    getBreakinNews();
  } );

rgNews.addEventListener("click", (e) => {
    e.preventDefault();
    regNews();
  });

inNews.addEventListener("click", (e) => {
    e.preventDefault();
   intNews();
  });

  spNews.addEventListener("click", (e) => {
    e.preventDefault();
    sp();
  });

  enNews.addEventListener("click", (e) => {
    e.preventDefault();
    entertainmentt();
  });

  culNews.addEventListener("click", (e) => {
    e.preventDefault();
    cul();
  });

  artNews.addEventListener("click", (e) => {
    e.preventDefault();
    artss();
  });

  allNewsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getAllNews();
  })