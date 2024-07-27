const qrFormEl=document.getElementById("qrForm");
const qrImageEl=document.getElementById("qrImage");
const qrContainerEl=document.getElementById("qrContainer");
const qrInputTextEl=document.getElementById("qrInputText");
const qrgenerateBtnEl=document.getElementById("generateBtn");
const renderQRCode=(url)=>{
  if(!url)return;
  qrImageEl.src=url;
  qrgenerateBtnEl.innerHTML="QR Code Generating...";


 setInterval( qrImageEl.addEventListener("load",()=>{
    qrgenerateBtnEl.innerHTML="Generated QR Code";
    qrContainerEl.classList.add("show");
  }),500)
};




qrFormEl.addEventListener("submit",(event)=>{
  event.preventDefault();
  const formData=new FormData(qrFormEl);
  const text=formData.get("qrText");
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
//   console.log("text",text);

  renderQRCode(qrCodeUrl);
})


qrInputTextEl.addEventListener("keyup",()=>{
   if(!qrInputTextEl.value.trim())
   {
    qrContainerEl.classList.remove("show");
   }
});