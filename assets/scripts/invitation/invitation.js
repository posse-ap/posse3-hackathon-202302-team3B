'use strict';
{
  $(function(){

    $('.modal_open').click(function(){
      $('#over_lay, .modal_window').fadeIn();
    });
    
    $('.modal_cancel').click(function(){
      $('#over_lay, .modal_window').fadeOut();
    });
    
    $('.modal_done').click(function(){
      $('#over_lay, .modal_window').fadeOut();

      const addedName = document.getElementById('modal_input_name').value;
      
      const addedComment = document.getElementById('modal_input_comment').value;
      
      console.log(addedName);

      const newElement = document.createElement("p");

      const newName = document.createTextNode(addedName + ' ' + addedComment);
      
      // const newComment = document.createTextNode(addedComment);

      newElement.appendChild(newName);
      
      // newElement.appendChild(newComment);

      newElement.setAttribute("class","addedContent");

      var parentDiv = document.getElementById('added_names');
      
      // var parentDivComment = document.getElementById('added_comments');

      parentDiv.appendChild(newElement);
      



    });

  })
}