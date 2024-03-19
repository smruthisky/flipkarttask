

const api_url="https://fakestoreapi.com/products";
async function fetchdata(){
    try{
        const res= await fetch(api_url);
        const data=await res.json();
        const titles=data.map(y => y.title);
        const prices=data.map(x=>x.price);
        const img=data.map(x => x.image);
        
        const des=data.map(d=> d.description);
        // const productid=data.map(v=>v.id);
            //  console.log(productid);
        for(let i=0;i<data.length;i++){
            const product=data[i];
            // console.log(product);
          // const productpageurl=`product${i}.html`;
        // console.log(product.rating.rate);
        // const contents=` ${titles[i]}`
        //  const images=`<img  src=" ${ img[i]}"/>`
        //  const price=` ₹${prices[i]}`;
       const template=`<div class="flex mb-6  ">
            
             <div class=" card  shadow-lg ml-5 mb-2 w-56 h-80 pr-3">
                 <div class="gallery  ml-9 mt-4 " >
                 
                 <img class="h-40 w-40 object-contain product-image" src="${product.image}" 
                            data-id="${product.id}"
                            data-title="${product.title}"
                            data-price="${product.price}"
                            data-category="${product.category}"
                            data-description="${product.description}"
                            data-rating="${product.rating.rate}"
                            data-count="${product.rating.count}" />
                 </div>
                 <div class="details w-56   pt-10 pl-4 flex bg-white ">
                     <div class="flex-col ">
                         <p class="text-gray-400 ml-2 text-sm ">Sponsored</p>
                         <div class="flex" > 
                             <p class="caption text-sm w-28 h-6 ml-2 truncate    ">${titles[i]}
                             </p>
                             <img class="h-4 w-16 ml-1 mt-1 justify-end" src="fa_62673a.png" alt="">
                         </div>
                       
                        
                         <div class="flex mt-1">
                           <p class="price ml-2 font-semibold text-base ">₹${prices[i]}</p>
                           <p class="text-gray-400 pl-2"><s> ₹277</s></p>
                           <p class="text-green-500 text-sm pl-3  font-semibold">71% off</p>
                          </div>
                          
                          
                     </div>
     
                 </div>
             </div>
             
             
         </div>`;
         document.querySelector('.content').innerHTML+=template;
        
        

        }
        const productImages = document.querySelectorAll('.product-image');
        console.log(productImages);
        productImages.forEach(image => {
            image.addEventListener('click', () => {
                const productDetails = {
                    id: image.dataset.id,
                    title: image.dataset.title,
                    price: image.dataset.price,
                    category: image.dataset.category,
                    description: image.dataset.description,
                    rating: image.dataset.rating,
                    count: image.dataset.count,
                    image: image.src
                    
                    
                };

                localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

                
                window.location.href = 'items.html';
                console.log(localStorage);
            });
        });

    } catch (err) {
        console.error("unable to fetch")
    }
}

fetchdata();