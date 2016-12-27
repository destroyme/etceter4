/**
 * PageTree
 * 
 */

var _pID = {
    "landing": "#landing",
    "menu": "#menu",
    "sound": "#sound",
    "vision": "#vision",
    "words": "#words",
    "blog": "#blog",
    "diary": "#diary",
    "video": "#video",
    "stills": "#stills",
    "info": "#info"
}
pages = []

pages.menu = new Page ({
    "id": _pID.menu,
    "tier": 2,
    "downLinks": [_pID.words, _pID.sound, _pID.vision, _pID.info],
    "upLinks": [_pID.landing],
    "initialize": function () {
        // get the lib and sketch
        $.cachedScript( "js/vendor/p5.js" ).done(function( script, textStatus ) {});
        $.cachedScript( "js/sketch.js" ).done(function( script, textStatus ) {});
    }
})

pages.sound = new Page ({
    "id": _pID.sound,
    "tier": 3,
    "upLinks": [_pID.menu],
    "initialize": function () {
        // add the iFrames
        var _iFrames = [
            '<iframe style="border: 0; width: 300px; height: 300px;" src="http://bandcamp.com/EmbeddedPlayer/album=3780915385/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"><a href="http://music.etceter4.com/album/ogod">OGOD by ET CETER4</a></iframe>',
            '<iframe style="border: 0; width: 300px; height: 300px;" src="http://bandcamp.com/EmbeddedPlayer/album=604244064/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"><a href="http://music.etceter4.com/album/et-ceter4-rmxs">ET CETER4 RMXS by ET CETER4</a></iframe>',
            '<iframe style="border: 10px; width: 300px; height: 300px;" src="http://bandcamp.com/EmbeddedPlayer/album=489900059/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"><a href="http://music.etceter4.com/album/the-progression-of-digression">ProgressionDigression by ET CETER4</a></iframe>',
            '<iframe style="border: 10px; width: 300px; height: 300px;" src="http://bandcamp.com/EmbeddedPlayer/album=448587485/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/"><a href="http://music.etceter4.com/album/etc">Etc by ET CETER4</a></iframe>'
        ]
        
        $('#sound #BCContainer').each(function (index) {
            $(this).html(_iFrames[index]);
        });
    }
})

var pages = [pages.menu, pages.sound, new Page({
    "id": _pID.landing,
    "tier": 1,
    "downLinks": [_pID.menu],
}), new Page ({
    "id": _pID.vision,
    "tier": 3,
    "upLinks": [_pID.menu],
}), new Page ({
    "id": _pID.words,
    "tier": 3,
    "downLinks": ["#diary", "#blog"],
    "upLinks": ["#menu"],
}), new Page ({
    "id": "#blog",
    "tier": 4,
    "upLinks": ["#words"],
}), new Page ({
    "id": "#diary",
    "tier": 4,
    "upLinks": ["#words"],
}), new Page ({
    "id": "#video",
    "tier": 4,
    "upLinks": ["#sight"],
}), new Page ({
    "id": "#stills",
    "tier": 4,
    "upLinks": ["#vision"],
})]

// taken from here: https://api.jquery.com/jquery.getscript/
jQuery.cachedScript = function( url, options ) {
 
  // Allow user to set any option except for dataType, cache, and url
  options = $.extend( options || {}, {
    dataType: "script",
    cache: true,
    url: url
  });
 
  // Use $.ajax() since it is more flexible than $.getScript
  // Return the jqXHR object so we can chain callbacks
  return $.ajax( options );
};