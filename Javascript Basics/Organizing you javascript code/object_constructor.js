function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.read = read;
    this.pages = pages;
    this.info = () =>{
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}

