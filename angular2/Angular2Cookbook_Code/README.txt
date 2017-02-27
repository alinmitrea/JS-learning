Code files are present for all the chapters


Every recipe in this book is accompanied by a link to the book's companion site,
http://ngcookbook.herokuapp.com/. Recipes that involve code examples will include a
link to a live example on Plunker. This will allow you to inspect and test code in real time
without having to worry about compilation, local servers, or anything of that ilk. It must be
noted, however, that this setup is only appropriate for experimentation and should not be
used for user-facing or production applications.

Angular 2 comes in both JavaScript and TypeScript flavors, but this book aims directly at
the TypeScript edition, since it is syntactically superior (as you will soon realize). For proper
production applications, TypeScript will be compiled into JavaScript before it is served to
the browser. The way this book accomplishes this (and many other code preparation tasks)
is inside a Node.js install on your local machine. Node.js includes the Node Package
Manager (npm), which lets you install and run open source JavaScript software from the
command line.

Some chapters in this book will require that you have Node.js installed before running
commands and launching a local server or test suite. Furthermore, it is recommended (but
not required) that you install the Node Version Manager on top of Node.js, which will make
managing your installed packages much easier.