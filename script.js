const siteNames = {
    qweb:"<iframe id='if' frameborder='0' src='https://rashmi7205.github.io/quiz-web/'><b>IFrame is unavailable here</b></iframe>",
    mweb:"<iframe id='if' frameborder='0' src='https://rashmi7205.github.io/Music-Web-index.html/'><b>IFrame is unavailable here</b></iframe>",
    bcodes:"<iframe id='if' frameborder='0' src='https://rashmi7205.github.io/beginnerscode//'><b>IFrame is unavailable here</b></iframe>"
    
  
}

function changePage(ele) {
    let pre_ref = document.querySelector(".pre-load-img")
    let pr_view = document.querySelector(".proj-view");
    if(pre_ref != null)
    {
        pre_ref.remove();
    }
    pr_view.innerHTML = siteNames[ele.value];
}


//Code for random quote generation
//Array    
const quoteArray = [
    {
        "id": "5a6ce86e2af929789500e7e4",
        "author": "Edsger W. Dijkstra",
        "en": "Computer Science is no more about computers than astronomy is about telescopes."
    },
    {
        "id": "5a6ce86e2af929789500e7d7",
        "author": "Edsger W. Dijkstra",
        "en": "Simplicity is prerequisite for reliability."
    },

    {
        "id": "5a6ce86d2af929789500e7ca",
        "author": "Edsger W. Dijkstra",
        "en": "The computing scientist’s main challenge is not to get confused by the complexities of his own making."
    },

    {
        "id": "5a6ce86f2af929789500e7f3",
        "author": "Edsger W. Dijkstra",
        "en": "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
    },
    {
        "id": "5a6ce86e2af929789500e7d9",
        "author": "Edsger W. Dijkstra",
        "en": "A program is like a poem: you cannot write a poem without writing it. ",
    },
    {
        "id": "5a6ce86f2af929789500e7f8",
        "author": "Tony Hoare",
        "en": "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies,and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."
    },
    {
        "id": "5a6ce86f2af929789500e807",
        "author": "Jeff Hammerbacher",
        "en": "The best minds of my generation are thinking about how to make people click ads."
    },
    {
        "id": "5a6ce86f2af929789500e7f9",
        "author": "Edsger W. Dijkstra",
        "en": "The tools we use have a profound and devious influence on our thinking habits,and therefore on our thinking abilities."
    },
    {
        "id": "5a6ce86f2af929789500e7f5",
        "author": "Edsger W. Dijkstra",
        "en": "How do we convince people that in programming simplicity and clarity — in short: what mathematicians call \"elegance\" — are not a dispensable luxury,but a crucial matter that decides between success and failure?"
    },
    {
        "id": "5a6ce86f2af929789500e80b",
        "author": "Fred Brooks",
        "en": "Adding manpower to a late software project makes it later."
    },
    {
        "id": "5a6ce86f2af929789500e809",
        "author": "Michael Stal",
        "en": "Sometimes there is a silver bullet for boosting software engineering productivity."
    },
]

//onload view of the quote
window.onload = () => {
    //random element
    let quoteEle = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    let q_sec = document.querySelector("#q-sec");
    let ath_name = document.querySelector("#author-name");
    if (screen.width >= 1200) {
        q_sec.innerText = `"${quoteEle.en}"`;
        ath_name.innerHTML = `-${quoteEle.author}`;
    }
    if (screen.width <= 440) {
        let inn_ele = document.querySelector(".intro-img img");
        inn_ele.src = "#";
        document.querySelector(".intro-img p").innerHTML = `"<i>${quoteEle.en}"<br><b style="color:red">-${quoteEle.author}<b></i>`;


    }
}



//End of quote section

//js for language list LNAGUAGE LIST COMPONENT

const language_arr = [
    {
        lname: "html",
        col: "red",
        prog: "80%",
        icon:"<i class='fa-brands fa-html5'></i>"
    },
    {
        lname: "css",
        col: "blue",
        prog: "74%",
        icon:"<i class='fa-brands fa-css3-alt'></i>"
    },
    {
        lname: "js",
        col: "#FFB100",
        prog: "50%",
        icon:"<i class='fa-brands fa-js'></i>"
    },
    {
        lname: "cpp",
        col: "#6F1AB6",
        prog: "80%",
        icon:"<i class='fab fa-cuttlefish'>++</i>"
    },
    {
        lname: "python",
        col: "#205295",
        prog: "55%",
        icon:"<i class='fa-brands fa-python' style='color:yellow'></i>"
    },
    {
        lname: "java",
        col: "#FBC252",
        prog: "67%",
        icon:"<i class='fa-brands fa-java' style='color:red'></i>"
    },
    {
        lname: "c",
        col: "blue",
        prog: "60%",
        icon:"<i class='fa-brands fa-c'></i>"
    }

]
let list_sel = document.querySelector(".language-list");

let x = language_arr.map(getListElement);

function getListElement(item) 
{
    return `<span id="l-items"><span id="lng-title" style="background-color:${item.col}">${item.lname}${item.icon}</span><div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width:${item.prog}"></div>
  </div></span>`;
}


displayListItem();
function displayListItem() {
    let i = 0;
    while (i < x.length) {
        list_sel.innerHTML += x[i];
        i++;
    }

}

// list_sel.innerHTML = x;

//other activites js

const act_detial =[
    {
        logo:"images/leetcode-3521542-2944960.png",
        platform:"Leetcode",
        qsolved:"<i class='fa-regular fa-circle-check' style='color:green;'></i>  39 solved",
        prf_link:"https://leetcode.com/rashmiranjanbehera8260/",    
    }, {
        logo:"images/hackerRank.jfif",
        platform:"HackerRank",
        qsolved:"5<i class='fa-solid fa-star' style='color:yellow;'></i>   Star",
        prf_link:"https://www.hackerrank.com/rashmiranjanbeh3?hr_r=1",    
    }, {
        logo:"images/cstudio.jfif",
        platform:"codestudio",
        qsolved:"<i class='fa-regular fa-circle-check' style='color:green;'></i>  229 solved",
        prf_link:"https://www.codingninjas.com/codestudio/profile/991ce6df-5d30-4ce4-93c8-c09982f90c52",    
    },
   
    {
        logo:"images/GeeksforGeeks.png",
        platform:"geeksforgeeks",
        qsolved:"<i class='fa-regular fa-circle-check' style='color:green;'></i>  68 solved",
        prf_link:"https://auth.geeksforgeeks.org/user/rashmiranjanbehera8260/",    
    },
    {
        logo:"images/11960354.png",
        platform:"codechef",
        qsolved:"<i class='fa-regular fa-circle-check' style='color:green;'></i>  57 solved",
        prf_link:"https://www.codechef.com/users/rashmi_7205",    
    }
]
let list_div_selector = document.querySelector(".list-text");
let list_ele_act = act_detial.map(getActItem);

function getActItem(item)
{
    return `<div class="list-item">
    <h5><img src='${item.logo}' alt='image'>${item.platform}</h5>
    <h5>${item.qsolved}</h5>
    <a href="${item.prf_link}">view</a>
  </div>`;
}
displayActItem();
function displayActItem() {
    let i = 0;
    while (i < list_ele_act.length) {
        list_div_selector.innerHTML += list_ele_act[i];
        i++;
    }

}
