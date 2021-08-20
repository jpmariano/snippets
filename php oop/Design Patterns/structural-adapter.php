<?php
/**
 * Reference: http://code.tutsplus.com/tutorials/the-whens-and-whys-for-php-design-patterns--net-27862
 * When: You need to create a connection with a pre-existing and potentially changing module, library, or API.
 * Why: To allow your business logic to rely only on the public methods the adapter offers, and permit changing the other side of the adapter easily.
 */
// A class to which the object is created from
class SimpleBook {
    private $author;
    private $title;
    function __construct($author_in, $title_in) {
        $this->author = $author_in;
        $this->title  = $title_in;
    }
    function getAuthor() {
        return $this->author;
    }
    function getTitle() {
        return $this->title;
    }
}

class BookAdapter {
    private $book;
    function __construct(SimpleBook $book_in) {
        $this->book = $book_in;
    }
    function getAuthorAndTitle() {
        return $this->book->getTitle().' by '.$this->book->getAuthor();
    }
}

  // client

  writeln('BEGIN TESTING ADAPTER PATTERN');
  writeln('');

  //create a new book object
  $book = new SimpleBook("Gamma, Helm, Johnson, and Vlissides", "Design Patterns");
  //Adapter hooking to book
  $bookAdapter = new BookAdapter($book);
  //getAuthorAndTitle connects to the simpleBook
  writeln('Author and Title: '.$bookAdapter->getAuthorAndTitle());
  writeln('');

  writeln('END TESTING ADAPTER PATTERN');

  function writeln($line_in) {
    echo $line_in."<br/>";
  }

?>