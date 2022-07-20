class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
    return this.state;
  }

  set state(state) {
    if (state <= 0) {
        this._state = 0;
    } else if (state >= 100) {
        this._state = 100;
    } else {
        this._state = state;
    }
  }
  
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    };
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    };
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(item => item[type] === value);
        return book === undefined ? null : book;
    }

    giveBookByName(bookName) {
        let i = this.books.findIndex(item => item.name === bookName);
        if (i === -1) {
            return null;
        } else {
            return this.books.splice(i, 1)[0];
        }
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = [];
    }

    addMark(mark, subject) {
        if (mark < 1 || mark > 5) {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        } else {
            let item = this.subjects.find(item => item.subject === subject);
            if (item === undefined) {
                let obj = {};
                this.subjects.push(obj);
                obj.subject = subject;
                obj.marks = [mark];
            } else {
                item.marks.push(mark);
            }
        }
    }

    getAverageBySubject(subject) {
        let item = this.subjects.find(item => item.subject === subject);
        if (item === undefined) {
            return "Несуществующий предмет"
        } else {
            let result = item.marks.reduce((sum, current) => sum + current, 0);
            return result / item.marks.length;
        }
    }

    getAverage() {
        let result = 0;
        let count = 0;
        for (let i in this.subjects) { 
            result += this.subjects[i].marks.reduce((sum, current) => sum + current, 0);
            count += this.subjects[i].marks.length;
            }
        return result / count;
    }
        

    exclude(reason) {
        delete this.subjects;
        this.excluded = reason;
    }
}