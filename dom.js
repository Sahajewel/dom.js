// getElement by id
const h2 = document.getElementById("heading")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    //  when you need to change tag and content both
h2.innerHTML="<h1>This is first text</h1>"
})


// get elements by class
// it gives a collection list not orginally array, I can't also use this map, filter or forEach
const headingClass = document.getElementsByClassName("headingClass")
const classBtn = document.getElementsByClassName("classBtn")


classBtn[0].addEventListener("click", function(){
    // only change content not tag
     headingClass[0].textContent = "This is class 2"
})

const item = document.getElementsByClassName("item")
console.log(item)

//  convert collection to array
const item2 = [...document.getElementsByClassName("item")]
console.log(item2)
// convert collection to array
const item3 = Array.from(document.getElementsByClassName("item"))
console.log(item3)

const itemBtn = document.getElementsByClassName("itemBtn")

for(let i=0; i<itemBtn.length; i++){
   itemBtn[i].addEventListener("click", ()=>{
    for(let j=0; j<item.length; j++){
        item[j].textContent="final item"
        
    }
 
   })
}

// get elements by tag name

const para = document.getElementsByTagName("p")
const paraBtn = document.getElementsByTagName("button")

paraBtn[3].addEventListener("click", ()=>{
    para[0].textContent="This is a Paragraph 2"
})


// textContent
// এটি একটি এলিমেন্টের ভেতরে থাকা সব টেক্সট রিটার্ন করে, এমনকি যে টেক্সটগুলো CSS দিয়ে হাইড করা (যেমন: display: none) সেগুলোও সে দেখতে পায়। এটি খুব দ্রুত কাজ করে।

// ২. innerText
// এটি অনেকটা স্মার্ট। এটি শুধু সেই টেক্সটটুকুই দেখায় যা ব্রাউজারে দেখা যাচ্ছে। যদি কোনো টেক্সট CSS দিয়ে হাইড করা থাকে, innerText সেটি দেখাবে না। এটি ব্রাউজারের লেআউট ক্যালকুলেট করে কাজ করে, তাই textContent-এর চেয়ে সামান্য ধীরগতির হতে পারে।

// ৩. textNode
// এটি কোনো প্রোপার্টি নয়, বরং এটি একটি Object বা Node। DOM-এর ভাষায়, আপনার HTML-এর প্রতিটা ছোট ছোট টেক্সট অংশ এক একটি textNode।

{/* <h1>Hello</h1> — এখানে <h1> হলো একটি Element Node, আর তার ভেতরের "Hello" হলো একটি Text Node। আপনি যখন জাভাস্ক্রিপ্ট দিয়ে নতুন কোনো টেক্সট তৈরি করতে চান, তখন এটি ব্যবহার করা হয়: document.createTextNode("Some text")। */}

const element = document.getElementById("test");

console.log("1",element.textContent); 
// আউটপুট: "Hello Hidden World" (সব দেখাবে)

console.log("2",element.innerText);   
// আউটপুট: "Hello" (লুকানো অংশ দেখাবে না)

console.log(element.childNodes[0]); 
// আউটপুট: "Hello" (এটি একটি Text Node অবজেক্ট হিসেবে দেখাবে)

// get element by queryselector

const queryClass = document.querySelector(".queryClass")
const queryClassBtn = document.querySelector(".queryClassBtn")
const queryId = document.querySelector("#queryId")
const queryIdBtn = document.querySelector("#queryIdBtn")
const queryTag = document.querySelector("h6")
const allBtns = document.querySelectorAll("button")
const btnByIndex = allBtns[6]
const lastBtn = allBtns[allBtns.length-1]
queryClassBtn.addEventListener("click", ()=>{
    queryClass.textContent ="This is query Selector by class changed"
})
queryIdBtn.addEventListener("click", ()=>{
    queryId.textContent="This is query Selector id changed"
})
btnByIndex.addEventListener("click", ()=>{
    queryTag.textContent="This is query Selector tag changed"
})


// getAttribute() এবং setAttribute()

const img = document.querySelector("img")
const imgBtn = document.getElementById("imgBtn")
console.log(img.getAttribute('src'))


imgBtn.addEventListener("click", ()=>{
    const currentSrc = img.getAttribute("src")
    if(currentSrc==="img.avif"){
        img.setAttribute("src", "sky.avif")
    }else{
        img.setAttribute("src", "img.avif")
    }


})

// direct property access
// img.src ="sky.avif"

const input = document.querySelector("input")
input.value="default value"
input.placeholder="write your name"

// play with css

// const div = document.getElementById("div")
// const divBtn = document.getElementById("divBtn")
// div.style.background="black"
// div.style.width="200px"
// div.style.height="200px"
// div.style.borderRadius= "20px"
// div.style.marginTop="20px"

// class list add/remove

// div.classList.add("add")
divBtn.addEventListener("click",()=>{
    div.classList.toggle("add")
    if(div.classList.contains("add")){
        console.log("ase")
    }else{
    console.log("nai")
    }
})

// create element
const newDiv = document.createElement("div")
newDiv.textContent="This is my div";
newDiv.classList.add("box")
document.body.appendChild(newDiv)

// adjacent element
const container = document.getElementById("container")
container.classList.add("box")
container.insertAdjacentHTML('beforebegin', '<p>before begin</p>')
container.insertAdjacentHTML('afterbegin','<p>after begin</p>')
container.insertAdjacentHTML('beforeend','<p>before end</p>')
container.insertAdjacentHTML('afterend','<p>After end</p>')
// container.remove()
// container.parentNode.removeChild(container)
// container.innerHTML=''
container.firstChild.remove()
container.lastChild.remove()

const testEvent = document.getElementById("testEvent")
const eventBtn = document.getElementById("eventBtn")

//  all event

// click event
// eventBtn.addEventListener("click", ()=>{
//     testEvent.style.background="red"
// })

// dbl click
// eventBtn.addEventListener("dblclick", ()=>{
//     testEvent.style.fontSize="20px"
// })

// mouse event
// eventBtn.addEventListener('mouseenter',()=>{
//     testEvent.style.border="1px solid red"
// })

// mouse leave
eventBtn.addEventListener("mouseleave", ()=>{
    testEvent.style.border="1px solid red"
})
// input event
const inputEvent = document.getElementById("input")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
// inputEvent.addEventListener("input", (e)=>{
//     console.log("current value", e.target.value)
// })
// inputEvent.addEventListener("change",(e)=>{
//     console.log("change value",e.target.value )
// })

inputEvent.addEventListener("keydown",(e)=>{
    console.log(e.key)
    console.log(e.code)
    console.log(e.altKey)
})
inputEvent.addEventListener("focus", ()=>{
    inputEvent.style.background="gray"
})
inputEvent.addEventListener("blur", ()=>{
    inputEvent.style.borderColor="red"
})
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("submitted")
})


// next Event Bubbling এবং Capturing 🫧
// event bubbling bottom to top and capturing top to bottom to go

const child = document.getElementById("child")
const childPara = document.getElementById("childPara")
child.addEventListener("click", ()=>{
    console.log("child to parent")
})
childPara.addEventListener("click", ()=>{
    console.log("parent to child")
},true)