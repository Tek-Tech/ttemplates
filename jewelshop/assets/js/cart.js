let cart = null
function update_cart(cb=null){
    const req = new XMLHttpRequest()
    req.open('GET','/ctrl/getcart.php')
    req.addEventListener(
        'load',e=>{
            if(req.response){
                try{
                    cart = JSON.parse(req.response)
                }catch(e){

                }
                if(cb)cb(cart)
            }
        }
    )
    req.send()
}
function add_to_cart(id,quan = 1){
    const data = new FormData()
    data.append('article',id)
    data.append('quantite',quan)
    const req = new XMLHttpRequest()
    req.open('POST','/ctrl/addtocart.php')
    req.addEventListener(
        'load',e=>{
            if(req.response == 'ok'){
                update_cart()
            }
        }
    )
    req.send(data)
}
function del_from_cart(id,quan = 1){
    const data = new FormData()
    data.append('article',id)
    data.append('quantite',quan)
    const req = new XMLHttpRequest()
    req.open('POST','/ctrl/delfromcart.php')
    req.addEventListener(
        'load',e=>{
            if(req.response == 'ok'){
                update_cart()
            }
        }
    )
    req.send(data)
}
update_cart()