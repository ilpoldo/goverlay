Goverlay Go!
============

Quick grid overlay for webpages that does not require png.

* Update according your grid properties changing a line of javascript.
* Transparent overlay.
* Toggle on and off.
* No messing with the css


Install
-------

Make sure you have jquery and raphael and then load goverlay.js on your page:

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="http://github.com/DmitryBaranovskiy/raphael/raw/master/raphael.js" charset="utf-8"></script>
    <script type="text/javascript" src="http://github.com/ilpoldo/goverlay/raw/master/goverlay.js" charset="utf-8"></script>
    
    
Usage (Ctrl + Shift + G)
------------------------
Try it now! Open the console and load raphael and goverlay!
    
    jQuery.getScript('http://github.com/DmitryBaranovskiy/raphael/raw/master/raphael.js', function(){jQuery.getScript('goverlay/raw/master/goverlay.js', function(){alert('now you can create the grid!')});});

Wait until the alert and now create a grid inside this github page:

    jQuery.goverlay(30,10,18,$('#main > div:nth-child(2)'));

Now use **Ctrl + Shift + G** to toggle the grid!

On your page, to create a grid with 30px columns and 10px gutters, and a 18px base line.
    
    <script type="text/javascript" charset="utf-8">
    //<![CDATA[
    $(document).ready(function(){
      jQuery.goverlay(30,10,18);
    });
    //]]>
    </script>

By default the grid is created inside an element with id="container", if you want to change i to something else:

    jQuery.goverlay.(30,10,18,$('#other-container'));

Bugs
----

Please use the Github issues.


Note on Patches/Pull Requests
-----------------------------
 
* Fork the project.
* Make your feature addition or bug fix.
* Add tests for it. This is important so I don't break it in a
  future version unintentionally.
* Commit, do not mess with rakefile, version, or history.
  (if you want to have your own version, that is fine but bump version in a commit by itself I can ignore when I pull)
* Send me a pull request. Bonus points for topic branches.

Copyright
---------

Copyright (c) 2010 Leandro Pedroni. See LICENSE for details.
