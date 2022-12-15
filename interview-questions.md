# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling super in a class means that the class is a child of another class. The child class is able to inherit methods and characteristics of the parent class. The super allows for creating an object in the child class and passing arguments to the parent class to attain the methods and characteristics as described before. This allows for more universal ability of the parent class allowing for more child classes to be more distinct while reusing past code.

Researched answer: It is used to pass arguments implicitly to the parent class. It is used to access the method of the parent class while maintaining the individuality of a child class. Utilizing just the super key word without any paretheses will result in an argument error. If no arguments are required for the parent class, then the super keyword must be called with an empty parentheses to pass properly.

2. What is a gem?

Your answer: Gem is a Ruby library that allows for users to perform tests with their code to ensure that it runs properly and as intended. Gem is a Ruby library, that means that it is a collection of files created by developers worldwide, and this library runs behind the scenes to allow the testing to happen in the first place. It's the code that lets the testing happen, the code behind the code. 

Researched answer: A gem is a package of code snippets or dependencies that can be installed for use with Ruby. An example of a gem you can install is RSpec, a testing package. Furthermnore, a gem is a file containing a lib directory, test directory, rakefile, bin, documentation, and a gemspec. It has a version, and tests that are utilized for the framework the developer uses. The gem is used to allow the developer to use the code within without directly inserting the code. This is because gems can be installed off the internet allowing developers to use as neccessary to test different frameworks.


3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is an organized database containing data on the entirety of one particular subject, like the countries database that these laptops came installed with. I'm not sure if it comes in other forms, but I know that it at least can come in table format, with rows dictating single entries (the countries) and the columns dictating different points of data for those entries (country population, country surface area, etc.).


Researched answer: Oh yes, relational databases do indeed come in table format (excel but better). Another point to mention though, is the schema, which is the term defining every table and defining point (column headers) within that specific database. Futhermore, the model of relational databases where every data has a relationship with every other piece fo data, hierarchical databases flow down like a family tree or a pyramid, and children of one parent have no relationship to another parent in the hierarchy.



4. What are primary keys? Why are they important? 

Your answer: Primary keys are a notation device. It is used to indicate that it belongs to one string of information. This is so that strings of information that have the same name do not correspond with each other mixing up the data and making it hard to read. Primary keys allow us to differentiate between data even if the information is exactly the same.

Researched answer: They are unique identifiers for each table record. They can be used to quickly look through a table for a piece of data. Only one primary key is assigned to one table. They are important to relational databases as a table may contain many records in which duplicates occur. It is imperative that the primary key is utilized to differentiate the two duplicates from each other.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: C-Create R-Read U-Update D-Delete (CRUD)


Researched answer: CRUD = create, read, update, delete. HTTP has a couple ways to perform these actions, including "get" (reads) and "delete" (delete). These are methods that HTTP uses to send requests to a server when attempting to fetch elements to populate a browser page. Ironically they are all verbs as well. 

Researched answer: Some other HTTP verbs include post (create), get (read), put and patch (update), and delete (delete).The HTTP verbs also work in tandom with response codes. For example, if a get request was sent and successful, a 200 code would be returned to indicate the resource had been successfully fetched, which in regards to the CRUD actions would indicate it was read.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST is short for representational state transfer. RESTful routing follows a naming convention to combine and simplify the CRUD actions and HTTP methods. The Idea behind rest is to treat all server urls as access points for the various resources on the server. 

2. Ruby on Rails: Ruby on Rails is a full stack framework that lets you implament code on the front and back end of a website. It provides a some pre-built structures that makes coding easier on the developers end.

3. Database migrations: A file in ruby-on-rails that allows you to adjust an already existing database. This involves changing the database in some way, such as adding additional columns or the data type of a column.

4. Params: paramas is a keyword in ruby on rails that returns a specific object, which behaves similarly to a hash.

5. ERB: it stands for embedded Ruby and is a feature that allows you to generate text from templates. The output is just text but it can include a mixture of ruby code and text. It can also be used to generate html.