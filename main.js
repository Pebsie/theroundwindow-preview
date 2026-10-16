// Mark the current date: hide shows that have passed so the list stays honest.
(function(){
  var now=Date.now();
  document.querySelectorAll('.shows li').forEach(function(li){
    var t=li.querySelector('time');
    if(t && new Date(t.getAttribute('datetime')).getTime()+6*3600e3<now) li.hidden=true;
  });
})();
