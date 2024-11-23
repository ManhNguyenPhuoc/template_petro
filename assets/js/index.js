function changeTextByClass() {
  // Truy cập tất cả các phần tử có class "my-class"
  const elements = document.querySelectorAll(".text-info");

  // Duyệt qua từng phần tử và thay đổi nội dung
  elements.forEach((element, index) => {
    element.textContent = `Ta đã hack được footer! ${index + 1}`;
  });
}
