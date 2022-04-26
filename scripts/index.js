
let container=document.querySelector(".container");

let imagecontainer=document.querySelector(".imagecontainer")



const getdata=async ()=>{

    // let response=await fetch("htps://api.unsplash.com/search/photos?client_id=FDgylyMcUiAcBSxkoTyZoT1Fa6dfKX94t733azJTE64&page=1&query=politics",{

    // method: "GET",
        
    // headers:{

    //     //  'Content-Type': 'application/json',
    //     'client_id':"FDgylyMcUiAcBSxkoTyZoT1Fa6dfKX94t733azJTE64"

    // }})

    // response=await response.json();

    // localStorage.setItem("data", JSON.stringify(response))
    let data=JSON.parse(localStorage.getItem("data"))

    let imagearray=data.results

    mapdata(imagearray)

}

getdata()

function mapdata(data){

    data.map((el)=>{

        const{urls}=el
        const {regular}=urls

        console.log(el)

        let p =document.createElement("p")
        p.textContent="vikas"
        //main child

        let childdiv=document.createElement("div")

        childdiv.className="childdiv"

        //image and info
        let imgdiv=document.createElement("div")
        imgdiv.className="imgdiv"
        let infodiv=document.createElement("div")
        infodiv.className="infodiv"

        //image tag
        let img=document.createElement("img")
        img.src=regular

        let arrowup=document.createElement("i")
        arrowup.className="fa-solid fa-arrow-up"

         let arrowdown=document.createElement("i")
        arrowdown.className="fa-solid fa-arrow-down"

        let comment=document.createElement("i")
        comment.className="fa-solid fa-message"

        let eye=document.createElement("i")
        eye.className="fa-solid fa-eye"


        arrowup.addEventListener("click",()=>{

             arrowup.style.color=="green"? arrowup.style.color="white": arrowup.style.color="green"

             likes.innerHTML=el.likes+1
                        
        })
        //   arrowup.addEventListener("doubleclick",()=>{

        //     arrowup.style.color="white"

        // })

          arrowdown.addEventListener("click",()=>{

             arrowdown.style.color=="red"? arrowdown.style.color="white": arrowdown.style.color="red"
             likes.innerHTML=el.likes-1
                        
        })


        //infodiv childs
        let infodiv_child=document.createElement("div")
        infodiv_child.className="infodiv_child1"
        let infodiv_child2=document.createElement("div")
        infodiv_child2.className="infodiv_child2"

        let title=document.createElement("p")

        title.innerHTML=el.alt_description

        let likes=document.createElement("p")

        likes.innerHTML=el.likes

        let dislikes=document.createElement("p")

        dislikes.innerHTML=el.likes-100<=0?"100":el.likes-100

        let views=document.createElement("p")

        views.innerHTML=el.likes+500






        


         
        


        //appending

        infodiv_child.append(title)

        infodiv_child2.append(arrowup,likes,arrowdown,comment,dislikes,eye,views)

        


        infodiv.append(infodiv_child,infodiv_child2)
        imgdiv.append(img)
        childdiv.append(imgdiv,infodiv)
        imagecontainer.append(childdiv)


        




     


    })

}