//import

export const toast = (text)=>{
    Toastify({
        text,
        duration:3000,
        close:true,
        style:{
            background:"red",
            fontSize:"18px",
            fontWeight:"600px",
            borderRadius:"10px"
        }
    }).showToast();
}