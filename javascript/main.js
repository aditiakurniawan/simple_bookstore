document.querySelectorAll(".btnDetail").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let parent = e.target.parentNode.parentNode;

        let image = parent.querySelector(".card-img-top").src;
        let price = parent.querySelector(".price").innerHTML;
        let title = parent.querySelector(".card-title").innerHTML;
        let description = parent.querySelector(".description") ?
            parent.querySelector(".description").innerHTML :
            "Tidak ada informasi yang tersedia";

        let modalButton = document.querySelector(".btnModal");
        modalButton.click();

        document.querySelector(".modalTitle").innerHTML = title;
        document.querySelector(".modalDescription").innerHTML = description;
        document.querySelector(".modalPrice").innerHTML = price;
        document.querySelector(".modalImage").src = image;

        const nohp = "62851123123";
        let message = `https://api.whatsapp.com/send?phone=${nohp}&text= Halo, saya ingin membeli buku ${title} seharga ${price} ${image}`;
        document.querySelector(".btnBuy").href = message;
    });
});