Data Attribute Tables
========

Micro jQuery plugin for facilitating responsive tables.

##Description
This jQuery plugin will copy the title of each table column, which resides
in the `th` element, and adds it to a data attribute on all of the `td` elements in
that column.  This gives you the ability to display the title in the `content`
property a psuedo element of each `td`.

See my CodePen example:
[http://codepen.io/heyMP/pen/8146f75dcc3b5a593d784b7a77edf353](http://codepen.io/heyMP/pen/8146f75dcc3b5a593d784b7a77edf353)

###Example
Before

    <table>
      <thead>
        <th>Title</th>
      </thead>
      <tbody>
        <tr>
          <td>Description</td>
      </tbody>
    </table>

After

    <table>
      <thead>
        <th>Title</th>
      </thead>
      <tbody>
        <tr>
          <td data-heading="Title">Description</td>
      </tbody>
    </table>

CSS

    td:before {
        content: attr(data-heading);
    }

##Usage
Call the function on and table element that you want to turn into a Data Attribute
Table

    $('table.datatable').dATables();

###Options
You have the option of changing the attributes name.

    $('table.datatable').dATables(attrName: 'customname');

    Output:
    <td data-customname="Title">Description</td>
