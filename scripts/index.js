
let container=document.querySelector(".container");

let imagecontainer=document.querySelector(".imagecontainer")

let page=1


const dataurl=`https://api.unsplash.com/photos?page=${page}&client_id=FDgylyMcUiAcBSxkoTyZoT1Fa6dfKX94t733azJTE64&per_page=20`


const getdata=async (url)=>{

    let response=await fetch(url,{

    method: "GET",
        
    headers:{

        'Content-Type': 'application/json',
        'client_id':"FDgylyMcUiAcBSxkoTyZoT1Fa6dfKX94t733azJTE64"

    }})

    response=await response.json();

    response.length==20?mapdata(response):mapdata(response.results)


    console.log(response)

    //  localStorage.setItem("data", JSON.stringify(response))
    //  let data=JSON.parse(localStorage.getItem("data"))
    
    //  console.log(data)
    //  mapdata(response)

}

 getdata(dataurl)






let input_box=document.querySelector("#input_box")

  let query

input_box.addEventListener("input",()=>{
    
    query=input_box.value
    
    console.log(query)
    // var search=`https://api.unsplash.com/search/photos?client_id=FDgylyMcUiAcBSxkoTyZoT1Fa6dfKX94t733azJTE64&page=1&query=${query}`
    debounce(getdata,1000)
    
    
})



let searchdata;

 function debounce(fu,delay){

     
        if(searchdata){
            console.log(searchdata)
            clearTimeout(searchdata)
        }

       searchdata=setTimeout(function(){


          fu(`https://api.unsplash.com/search/photos?client_id=FDgylyMcUiAcBSxkoTyZoT1Fa6dfKX94t733azJTE64&page=1&query=${query}`)

        },delay)


       
            
    }


function mapdata(data){

    imagecontainer.innerHTML=null

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

             el.likes=el.likes+1
             

             likes.innerHTML=el.likes


                        
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

        let text=el.alt_description==null?"if coke snot were a person":el.alt_description
        title.innerHTML=text



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

const getpage=()=>{
    setTimeout(() => {
        page++
        getdata()

        
    }, 500);
}

window.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop,clientHeight}=document.documentElement

    console.log(scrollTop+clientHeight, scrollHeight)
    if((scrollTop+clientHeight)+50>=scrollHeight){
        getpage()
        
      
    }

    
})