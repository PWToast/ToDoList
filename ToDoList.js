var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length; 
}

function listLength(){
    return item.length;
}

function createListElement(){ //ฟังก์ชั่นสร้าง List 
    var li = document.createElement("li"); // สร้าง Element "li"
    li.appendChild(document.createTextNode(input.value)); // สร้างข้อความจาก input field ที่อยู่ใน li text
    ul.appendChild(li); // add li to ul
    input.value = ""; // เคลียค่าช่อง input

    function crossOut(){ // ฟังก์ชั่นสำหรับกดคลิ๊ก list ที่ทำเสร็จแล้ว
        li.classList.toggle("done"); 
    }

    li.addEventListener("click", crossOut); // เมื่อมีการคลิกที่ li ฟังก์ชั่น crossOut ก็จะทำงานพื้นหลัง li ก็จะกลายเป็นสีเขียว

    var dBtn = document.createElement("button");  // ตัวแปรสร้างปุ่ม
    dBtn.appendChild(document.createTextNode("ลบ")); // dBtn สร้างปุ่ม "ลบ"
    li.appendChild(dBtn);// li ปรากฏ dBtn ที่เป็นปุ่ม Delete 
    dBtn.addEventListener("click", deleteListItem); //เมื่อมี event click ให้ฟังก์ชั่น deleteListItem ทำงาน

    function deleteListItem(){  // ฟังก์ชั่นลบ list
        li.classList.add("delete");
    }
}
 
function addListAfterClick(){ //ฟังก์ชั่นถ้ากดคลิ๊กที่ดินสอจะสร้าง list
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeyPress(event) { //ฟังก์ชั่นถ้ากดปุ่ม Enter บนคีบอร์ดจะสร้าง list
    if (inputLength() > 0 && event.which === 13){ // 13 = enter บนปุ่มคีบอร์ด
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick); // ถ้าคลิ๊กที่ดินสอจะสร้างlist
input.addEventListener("keypress", addListAfterKeyPress); // ถ้ากด enter จะสร้าง list