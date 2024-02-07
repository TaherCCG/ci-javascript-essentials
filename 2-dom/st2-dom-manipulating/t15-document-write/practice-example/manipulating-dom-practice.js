/*
Note: ignore the function here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/
function replace() {
    document.write('<h1>Hello!</h1>');
    document.write("Today is ", Date());
    document.write('<p>Each call to <code>document.write()</code> is appended in order to the document, without newlines.</p>');
    document.write('<p>Notice the css for the &lt;code&gt; tag isn\'t working anymore...</p>');
    document.write('<p>That\'s because the whole document was replaced, including the link to the css file!</p>');

    document.write('The calls above are on new lines because they\'re writing paragraphs and headings. If writing plaintext...');
    document.write('notice that this method will NOT append a new line after each statement.');
    document.write('<br><br>To do that, you can use break tags');
}

