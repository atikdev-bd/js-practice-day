function paperRequirements(firstBook, secondBook, thirdBook) {
    //per book page//
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;
///per book page and total book cupy///
    const firstBookTotalPage = firstBookPage * firstBook;
    const secondBookTotalPage = secondBookPage * secondBook;
    const thirdBookTotalPage = thirdBookPage * thirdBook;
    const totalBookPage = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
    return totalBookPage ; 

}
const totalBookCupy = paperRequirements(800, 500, 700)
console.log('Total page:', totalBookCupy)