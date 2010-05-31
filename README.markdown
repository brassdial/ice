# ice

This project allows user-submitted templates to be written in the javascript programming language.  It is similar to Liquid in terms of safety, but uses javascript to leverage the powers of a language most developers are familiar with.

It runs the templates through an erb-ish parser and then uses the [TheRubyRacer Gem](http://github.com/cowboyd/therubyracer) to interpet the javascript using Google's V8 javascript engine.  Your users can then write ice templates like:

    <table>
        <tr><th>Name</th><th>Email</th></tr>
        <% for (i = 0; i < users.length; i++) { %>
            <tr>
                <td><%= user.name %></td><td><%= mail_to(user.email) %></td>
            </tr>
        <% } %>
    </table>

## Why another templating engine

Liquid is excellent but has several disadvantages

* Hard to extend without knowing liquid internals
* Introduces yet-another-language, whereas many designers are already familiar with javascript
* Doesn't allow template editors to use a rich object model and create their own functions
* Doesn't have a rich set of support libraries like javascript brings to the table.

Laminate uses the Lua language, which is possible, but it stile

In fact, we call this project "ice" as a tribute to "liquid" (keeping the metaphor alive, we use "Cubes" where they have "Drops").

## to_ice

Every object is revealed to the templates via their to_ice method.  This helps filter the objects that are passed into the javascript, so people editing the page only have access to a sanitized version of your data.

Instances of some classes like String and Numeric just return themselves as the result of to_ice.  Hashes and Arrays run to_ice recursively on their members.

## ActiveRecord modifications

To make life easy, since most complex objects passed to the templates will be subclasses of ActiveRecord::Base, the default behaviour of ActiveRecord is to pass itself in to a class with the name name, followed by the word "Cube".

Therefore an instance of a User class will ice itself by calling

    UserCube.new self

## BaseCube Class

In order for everything to work easily, you can have your cubes inherit from our Ice::BaseCube class.  Your cubes inheriting from it can then determine what additional attributes they want to reveal.  For example

    class BookCube < Ice::BaseCube
      revealing :title, :author_id, :genre_id
    end

would provide a cube with access to the title, author_id and genre properties of the underlying ActiveRecord.

These cubes also have belongs_to and has_many associations, so you can write things like:

    class ArticleCube < Ice::BaseCube
      has_many :comments, :tags
      belongs_to :author, :section
    end

This brings in association helper functions such as comment_ids, num_comments, has_comments, comments, author_id, and author.

## Note on Patches/Pull Requests

* Fork the project.
* Make your feature addition or bug fix.
* Add spec for it. This is important so I don't break it in a future version unintentionally.  In fact, try to write your specs in a test-first manner.
* Commit, do not mess with rakefile, version, or history.
  (if you want to have your own version, that is fine but bump version in a commit by itself I can ignore when I pull)
* Send me a pull request.

## Todo

* Allow .ice view files
* Add in form builders from clots project
* Break form builders and helpers out into separate javascript project that can be included
* Allow mappings for other ORMs than ActiveRecord
* Haml support

## Copyright

Copyright (c) 2010 Nate Kidwell. See LICENSE for details.