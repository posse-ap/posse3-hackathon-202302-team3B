'use strict';
// このページは関根担当
{
  $(function(){

    $('.modal_open_one').click(function(){
      $('#over_lay, .modal_window_one').fadeIn();
    });
    
    $('.modal_cancel').click(function(){
      $('#over_lay, .modal_window_one').fadeOut();
    });
    
    $('.modal_done_one').click(function(){
      $('#over_lay, .modal_window_one').fadeOut();

      const addedName = document.getElementById('modal_input_name_one').value;
      
      const addedComment = document.getElementById('modal_input_comment_one').value;

      const newElement = document.createElement("p");

      const newName = document.createTextNode(addedName + ' ' + addedComment);
      

      newElement.appendChild(newName);
      

      newElement.setAttribute("class","addedContent");

      const parentDiv = document.getElementById('added_names_one');
      
      parentDiv.appendChild(newElement);

    });
    // $('.modal_done').click(function(){
    //   $('#over_lay, .modal_window').fadeOut();

    //   const addedName = document.getElementById('modal_input_name').value;
      
    //   const addedComment = document.getElementById('modal_input_comment').value;

    //   const newElement = document.createElement("p");

    //   const newName = document.createTextNode(addedName + ' ' + addedComment);
      

    //   newElement.appendChild(newName);
      

    //   newElement.setAttribute("class","addedContent");

    //   const parentDiv = document.getElementById('added_names');
      
    //   parentDiv.appendChild(newElement);

    // });
    // $('.modal_done').click(function(){
    //   $('#over_lay, .modal_window').fadeOut();

    //   const addedName = document.getElementById('modal_input_name').value;
      
    //   const addedComment = document.getElementById('modal_input_comment').value;

    //   const newElement = document.createElement("p");

    //   const newName = document.createTextNode(addedName + ' ' + addedComment);
      

    //   newElement.appendChild(newName);
      

    //   newElement.setAttribute("class","addedContent");

    //   const parentDiv = document.getElementById('added_names');
      
    //   parentDiv.appendChild(newElement);

    // });

    // $('.add_modal_open').click(function(){
    //   $('#over_lay, .add_modal_window').fadeIn();
    // });

    // $('.add_modal_cancel').click(function(){
    //   $('#over_lay, .modal_window, .add_modal_window').fadeOut();
    // });

    // $('.add_modal_done').click(function(){
    //   $('#over_lay, .modal_window, .add_modal_window').fadeOut();

    //   const addedHost = document.getElementById('add_modal_input_name').value;
    //   // 藤井愛弓

    //   const addedEvent = document.getElementById('add_modal_input_comment').value;
    //   // 簿記の勉強

    //   const newEventElement = document.createElement("div");

    //   newEventElement.setAttribute("class","card");
    //   newEventElement.setAttribute("id","card1");

    //   const cardsWrapper = document.getElementById('cards_wrapper');

      
      
      
    //   cardsWrapper.appendChild(newEventElement);
      
      
    //   document.getElementById('card1').innerHTML = `          <div class="card_inner">
    //   <div class="card_name">${addedEvent}</div>
    //   <div class="participants">${addedHost}</div>
    // </div>
    // <div class="card_inner card_inner_nav">
    //   <div class="button_wrapper">
    //     <button class="card_add_reaction modal_open">
    //       <div>
    //         コメントする
    //       </div>
    //     </button>
    //   </div>
    //   <div class="added_contents">
    //     <div class="added_names" id="added_names">
    //     </div>
    //   </div>
    // </div>`;


    // });

    $('.modal_open_two').click(function(){
      $('#over_lay, .modal_window_two').fadeIn();
    });
    
    $('.modal_cancel').click(function(){
      $('#over_lay, .modal_window_two').fadeOut();
    });
    
    $('.modal_done_two').click(function(){
      $('#over_lay, .modal_window_two').fadeOut();

      const addedName = document.getElementById('modal_input_name_two').value;
      
      const addedComment = document.getElementById('modal_input_comment_two').value;

      const newElement = document.createElement("p");

      const newName = document.createTextNode(addedName + ' ' + addedComment);
      

      newElement.appendChild(newName);
      

      newElement.setAttribute("class","addedContent");

      const parentDiv = document.getElementById('added_names_two');
      
      parentDiv.appendChild(newElement);

    });

    $('.modal_open_three').click(function(){
      $('#over_lay, .modal_window_three').fadeIn();
    });
    
    $('.modal_cancel').click(function(){
      $('#over_lay, .modal_window_three').fadeOut();
    });
    
    $('.modal_done_three').click(function(){
      $('#over_lay, .modal_window_three').fadeOut();

      const addedName = document.getElementById('modal_input_name_three').value;
      
      const addedComment = document.getElementById('modal_input_comment_three').value;

      const newElement = document.createElement("p");

      const newName = document.createTextNode(addedName + ' ' + addedComment);
      

      newElement.appendChild(newName);
      

      newElement.setAttribute("class","addedContent");

      const parentDiv = document.getElementById('added_names_three');
      
      parentDiv.appendChild(newElement);

    });

  })
}