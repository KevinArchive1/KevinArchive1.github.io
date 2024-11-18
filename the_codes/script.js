document.getElementById("destination").addEventListener("click", ()=> {
    window.location.href="https://www.google.com/maps/search/dll/@13.9471763,121.5890127,20z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
})

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("kill me")
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

window.addEventListener('resize', function() {
    const overlay = document.getElementById("myNav");
    const minWidth = 768; 

    if (window.innerWidth > minWidth && overlay.style.height === "100%") {
        closeNav();
    }
});


function display_hidden_text(sectionId) {
    const moretext = document.getElementById(`more-text${sectionId}`);
    const dots = document.getElementById(`dots${sectionId}`);
    const readMore = document.getElementById(`read-more${sectionId}`);

    if (moretext.classList.contains("hide")) {
        moretext.classList.remove("hide");
        dots.style.display = "none";
        readMore.textContent = "Read Less";
    } else {
        moretext.classList.add("hide");
        dots.style.display = "inline"
        readMore.textContent = "Read More"
    }
}

let current_post = 0;
const postsToShow = 3;

function loadMore() {
    const post = document.querySelectorAll(".blog-post");
    let showPost = 0;

    for (let i = current_post; i < post.length && showPost < postsToShow; i++) {
        if (post[i].classList.contains("hidden")) {
            (post[i].classList.remove("hidden"));
            showPost++
        }
    }
}

function search_post() {
    const user_input = document.getElementById("search-input");
    const filter = user_input.value.toLowerCase();
    const post = document.querySelectorAll(".blog-post");
    const empty = document.querySelector(".no-result");
    const hidden_post = document.querySelectorAll(".hidden")

    let visiblePosts = false;

    post.forEach(post => {
        const text = post.textContent || post.innerText;
        if (text.toLowerCase().indexOf(filter) >- 1) {
            post.style.display = "";
            visiblePosts = true;
        } else {
            post.style.display = "none";    
        }
    });

    hidden_post.forEach(hidden => {
        const hidden_text = hidden.textContent || hidden.innerText;
        if (hidden_text.toLowerCase().indexOf(filter) >- 1) {
            hidden.style.display = "flex";
            visiblePosts = true;
        } else {
            hidden.style.display = "none";
        }
    });

    empty.style.display = visiblePosts ? "none" : "flex";

}