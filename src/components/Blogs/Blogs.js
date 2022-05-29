import React from 'react';
import "../Blogs/Blogs.css"
const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="container">
                <div className="main-blog">
                    <div className="row">
                        <div className="col-md-4 border border-1">
                            <h2>Q.Difference between javascript and nodejs?</h2>
                            <p>Javascript is an implementation of ECMAScript, a standard defining the programming language.
                                Browsers have a built-in interpreter for Javascript, along with a bunch of libraries and a run-time environment for working with web pages.

                                Nodejs is an interpreter and environment for javascript which includes a bunch of libraries for using javascript as a general-purpose programming language, with an emphasis on asynchronicity and non-blocking operations. Node actually runs the same interpreter as Google Chrome (V8), but provides a different set of libraries and a different run-time environment.</p>
                        </div>



                        <div className="col-md-4 border border-1">
                            <h2>Q.When should you use nodejs and when should you use mongodb?</h2>
                            <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.</p>
                        </div>
                        <div className="col-md-4 border border-1">
                            <h2>Q.Differences between sql and nosql databases.?</h2>
                            <p>SQL databases are relational, NoSQL databases are non-relational.
                                SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;