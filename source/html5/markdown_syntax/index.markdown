---
layout: page
title: "Markdown Syntax"
date: 2011-12-08 18:40
comments: true
sharing: true
footer: true
---

---------------------------------------

## Inline HTML ##

&copy;

AT&T

4 < 5


---------------------------------------

## Paragraphs and br ##

Multiple lines can be written.
And will continue on the next line.  
We are about to put a br by adding two spaces and <return> to this last dot.  
Did it work?

---------------------------------------

## Headers ##


This is an H1
=============

This is an H2
-------------

# This is an H1

## This is an H2

###### This is an H6


---------------------------------------

## Blockquotes ##

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.


> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.


> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");


---------------------------------------

## Lists ##

*   Red
*   Green
*   Blue

-   Red
-   Green
-   Blue

1.  Bird
2.  McHale
3.  Parish


*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.
    
    
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.


*   Bird
*   Magic


*   Bird

*   Magic


*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.


*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.


*   A list item with a code block:

        <code goes here>

1986. What a great season.

1986\. What a great season.


---------------------------------------

## Code blocks ##


This is a normal paragraph:

    This is a code block.



Here is an example of AppleScript:

        tell application "Foo"
            beep
        end tell


<div class="footer">
    &copy; 2004 Foo Corporation
</div>

---------------------------------------

## Horizontal Rules ##

* * *

***

*****

- - -

---------------------------------------


## Links ##

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

See my [About](/about/) page for details.

This is [an example][id] reference-style link.

[id]: http://example.com/  "Optional Title Here"

[foo]: http://example.com/  "Optional Title Here"
[foo]: http://example.com/  'Optional Title Here'
[foo]: http://example.com/  (Optional Title Here)

[id]: <http://example.com/>  "Optional Title Here"

[id]: http://example.com/longish/path/to/resource/here
    "Optional Title Here"

    [link text][a]
    [link text][A]
    
[Google][]

[Google]: http://google.com/


Visit [Daring Fireball][] for more information.
[Daring Fireball]: http://daringfireball.net/

I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
  

Implicit referencing

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/        "Google"
[yahoo]:  http://search.yahoo.com/  "Yahoo Search"
[msn]:    http://search.msn.com/    "MSN Search"


I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").

---------------------------------------

## Emphasis ##

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

un*frigging*believable

\*this text is surrounded by literal asterisks\*

---------------------------------------

## Code ###

Use the `printf()` function.

``There is a literal backtick (`) here.``

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

Please don't use any `<blink>` tags.
    
`&#8212;` is the decimal-encoded equivalent of `&mdash;`.

---------------------------------------

## Images ##

Inline images

![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")


![Alt text][id]
[id]: url/to/image  "Optional title attribute"

No way to specify image dimensions in markdown

---------------------------------------

## Automatic links ##

<http://example.com/>

<address@example.com>


---------------------------------------

## Backlash ##

\*literal asterisks\*

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   minus sign (hyphen)
    .   dot
    !   exclamation mark
